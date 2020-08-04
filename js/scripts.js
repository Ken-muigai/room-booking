
$(document).ready(function(event){
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
    event.preventDefault();
});
