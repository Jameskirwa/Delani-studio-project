$(document).ready(function(){
  $(".port-desc").hide();
  $(".portfolio").hover(function(){
    $(this).children(".port-desc").toggle();
  });
  $(".hide").hide();
  $(".flex").click(function(){
    $(this).children(".hide").toggle();
    $(this).children(".flex img").toggle();
  });
  //
  // $("#submit").click(function(){
  //   ("").toggle();
  //   ("").toggle();
  // });
  $("#submit").click(function(event){
    var name = $("#fName").val();
    if(name != ""){
      alert( name + " thanks for sending a message.");
    }else {
      alert("Please fill in your details");
    }

    event.preventDefault();
  });
});
