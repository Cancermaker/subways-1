
$(document).ready(() => {
    $('.gnb > ul > li').on('mouseenter', () => {
        $('.snb').css({'display':'inline-block'})
        $('header').stop().animate({
            'height':'405px'
        })
        $('.snb').stop().animate({
            'opacity': '1'
        })
    })

    $('.gnb > ul').on('mouseleave', () => {
        $('header').stop().animate({
            'height':'175px'
        })

        $('.snb').stop().animate({
            'opacity': '0'
        }, 300, () => {
            $('.snb').css({'display':'none'})
        })
    })

    // banner
    const banner = $('.main > .banner')

    banner.find('h2').animate({'opacity':'1','top' : '0'}, 700)
    banner.find('p').delay(300).animate({'opacity':'1','top' : '0'}, 700)
    banner.find('.img').delay(300).animate({'opacity':'1','top' : '0'}, 700)

    // sub header
    const subHeader = $('.main > .sub-header')
    const subTop = subHeader.find('.top')
    const subHeaderTop = subHeader.offset().top
    console.log(subHeaderTop)

    $(window).on('scroll', () => {
        const scroll = $(window).scrollTop()

        if(scroll > subHeaderTop){
            subHeader.addClass('fixed')
        } else{
            subHeader.removeClass('fixed')
        }
    })

    subTop.on('click', () => {
        $('html, body').animate({
            scrollTop: 0
        }, 700)
    })

    // select menu
    const menu = $('#menu ul > li')

const menuShow = (event) => {

        const target = event.currentTarget
    
        $(target).find('.ko_title').stop().animate({'top':'50px'},400)
        $(target).find('.en_title').stop().animate({'top':'95px'},400)
        $(target).find('.desc').stop().animate({'top':'125px','opacity':'1'},500)
        $(target).find('.icon').stop().animate({'bottom':'35px','opacity':'1'},300)
    
}
const menuHide = (event) => {

        const target = event.currentTarget
            
        $(target).find('.ko_title').stop().animate({'top':'100px'},400)
        $(target).find('.en_title').stop().animate({'top':'145px'},400)
        $(target).find('.desc').stop().animate({'top':'200px','opacity':'0'},500)
        $(target).find('.icon').stop().animate({'bottom':'100px','opacity':'0'},300)
    
}


    let menuTab = $('#menu-tab ul > li');
    menuTab.on('click', (event) =>{
        let target = event.currentTarget;
        let menuName = $(target).data('menu')

        menuTab.removeClass('active');
        $(target).addClass('active');

        $(menu).stop().animate({
            'opacity' : '0'
        }, 400,  ()=>{  
            $(menu).css({'display': 'none'})

            if(menuName  === 'all'){
                $(menu).stop().css({'display' : 'block'}).animate({'opacity' : '1'})
            }else{
                    $(`${menuName}`).stop().css({'display' : 'block'}).animate({'opacity' : '1'})
                }
            }) 
        })

const getsandwich = ()  => {
    return fetch('http://localhost:3000/subway/sandwich', {
        'method' : 'GET',
        'headers' :   {
            'Content-Type' : 'application/json'
        }
    }).then(res => res).then(res => res.json())
}

const templateSandwichLabel = (label) => {
    if(label){
        return`<div class="label">${label}</div>`;
    }else{
        return``;
    }
}

const templateSandwich = (sandwich)  => {
    console.log(sandwich['ko_title'])
    const {type, label, img, ko_title, en_title, kcal, summary, view_id} = sandwich;
    
        return`
        <li class="${type}">
        <a href="#">
        ${templateSandwichLabel(label)}
            <div class="label">${label}</div>
            <div class="img">
                <img src="${img}" alt="${ko_title}">
            </div>
            <strong class="ko_title">${ko_title}</strong>
            <span class="en_title">${en_title}</span>
            <span class="kcal">${kcal}</span>
            <p class="desc">${summary}</p>
            <div class="icon">${view_id}</div>
        </a>
    </li>
        `;
}

const listSandwwich = async () => {
    const sandwiches = await getsandwich();
console.log(sandwiches)

// for(let i = 0; i < sandwiches.length;  i++)
// sandwiches.then((data)=>{
//     console.log(data)
// })
const menu = document.getElementById('menu');
const menuWrap = menu.querySelector('ul');

    for(const sandwich of sandwiches){
        const node = $(templateSandwich(sandwich))[0];
        $(node).on('mouseenter', menuShow);
        $(node).on('mouseleave', menuHide);
        menuWrap.append(node);
    }
}
listSandwwich()



    })