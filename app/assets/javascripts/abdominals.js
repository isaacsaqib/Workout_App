$(document).ready(function(){
function getResultsAbdominals() {
      $.getJSON(abdominalsapi).done(function(data) {
        data.data.items.forEach(function(link) {
          var newLink = link.player.default.replace("watch?v=", "embed/").replace("&feature=youtube_gdata_player", "").replace("http:", "");
          $("<iframe>").attr("src", newLink).attr("width", 260).attr("height", 115).appendTo("#videoContainer");
          });
     });
    }
  var abdominalsapi = "http://gdata.youtube.com/feeds/api/videos/?v=2&alt=jsonc&q=abdominals%20workout&max-results=4";


  $("#Abdominals").on("click", function(){
  $(".torso").animate({right: "400px"}, 500).fadeOut();
  $(".bodypart").hide();
  $("#rear-torso-text").hide();
  getResultsAbdominals();
  $("#videoContainer").show();
  });


});

