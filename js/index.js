$(document).ready(function(){

//nav
$('.navbar-toggler').on('click' , function(){

$('nav .one').toggleClass('top');
$('nav .two').toggleClass('hidden');
$('nav .three').toggleClass('bottom');

})
// mix it up plugin
var mixer = mixitup('.gallery');

 //loading page
 $(window).on('load',function(){

  $('.loading').fadeOut(2000,function(){

      $('body').css('overflow', 'auto')
  })
})

// venobox plugin
$(document).ready(function(){
    $('.venobox').venobox(); 
  });



  
})




AOS.init({
duration:1000

});


let featuresOffser=$("#about").offset().top -20;
$(window).scroll(function(){

if($(this).scrollTop() > 500 )
{
  $("#btnup").fadeIn(1000);
}
else{
  $("#btnup").fadeOut(1000);
}

let wScrool=$(window).scrollTop();
if(wScrool > featuresOffser)
{

$(".navbar").css("backgroundColor" , "rgba(0 , 0 , 0 , 0.5)");    
}
else{
    $(".navbar").css("backgroundColor" , "transparent"); 
}

})



$("nav ul li a").click(function(){

// remove class active
$(this).addClass("active").parent().siblings().find("a").removeClass("active");


    let ahref=$(this).attr("href");
    
    let sectionOffset=$(ahref).offset().top ;
    
    $("html,body").animate({scrollTop:sectionOffset} , 1000);
    

})
$("#portiflio ul li").click(function(){

  $(this).addClass("active").siblings().removeClass("active");




})

$("#btnup").click(function(){

    $("body ,html").animate({scrollTop:"0px"},1000)
  })
    
//     
//     $(document).ready(function(){
//         $(".owl-carousel").owlCarousel();
//       });
