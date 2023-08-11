$("document").ready(function(){

    
    $(".c-title-wrap").click(function() {
        $(this).next(".c-content-wrap").stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next(".c-content-wrap").siblings(".c-content-wrap").slideUp(300); // 1개씩 펼치기
        });
    
    
        
});


