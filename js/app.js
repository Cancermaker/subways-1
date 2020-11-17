const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

app.use(cors());

const crawling = async (path) => {
  const menus = [];
  const url = 'https://www.subway.co.kr';
  const html = await axios.get(`${url}${path}`);
  const $ = cheerio.load(html.data);
  const $el = $('.pd_list_wrapper > ul > li');

  $el.each((i, el) => {
    const menu = {
      'type': $(el).attr('class'),
      'img': $(el).find('.img > img').attr('src').replace('..', url),
      'ko_title': $(el).find('.tit').text(),
      'en_title': $(el).find('.eng').text(),
      'summary': $(el).find('.summary > p').text().replace(/\t| {2}/g, '').replace(/^\n|\n$/g, '').replace(/\n/g, '<br>'),
    };

    const label = $(el).find('.label > .new');
    const kcal = $(el).find('.cal');
    const view = $(el).find('.btn_view');

    menu['label'] = label && label.text() ? label.text() : '';
    menu['kcal'] = kcal && kcal.text() ? kcal.text() : '';
    menu['view_id'] = view && view.data('id') ? view.data('id') : '';

    menus.push(menu);
  });

  return menus;
}

app.get('/', (req, res) => {
  res.send('subway API');
});

app.get('/subway/sandwich', async (req, res) => {
  const sandwiches = await crawling('/sandwichList');
  res.json(sandwiches);
});

app.get('/subway/wrap', async (req, res) => {
  const wraps = await crawling('/wrapList');
  res.json(wraps);
});

app.get('/subway/salad', async (req, res) => {
  const salads = await crawling('/saladList');
  res.json(salads);
});

app.get('/subway/side', async (req, res) => {
  const sides = await crawling('/sideDrink');
  res.json(sides);
});

app.get('/subway/catering', async (req, res) => {
  const caterings = await crawling('/catering');
  res.json(caterings);
});

const server = app.listen(3000, () => {
  console.log('App running 3000 port');
});

