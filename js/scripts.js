$(document).ready(function() {
$("#submit").click(function(){
    var name = $("#contactName").val();
    var email = $("#contactEmail").val();
    var info = $("#textArea").val();
    $(".contactName").text(name);
    $(".contactEmail").text(email);
    $(".textArea").text(info);
    alert("Thank you " + name + " for your feedback. We will be in touch via " +email);
    });
});  