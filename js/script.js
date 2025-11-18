
$(document).ready(function () {
    $('.menu__btn').on('click', function (){
        $('.menu__list').toggleClass('active');
        $('.menu__btn').toggleClass('active');
        $('.menu__logo').toggleClass('active');
        $('body').toggleClass('active');
    });
  
    $('.menu__link').on('click', function (){
      if($( "body" ).hasClass( "active" )){
        $('body').toggleClass('active');
        $('.menu__list').toggleClass('active');
        $('.menu__btn').toggleClass('active');
        $('.menu__logo').toggleClass('active');
        
      }
    });
});
  
    