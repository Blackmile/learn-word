$(document).ready(function(){
    // for sticky navbar
    $('#home-info').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky')
        }
    },{
        offset: '70%;'
    });

    // inPage scroll
    $('.scroll-to-home').click(function(){
        $('html, body').animate({scrollTop: $('#showcase').offset().top}, 1000);
    });
    $('.scroll-to-info').click(function(){
        $('html, body').animate({scrollTop: $('#home-info').offset().top}, 1000);
    });
    $('.scroll-to-features').click(function(){
        $('html, body').animate({scrollTop: $('#features').offset().top}, 1000);
    });

    $('.wp-1').waypoint(function(direction){
        $('.wp-1').addClass('animate__animated animate__fadeInUp');
    },{
        offset: '50%'
    });

    $('.wp-2').waypoint(function(direction){
        $('.wp-2').addClass('animate__animated animate__bounceIn');
    },{
        offset: '50%'
    });

});