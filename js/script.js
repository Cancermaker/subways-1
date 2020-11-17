
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
    menu.on('mouseenter', (event) => {
        const target = event.currentTarget

        $(target).find('.ko_title').stop().animate({'top':'50px'},400)
        $(target).find('.en_title').stop().animate({'top':'95px'},400)
        $(target).find('.desc').stop().animate({'top':'125px','opacity':'1'},500)
        $(target).find('.icon').stop().animate({'bottom':'35px','opacity':'1'},300)
    })

    menu.on('mouseleave', (event) => {
        const target = event.currentTarget

        $(target).find('.ko_title').stop().animate({'top':'100px'},400)
        $(target).find('.en_title').stop().animate({'top':'145px'},400)
        $(target).find('.desc').stop().animate({'top':'200px','opacity':'0'},500)
        $(target).find('.icon').stop().animate({'bottom':'100px','opacity':'0'},300)
    })

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
    })