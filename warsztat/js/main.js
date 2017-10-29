$(document).ready(function(){
    addScrolled();
});

$(document).scroll(function(){
    addScrolled();
});
                   
function addScrolled(){
    
    if (window.innerWidth>992) {
    var height = $('#main-nav').height();
    var scroll = $(window).scrollTop();
    
    if(scroll > height) {
        $('#main-nav').addClass('transparent-blue');
//        $('.navbar-collapse').addClass('transparent-blue2');
    } else {
        $('#main-nav').removeClass('transparent-blue');
//        $('.navbar-collapse').removeClass('transparent-blue2');
    }
    }

}