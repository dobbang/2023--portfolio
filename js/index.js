

$("document").ready(function(){


setTimeout(function(){
  $('.loadingback').fadeOut()

},4000)

  document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
         event.preventDefault(); 
       } 
   }, false);

var lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
         event.preventDefault(); 
       } lastTouchEnd = now; 
   }, false);
   
  
  $('#fullpage').fullpage({
    sectionsColor: ["#66669a", "white", "white", "white", "white", "white", "#8b8bc8"],
    anchors: ["home", "about", "Publishing1", "Publishing2","Publishing3", "design","contact"],

    responsiveWidth: 1023,

    onLeave : function(anchorLink, index){ 
      if (index == 1){
        $(".btn-line").css("background-color", "#fff" )
        $(".title").css("color", "#fff" )
        $(".title").css("font-size", "25px" )
      }else{
        $(".btn-line").css("background-color", "#7c7bb1" )
        $(".title").css("color", "#7c7bb1" )
        $(".title").css("font-size", "15px" )
      }	
    }
});





$(".about .content").click(function(){
  $(".modal-introduce").toggleClass('on');
  $(".about .window-wrap").toggleClass('on');
});




$(".about .modal-introduce").click(function(){
  $(".modal-introduce").toggleClass('on');
  $.fn.fullpage.setAllowScrolling(true)
});





$(".button2").click(function(){
  $(".modal-content").toggleClass('on');
  $(".window-wrap").toggleClass('on');
  $(".modal-button").addClass('on');
  $.fn.fullpage.setAllowScrolling(false)
});



$(".modal-button").click(function(){
  $(".modal-content").toggleClass('on');
  $(".window-wrap").toggleClass('on');
  $('body').off('scroll touchmove mousewheel');
  $.fn.fullpage.setAllowScrolling(true)
});


$(".window-wrap").click(function(){
  $(".modal-content").toggleClass('on');
  $(".window-wrap").toggleClass('on');
  $.fn.fullpage.setAllowScrolling(true)
});




$(".modal-image").click(function(){
  $(".modal-image-zone").toggleClass('on');
  $(".modal-window").toggleClass('on');
  $.fn.fullpage.setAllowScrolling(false);
  $(".nav .nav-wrap a").addClass('on');
});


$(".modal-window").click(function(){
  $("modal-image-zone").toggleClass('on');
  $(".modal-window").toggleClass('on');
  $.fn.fullpage.setAllowScrolling(true)
  $(".nav .nav-wrap a").removeClass('on');
});






newMockFrame(); 

function random(min, max) {
     
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector,delay,size){
 
  gsap.to(selector, random(1.5,2.5), {
    y: size,
    repeat: -1, // -1 무한반복
    yoyo: true, // 애니메이션 되돌아오기(설정안할 시 끈킴)
    ease: Power1.easeInOut, // 타이밍함수
    delay: random(0,delay) // 지연시간
  })
}
floatingObject('.floating1', 0.2, 5)
floatingObject('.floating2', 0.1 , -7)
floatingObject('.floating3', 1 , 5)
floatingObject('.floating4', 0.0 , 5)
floatingObject('.floating5', 0.0 , 5)



})
    

