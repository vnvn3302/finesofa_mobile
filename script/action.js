$('.hamburger').click(function(){
    $(this).toggleClass('on');
    $(this).siblings('nav').fadeToggle();
})
$('.gnb li').click(function(){
    $('.lnb').slideUp();
    $(this).find('.lnb').stop().slideToggle();
})
