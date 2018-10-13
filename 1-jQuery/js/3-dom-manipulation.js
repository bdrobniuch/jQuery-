$(function () {
    var mainHeading = $("#main-heading");
    mainHeading.text("Nowy tekst");
    mainHeading.html("NOwy tekst <br> erer");
    mainHeading.append("<span> wewnatrz na koncu </span>");
    mainHeading.prepend("<span> wewnatrz na poczatku </span>");
    mainHeading.after("<div> za znacznikiem </div>");
    mainHeading.before("<div> przed znacznikiem </div>");
    
//    mainHeading.remove();
    //mainHeading.empty();
    $("body").prepend($("h3").eq(2));
    
    mainHeading.css("background-color", "red");
    mainHeading.css({color:"white", fontSize: "1em"});
    
    var inputVAlue = $("input");
    console.log(inputVAlue.val());
    inputVAlue.val( "nowa wartosc");
    
    mainHeading.addClass("nowa-klasa druga-klasa");
    mainHeading.removeClass("druga-klasa");
})
