$(function(){
    var mainHeading = $("#main-heading");
    var secHeading = $(".heading");
    var otherHEadings = $("h3");
    
    otherHEadings.css("color", "red");
    otherHEadings.eq(1).css("color", "yellow");
    console.log (mainHeading);
    console.log (secHeading);
    console.log( otherHEadings);
})