$("document").ready(function(){





    $(".main-nav li").mouseover(function(){
        $(this).find($(".submenu")).stop().slideDown();
    })

    $(".main-nav li").mouseout(function(){
        $(this).find($(".submenu")).stop().slideUp();
    })


        const swiper = new Swiper(".main-slider", {
            loop: true,
        autoplay: { 
            delay: 2000
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
        effect: "fade",
        
        })



        // aside 고정
        $(window).scroll(function(){
            let pos = $(window).scrollTop(); 
            let current = (pos/($(document).outerHeight()-$(window).height())) * 100;

            $(".bar").width(current+"%");
            
            if(pos >= 120){
                $(".aside").addClass("on");
            }else {
                $(".aside").removeClass("on");
            }


        })


        $(window).scroll(function(){
            curSc = $(document).scrollTop() + $(window).height();
            body_height = $("body").height(); 
            footer_height = $(".footer").height();
            bottom_top = body_height - footer_height; 
            
            let pos = $(window).scrollTop(); 
    
            if(pos >= 1550){
                $(".aside").addClass("down");
            }else{
                $(".aside").removeClass("down");
                $(".aside").removeClass("on");
    
    
    
            }




        })

    



        //  팝업
        $(".pop-up-close").click(function(){
            $(".pop-up").hide();
            $(".window").hide();
        })
    
        function closeToday() { 
            setCookie( "popToday", "close" , 1  ); 
            $(".pop-up-close").css("display", "none");
            document.getElementById("popup_layer").style.display = "none";
        }




        //팝업 쿠키 구현





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