$(document).ready(function(){

    

    $(window).scroll(function(){


        let now_scoll = window.scrollY

        if(now_scoll <= 100){
            $(".all1 p").addClass("on");
            $(".all2 p").removeClass("on");
        }else if( now_scoll <= 300){
            $(".all1 p").removeClass("on");
            $(".all3 p").removeClass("on");
            $(".all2 p").addClass("on");
        }else if( now_scoll <= 700){
            $(".all2 p").removeClass("on");
            $(".all4 p").removeClass("on");
            $(".all3 p").addClass("on");
        }else if(now_scoll <= 1000){
            $(".all3 p").removeClass("on");
            $(".all4 p").addClass("on");
        }



        let pos = $(window).scrollTop(); 
        let current = (pos/($(document).outerHeight()-$(window).height())) * 100;

        $(".bar").width(current+"%");
        
    }) 

    
})