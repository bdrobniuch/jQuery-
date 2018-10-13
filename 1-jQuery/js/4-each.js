$(function () {
    console.log("dziala");
    $("h3").each(function(index){
        console.log($(this));
        $(this).css("margin-left",index*10+"px");
    })
})

