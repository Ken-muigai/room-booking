

$(document).ready(function(){
    //nav load
    $('#nav-placeholder').load('navBar.html nav')

    //footerloader
    $('#footer').load('index.html footer')
    // toggle the hidden details div
    $(".showCardBedsitters").hover(function(){
        $(".initiallyHidden1").toggle();
    });
    $(".showCard1Bedroom").hover(function(){
        $(".initiallyHidden2").toggle();
    });
    $(".showCard2Bedroom").hover(function(){
        $(".initiallyHidden3").toggle();
    });
    // show naviGATION b
});

