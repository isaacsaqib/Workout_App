$(document).ready(function(){
  $("#Right-Lat").hide();
  $("#Left-Lat").hide();
  function getResultsLat() {
      $.getJSON(latapi).done(function(data) {
        data.data.items.forEach(function(link) {
          var newLink = link.player.default.replace("watch?v=", "embed/").replace("&feature=youtube_gdata_player", "").replace("http:", "");
          $("<iframe>").attr("src", newLink).attr("width", 260).attr("height", 115).appendTo("#videoContainer");
          });
     });
    }
  var latapi = "http://gdata.youtube.com/feeds/api/videos/?v=2&alt=jsonc&q=lat%20workout&max-results=4";


  $("#Right-Lat").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    getResultsLat()
  });

   $("#Left-Lat").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();

    getResultsLat()
  });

});

