$("document").ready(function(){

    $('#fullpage').fullpage({
        sectionsColor: [ "#fff","#fff","#f1f0ef","#fff","#6e6757"],
        anchors: ["main","Publishing2","Publishing3","contact", "footer"]
      });

    $(".hambuger").click(function(){
        $(".menu").toggleClass('on');
        $(".menu-btn").toggleClass('checked');
    });

    $(".menu .menu-wrap .content2 p").click(function(){
      $(".content2 ul").toggleClass('on');
  });



  $(".all-menu").click(function(){
    $(".menu").toggleClass('on');
    $(".menu-btn").toggleClass('checked');

});

  $(".tab-menu ul li").eq(0).addClass("on")

    // 화면 처음 시작시 첫번째 탭 컨텐츠를 화면에서 출력

    $(".tab-wrap .tab-content").eq(0).show()

    //탭 리스트를 클릭하는 이벤트생성 , 현재의 인덱스 값을 변수에 저장 ,

    $(".tab-menu ul li").click(function(){
        let k = $(this).index();
        //탭리스트 클릭시 리스트 아이템의 클래스를 삭제하고 선택한 요소에 클래스 추가
      
        $(".tab-menu ul li").removeClass("on").eq(k).addClass("on")
    
        // 탭리스트 클릭시 탭 컨텐츠를 화면에서 모두 지우고 선택한 요소를 화면에 출력
    
        $(".tab-menu .tab-content").hide().eq(k).show();

        //어디서 선택자 끝나는지 잘보기 오타 잘보기 
    })






    
    const mainswiper = new Swiper(".main-banner",{
        loop: true,
        effect : 'fade',
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
          navigation:{
            nextEl:".swiper-button-next",
            prevEl:" .swiper-button-prev",
        },
        autoplay: { 
            delay: 2000
        },
        
        })

    const footerswiper = new Swiper(".footer-slide",{
        loop: true,
        effect : 'fade',
        navigation:{
          nextEl:".swiper-button-next",
          prevEl:" .swiper-button-prev"
      },
        autoplay: { 
            delay: 2000
        },
        
        })

})