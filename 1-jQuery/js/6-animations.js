$(function(){
   var mainHeading = $("#main-heading");
//mainHeading.hide(5000);
//    mainHeading.show(5000);
//    mainHeading.fadeIn(2000);
//    mainHeading.slideUp(5000).slideDown(3000);
    mainHeading.animate({fontSize: "10em"}, 1000, function() {
        document.location.href=("http://google.com");
    });
});