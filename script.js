$(document).ready(function(){
    $(".method").hide();
    $("#button1").click(function(){
        $("#method1").toggle();
  });
   $(".method").hide();
   $("#button2").click(function(){
        $("#method2").toggle();
  });
  $(".method").hide();
  $("#button3").click(function(){
        $("#method3").toggle();
  }); 
});

$("#share").jsSocials({
    shares: ["twitter", "pinterest", "stumbleupon", "whatsapp"]
});