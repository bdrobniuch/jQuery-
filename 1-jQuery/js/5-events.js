$(function () {
    $("button").click(function () {
        $("#main-heading").css("color", "red");
    });

    $("#cities").change(function() {
        $("#chosen-city").text( this.value);
        console.log(this.value);
    })
});
