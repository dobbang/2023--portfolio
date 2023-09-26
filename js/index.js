$("document").ready(function(){


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
    sectionsColor: ["#66669a", "#9090ba", "white", "white","white","white","#8b8bc8"],
    anchors: ["home", "about", "Publishing1","Publishing2","Publishing3","clone-wrap","contact"],
    responsiveWidth: 1023,
    
});



$(".button").click(function(){
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



const swiper = new Swiper(".clonecoding", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  breakpoints:{
    480:{slidesPerView:1},
    768:{slidesPerView:2},
    1024:{slidesPerView:3},
    1400:{slidesPerView:4}
  }
 



});



})
    


function makeItRain() {
  document.getElementById("makeItRain").disabled = true;
  var end = Date.now() + 2 * 1000;

  var colors = ['#bb0000', '#ffffff'];

  function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors });

    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors });


    if (Date.now() < end) {
      requestAnimationFrame(frame);
    } else
    {
      document.getElementById("makeItRain").disabled = false;
    }
  };
  frame();
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
