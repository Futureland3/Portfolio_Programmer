$(document).ready(function(){
    $('.menu_toggler').click(function(){
        $(this).toggleClass("active");
        $(".links").toggleClass("active");
        $(".links a").toggleClass("active");
    });
});

// $('#user_button').toggle().css('borderBottomLeftRadius','+5px');



