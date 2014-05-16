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

  $("#Left-Chest").css('left', window.innerWidth/2 - 112);
  $("#Right-Chest").css('left', window.innerWidth/2 + 10);

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
  });

});
