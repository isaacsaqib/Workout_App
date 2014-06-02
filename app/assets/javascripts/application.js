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
  $("#form-container").hide();

  $(".bodypart").css("top", "+=" + 50);
  $(".bodypart").css("bottom", "-=" + 50);

  $("#Left-Chest").css('left', window.innerWidth/2 - 112);
  $("#Right-Chest").css('left', window.innerWidth/2 + 10);
  $("#Left-Arm").css('left', window.innerWidth/2 - 190);
  $("#Right-Arm").css('right', window.innerWidth/2 - 190);
  $("#Right-Leg").css('right', window.innerWidth/2 - 120);
  $("#Left-Leg").css('left', window.innerWidth/2 - 140);
  $("#Tricep").css('left', window.innerWidth/2 - 50);
  $("#Bicep").css('right', window.innerWidth/2 - 30);
  $("#Forearm").css('left', window.innerWidth/2 - 40);
  $("#Shoulder").css('left', window.innerWidth/2 - 60);
  $("#Left-Glute").css('left', window.innerWidth/2 - 90);
  $("#Right-Glute").css('right', window.innerWidth/2 - 120);
  $("#Lower-Back").css('right', window.innerWidth/2 - 65);
  $("#Right-Lat").css('right', window.innerWidth/2 - 105);
  $("#Left-Lat").css('left', window.innerWidth/2 - 90);
  $("#Rhomboids").css('left', window.innerWidth/2 - 66);
  $("#Trapezius").css('left', window.innerWidth/2 - 80);


  $("#Abdominals").css('left', window.innerWidth/2 - 60);

  $(".rear-torso-image").hide();

  $(".bodypart").on("mouseover", function(){
    var id = $(this).attr("id")
    $("#bodypart-text").text(id).fadeIn();
  });

  $(".bodypart").on("mouseleave", function(){
    $("#bodypart-text").fadeOut();
  });

  $("#rear-torso-text").on("click", function(){
    $(".torso").animate({right: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $(".rear-torso-image").fadeIn();
    $("#rear-torso-text").hide();
    $("#Right-Glute").show();
    $("#Left-Glute").show();
    $("#Right-Lat").show();
    $("#Left-Lat").show();
    $("#Lower-Back").show();
    $("#Rhomboids").show();
    $("#Trapezius").show();
    $("#info").fadeOut();
    $("#contactinfo").fadeOut();
  });

  $(".bodypart").on("click", function(){
    $("#info").fadeOut();
    $("#contactinfo").fadeOut();

  });


  $("button").on("click", function(){
    $(this).hide();

  });




});


