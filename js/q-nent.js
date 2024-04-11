$("document").ready(function(){





    $(".main-nav li").mouseover(function(){
        $(this).find($(".submenu")).stop().slideDown();
    })

    $(".main-nav li").mouseout(function(){
        $(this).find($(".submenu")).stop().slideUp();
    })


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


            if(pos > 1560){
                $(".main-wrap-aside").addClass("down")
            }else{
                $(".main-wrap-aside").removeClass("down")
            }

            console.log(pos)

        })








        // tab-menu

        $('.tab-title-ul li').eq(0).addClass('on')
        $('.tab-text .tab-text-content').eq(0).addClass('on')
        
        $('.tab-title-ul li').click(function(){
            
            const k = $(this).index();
            $('.tab-title-ul li').removeClass("on").eq(k).addClass("on")
            $('.tab-text-content').removeClass("on").eq(k).addClass("on")


        })


        //푸터 select options

        $(".select-box-wrap").click(function(){
            $(".options").toggleClass("on");
        })

        

        $(".options").mouseover(function(){
            $(".options").addClass("on");
        })
});