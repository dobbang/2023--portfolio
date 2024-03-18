$("document").ready(function(){





    const mainswiper = new Swiper(".main-slider",{
        loop: true,
        autoplay: { 
            delay: 2000
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:" .swiper-button-prev"
        },
        effect: "fade",
        
        })



        // aside 고정
        $(window).scroll(function(){
            let pos = $(window).scrollTop(); 
            let current = (pos/($(document).outerHeight()-$(window).height())) * 100;

            $(".bar").width(current+"%");
            
            if(pos >= 120){
                $(".aside").addClass("on")
            }else{
                $(".aside").removeClass("on")
            }
        

        })








        // tab-menu

        $('.tab-title-ul li').eq(0).addClass('on')
        $('.tab-text .tab-text-content').eq(0).addClass('on')
        
        $('.tab-title-ul li').click(function(){
            
            const k = $(this).index();
            $('.tab-title-ul li').removeClass("on").eq(k).addClass("on")
            $('.tab-text-content').removeClass("on").eq(k).addClass("on")


        })


        

        
});