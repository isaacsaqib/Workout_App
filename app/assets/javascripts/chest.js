$(document).ready(function(){
  $("#videoContainer").hide();
  function getResultsChest() {
      $.getJSON(chestapi).done(function(data) {
        data.data.items.forEach(function(link) {
          var newLink = link.player.default.replace("watch?v=", "embed/").replace("&feature=youtube_gdata_player", "").replace("http:", "");
          $("<iframe>").attr("src", newLink).attr("width", 260).attr("height", 115).appendTo("#videoContainer");
          });
     });
    }
  var chestapi = "http://gdata.youtube.com/feeds/api/videos/?v=2&alt=jsonc&q=chest%20workout&max-results=4";




  $("#Left-Chest").on("click", function(){
    $(".torso").animate({right: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#rear-torso-text").hide();
    getResultsChest();
    $("#videoContainer").show();
  });

  $("#Right-Chest").on("click", function(){
    $(".torso").animate({right: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#rear-torso-text").hide();
    getResultsChest();
    $("#videoContainer").show();
  });


  // $("#Right-Chest").on("click", function(){
  //   $(".torso").animate({right: "400px"}, 500).fadeOut();
  //   $(".bodypart").hide();
  //   $("#rear-torso-text").hide();

  // });

});


