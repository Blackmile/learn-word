$(document).ready(function(){
    // for sticky navbar
    $('#home-info').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky')
        }
    },{
        offset: '50px;'
    });

    // inPage scroll
    $('.scroll-to-home').click(function(){
        $('html, body').animate({scrollTop: $('#home-info').offset().top}, 1000);
    })
});