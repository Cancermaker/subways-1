$(document).ready(() => {
    $('.gnb > ul > li').on('mouseenter', () =>{
        $('.snb').css({'display': 'inline-block'});
        $('header').stop().animate({'height' : '405px' })
         $('.snb').stop().animate({'opacity': '1',})
    })
    //
    $('.gnb > ul > li').on('mouseleave', () =>{
        
        $('header').stop().animate({'height' : '175px'})
        $('.snb').stop().animate({'opacity': '0'}, 300, () =>{
            $('.snb').css({'display' : 'none'})
        })

    }) 

/*배너 */
let banner = $('.main > .banner')
 banner.find('h2').animate({'opacity': '1', 'top': '0'}, 700);
 banner.find('p').delay(300).animate({'opacity': '1', 'top': '0'});
 banner.find('.img').delay(300).animate({'opacity': '1', 'top': '0'});

let subHeader = $('.main > .sub-header');
let subTop = subHeader.find('top');
let subHeaderTop = subHeader.offset().top;

$(window).on('scroll', ()=>{
    let scroll = $(window).scrollTop();

    if(scroll > subHeaderTop){
        subHeader.addClass('fixed');
    }else{
        subHeader.removeClass('fixed')
    }
})

subTop.on('click', ()=>{
    $('html, body').stop().animate({
        'scrollTop' : '0'
    }, 1000);
})
let menu = $('.menu ul > li');

menu.on('mouseenter', (event) =>{
let target = event.currentTarget;

$(target).find('.ko_title').stop().animate({'opacity': '1' ,'top' :'50px'},400)
$(target).find('.en_title').stop().animate({'opacity': '1' ,  'top' :'95px'}, 400)
$(target).find('.desc').stop().animate({'opacity': '1' , 'top' :'125px'}, 500)
$(target).find('.icon').stop().animate({'opacity': '1' ,  'bottom' :'30px'},300)
})
menu.on('mouseleave', (event) =>{
    $(target).find('.ko_title').stop().animate({'opacity': '0' ,'top' :'100px'},300)
    $(target).find('.en_title').stop().animate({'opacity': '0' ,'top' :'145px'}, 300)
    $(target).find('.desc').stop().animate({'opacity': '0' ,'top' :'200px'}, 300)
    $(target).find('.icon').stop().animate({'opacity': '0' ,'bottom' :'0px'}, 300) 
})
})
