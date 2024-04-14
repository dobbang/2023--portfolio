$("document").ready(function(){

    $('#fullpage').fullpage({
        sectionsColor: [ "#fff","#fff","#fff","#f1f0ef","#fff","#6e6757"],
        anchors: ["main","Publishing2","Publishing666","Publishing3","contact", "footer"]
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

    $(".tab-wrap .tab-content").eq(0).show()

    $(".tab-menu ul li").click(function(){
        let k = $(this).index();
      
        $(".tab-menu ul li").removeClass("on").eq(k).addClass("on")
    
        $(".tab-menu .tab-content").hide().eq(k).show();

    })


 
    const swiper = new Swiper(".main-banner", {
        loop: true,
        autoplay: { 
            delay: 2000 
        },
        navigation:{
          nextEl:".swiper-button-next",
          prevEl:" .swiper-button-prev"
      },

    })

    const Sswiper = new Swiper(".solution-slider", {
      loop: true,
      slidesPerView: 3,  
      autoplay: { 
          delay: 2000 
      },
      spaceBetween: 30, //마진
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