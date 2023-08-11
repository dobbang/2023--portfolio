$("document").ready(function(){



    const mainswiper = new Swiper(".main-banner",{
    loop: true,
    pagination: {
        el: ".swiper-pagination",
      },
    autoplay: { 
        delay: 2000
    },
    
    })


    const bestswiper = new Swiper(".best-slider", { 
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true},
        slidesPerView: 2,   //한번에 보이는 갯수
        autoplay: { //자동재생
            delay: 2000 //딜레이
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:" .swiper-button-prev"
        },
        spaceBetween: 30, //마진
        freeMode:true, //세기에 따라 다르게 넘어감
        breakpoints: {
            1023: {
              slidesPerView: 5,  //브라우저가 640보다 클 때
            },
        }
        
    })


    const sliponswiper = new Swiper(".classic-slider1", {
        loop: true,
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:" .swiper-button-prev"
        },
        spaceBetween: 10,
        slidesPerView: 1,  
        autoplay: {
            delay: 2000 
        },
        freeMode:true,
        breakpoints: {
            1023: {
                slidesPerView: 3,  //브라우저가 640보다 클 때
            },
            640: {
                slidesPerView: 2,  //브라우저가 640보다 클 때
            },
        }
        
    })




    const footerswiper = new Swiper(".footerslide", {
        loop: true,
        slidesPerView: 2,  
        freeMode:true,
        autoplay: {
            delay: 2000 
        },
        breakpoints: {
            1023: {
              slidesPerView: 4,  //브라우저가 640보다 클 때
            },
            
        }
        
    })
    

    // 이메일 확인 식 
    $(".light i").click(function(){

        let input = document.getElementById("e-mail").value
        let email_format = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

        if(email_format.test(input)){
            alert("구독 해주셔서 감사합니다"); //제대로 입력 하였을 때 
            $(".e-mail-x").removeClass("on")
        }else{ // 제대로 입력 하지 못하였을 때
            $(".e-mail-x").addClass("on")
            document.getElementById("e-mail").value = ""; 
        }
    })

    
    // 클래식 컨텐츠 아코디언 메뉴
    $(".c-title-wrap").click(function() {
        $(this).next(".c-content-wrap").stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next(".c-content-wrap").siblings(".c-content-wrap").slideUp(300); 
    });



    //  태블릿 햄버거 아코디언 하위 메뉴 
    $(".que").click(function() {
        $(this).next(".anw").stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기 

        });

        // 태블릿 햄버거 누르면 아코디언 표시되는 메뉴
        $(".fa-bars").click(function() {
            $(".accodi").fadeToggle('on');
            $(".search-content").fadeOut();
            });



        $(".search-icon").click(function(){
            $(".search-content").fadeToggle();
            $(".accodi").fadeOut();

        })


        $(".search-close").click(function(){
            $(".search-content").fadeOut();
        })

});
