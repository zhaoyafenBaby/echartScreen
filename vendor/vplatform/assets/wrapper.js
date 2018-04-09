var wrapper = document.getElementsByClassName('wrapper')[0];
var content = $('.content');
var r = content.clientWidth / wrapper.offsetWidth;
console.log(r);
$('.wrapper').css({ "zoom": r}); 

$(window).resize(function() { 
    var wrapper = document.getElementsByClassName('wrapper')[0];
    var content = $('.content');
    var r = content.clientWidth / wrapper.offsetWidth;
    $('.wrapper').css({ "zoom": r}); 
}); 