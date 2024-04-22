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
            let pos = $(window).scrollTop(); 
    
            if(pos >= 1550){
                $(".aside").addClass("down");
            }else{
                $(".aside").removeClass("down");
    
    
    
    
            }




        })

    



        //  팝업

        let $popup = document.querySelector(".pop-up")
        let $checkbox = document.querySelector("#popup")
        let $popup_close = document.querySelector(".close")



        //쿠키생성
        function setCookie( name , value ,day){
            let date = new Date();  // 현재 날짜 지정
            date.setDate(date.getDate() + day);

            let mycookie = '';
            mycookie += name + '=' + value + ';' ;
            mycookie += 'Expires=' + date.toUTCString();

            document.cookie = mycookie ; //쿠키 설정 , 생성

        }

        //쿠키 삭제 

        function delcookie (name) {
            let date = new Date();
            date.setDate(date.getDate() - 1);

            document.cookie = setCookie ; 
        }
        
        
        //쿠키확인
        function checkCookie (name){
            let cookeis = document.cookie.split(';');

            let visited = false ; // 방문여부 변수 (거짓)

            for (let i in cookeis){
                if(cookeis[i].indexOf(name) > -1 ){
                    visited = true ;
                }
            }


            if(visited == true ){
                //재방문
                $(".pop-up").hide();
                $(".window").hide();
                
            }else{
                //신규방문
                $(".pop-up").show();
                $(".window").show();

            }
        }

        checkCookie('popupClose')

        
        $popup_close.addEventListener('click' , function(){
            //check 박스 여부
            if($checkbox.checked){
                //체크함
                //팝업 닫고 쿠키 생성
                $(".pop-up").hide();
                $(".window").hide();
                setCookie('popupClose', 'main', 1) //하루 안보기

            }else{
                //체크하지 않음 
                //팝업 닫고 쿠키 제거 
                $(".pop-up").hide();
                $(".window").hide();
                delcookie('popupClose');
            }


        })

        //전체메뉴와 팝업 관리 


        function checkCookie_menu (name){
            let cookeis = document.cookie.split(';');

            let visited = false ; // 방문여부 변수 (거짓)

            for (let i in cookeis){
                if(cookeis[i].indexOf(name) > -1 ){
                    visited = true ;
                }
            }

            if(visited == true ){
                //재방문

                alert("올메뉴클릭")
            }else{
                //신규방문
                $(".pop-up").hide();
                $(".window").hide();

            }
        }

        $(".all-menu").click(function(){
            setCookie('menuopen', 'main')//메뉴오픈 쿠키 생성
            checkCookie_menu('menuopen')
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