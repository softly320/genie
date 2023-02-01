$(document).ready(function () {
    new WOW({
        animateClass: "animate__animated"
    }).init()


    $(".popup .popup-btn a").click(function(){
        $(".popup .popup-content").slideToggle()
        $(".popup .popup-btn a").toggleClass("on")
        $(".popup .popup-btn a i").toggleClass("on")
    })


    $(window).scroll(function () {
        let pos = $(window).scrollTop()
        // console.log(pos)
        if(pos >= 5){
            $(".header").addClass("on");
            $(".popup, .popup-btn").hide()
            $(".top-btn").show()
        }else{
            $(".header").removeClass("on");
            $(".popup, .popup-btn").show()
            $(".top-btn").hide()
        }
        if($(window).width() < 767){
            $(".popup, .popup-btn").hide()
        }

    })

    $(".top-btn").click(function(){
        $("html, body").stop().animate({
            scrollTop:0
        }, 800)
    })

    $(".magazine .magazine-wrap .menu ul li").eq(0).addClass("on")
    $(".magazine .magazine-wrap .menu ul li").click(function(e){
        e.preventDefault()
        let i = $(this).index()
        $(".magazine .magazine-wrap .menu ul li").removeClass("on").eq(i).addClass("on")
    })

    $(".header .header-wrap .nav").click(function(){
        $(".header .header-wrap .nav span").toggleClass("on")
        $(".sub-menu").toggleClass("on")
        $("body").toggleClass("on")
    })

    $(".header .header-wrap .search a").click(function(e){
        e.preventDefault();
    })

    $(".footer .footer-wrap .sns ul li a").click(function(e){
        e.preventDefault();
    })

    $(".sub-menu ul li a").click(function(e){
        e.preventDefault();
    })








    // 스와이프구간


    const swiper = new Swiper(".video-swiper",{
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        effect: "coverflow",
        grabCursor: true,
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 400,
            modifier: 3,
            slideShadows: true,
        }
    })






    
    const $magazine_nav = $(".magazine ul li")
    const $magazine = $(".magazine .magazine-content")

    $magazine.eq(0).show()

    function swiper_slide(id, option){
        const swiper2 = new Swiper(id,option)
    }


    swiper_slide(".ma1", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 10,
        pagination:{
            el: ".swiper-pagination",
            clickable: true
        },
        observer: true,
        observeParents: true
    })

    

    $magazine_nav.click(function(){
        let i = $(this).index()
        swiper.destroy();
        $magazine_nav.removeClass("on").eq(i).addClass("on")
        $magazine.hide().eq(i).show();
        swiper_slide(".ma"+(i+1), {
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 10,
            pagination:{
                el: ".swiper-pagination",
                clickable: true
            },
            observer: true,
            observeParents: true
        })
        
    })





    // $('.swiper-slide').on('mouseover', function(){
    //     swiper.autoplay.stop();
    // });
    // $('.swiper-slide').on('mouseout', function(){
    //     swiper.autoplay.start();
    // });








    //실시간차트구간




    $(".nowchart .nowchart-wrap .slide .title ul li").eq(0).addClass("on")
    let idx = 0;

    $(".nowchart .nowchart-wrap .slide .title ul li").mouseover(function(){
        idx = $(this).index()
        $(".nowchart .nowchart-wrap .slide .title ul li").removeClass("on").eq(idx).addClass("on")
        $(".nowchart .nowchart-wrap .slide > ul > li").hide().eq(idx).show()
        clearInterval(timer);
    }).mouseout(function(){
        clearInterval(timer);
        timer = setInterval(function(){
            idx++;
            if(idx > $(".nowchart .nowchart-wrap .slide > ul > li").length-1){
                idx=0;
            }
            $(".nowchart .nowchart-wrap .slide .title ul li").removeClass("on").eq(idx).addClass("on")
            $(".nowchart .nowchart-wrap .slide > ul > li").hide().eq(idx).show()
        }, 2500)
    })

    let timer = setInterval(function(){
        idx++;
        if(idx > $(".nowchart .nowchart-wrap .slide > ul > li").length-1){
            idx=0;
        }
        $(".nowchart .nowchart-wrap .slide .title ul li").removeClass("on").eq(idx).addClass("on")
        $(".nowchart .nowchart-wrap .slide > ul > li").hide().eq(idx).show()
    }, 3000)






}); //jq