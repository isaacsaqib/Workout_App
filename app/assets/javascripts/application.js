// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require signup
//= require login
//= require youtube
//= require chest
//= require arm
//= require leg
//= require lats
//= require glutes
//= require abdominals


$(document).ready(function(){

  if(window.innerHeight > window.innerWidth){
    alert("Please use Landscape!");
  }
  $("#form-container").hide();
$("#return-rear-leg").hide();
  $(".bodypart").css("top", "+=" + 50);
  $(".bodypart").css("bottom", "-=" + 50);

  $("#Left-Chest").css('left', window.innerWidth/2 - 112);
  $("#Right-Chest").css('left', window.innerWidth/2 + 10);
  $("#Left-Arm").css('left', window.innerWidth/2 - 190);
  $("#Right-Arm").css('right', window.innerWidth/2 - 150);
  $("#Right-Leg").css('right', window.innerWidth/2 - 120);
  $("#Left-Leg").css('left', window.innerWidth/2 - 140);
  $("#Tricep").css('left', window.innerWidth/2 - 85);
  $("#Bicep").css('right', window.innerWidth/2 - 5);
  $("#Forearm").css('left', window.innerWidth/2 - 20);
  $("#Shoulder").css('left', window.innerWidth/2 - 30);
  $("#Left-Glute").css('right', window.innerWidth/2 - 5);
  $("#Right-Glute").css('right', window.innerWidth/2 - 120);
  $("#Lower-Back").css('right', window.innerWidth/2 - 65);
  $("#Right-Lat").css('right', window.innerWidth/2 - 145);
  $("#Left-Lat").css('left', window.innerWidth/2 - 90);
  $("#Rhomboids").css('left', window.innerWidth/2 - 5);
  $("#Trapezius").css('right', window.innerWidth/2 - 75);
  $(".text-preview").hide();
  $("#Quad").css('left', window.innerWidth/2 -30);
  $("#Tibialis").css('left', window.innerWidth/2 - 5);
  $("#Abdominals").css('left', window.innerWidth/2 - 60);
  $("#arm-image-preview-container").css('right', window.innerWidth/2 - 300);
  $("#leg-image-preview-container").css('left', window.innerWidth/2 - 300);
  $("#Hamstring").css('left', window.innerWidth/2 -30);
  $("#Calve").css('left', window.innerWidth/2 -30);

  $(".rear-torso-image").hide();

  // $(".bodypart").on("mouseover", function(){
  //   var id = $(this).attr("id")
  //   $(".text-preview").text(id).css("margin-top", "20px").fadeIn();
  // });

  // $(".bodypart").on("mouseleave", function(){
  //   $(".text-preview").fadeOut();
  // });

  // $(".bodypart").on("mouseover", function(){
  //   var id = $(this).attr("id");
  //   // $(".text-preview").css("margin-top", "20px").fadeIn();

  // });


  $(".bodypart").on("mouseover", function(){
    $(this).children("p").css("margin-top", "15px").fadeIn();
    // $(".text-preview").css("margin-top", "20px").fadeIn();

  });



  $(".bodypart").on("mouseover", function(){
    $(this).children("p").css("margin-top", "15px").fadeOut();
    // $(".text-preview").css("margin-top", "20px").fadeIn();

  });




  // $(".bodypart").on("mouseleave", function(){
  //   $(".text-preview").fadeOut();

  // });



  $("#back-view").on("click", function(){
    $(".torso").animate({right: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $(".rear-torso-image").fadeIn();
    $("#back-view").hide();
    $("#Right-Glute").show();
    $("#Left-Glute").show();
    $("#Right-Lat").show();
    $("#Left-Lat").show();
    $("#Lower-Back").show();
    $("#Rhomboids").show();
    $("#Trapezius").show();
    $("#info").fadeOut();
    $("#contactinfo").fadeOut();
    $("#return").hide();

  });

  $(".bodypart").on("click", function(){
    $("#info").fadeOut();
    $("#contactinfo").fadeOut();

  });




  $("button").on("click", function(){
    $(this).hide();

  });




});


