$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
}


$(document).ready(function(){
    $('.hide__title').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});