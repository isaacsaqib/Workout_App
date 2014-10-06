$(document).ready(function(){
  $("#form-container").hide();
  $("#form-box-signup").hide();
  $("#videoContainer").hide();
  $("#leg-image-preview-container").hide();
  $("#arm-image-preview-container").hide();
  $("#return-rear-leg").hide();

  // If user wants to sign up
  $("#signup-trigger").on("click", function(){
    $("#form-box-login").fadeOut();
    $("#form-box-signup").slideDown();
  });

  // Display bodypart name on hover
  $(".bodypart").on("mouseover", function(){
    $(this).children("p").css("margin-top", "15px").fadeIn();
  });

  $(".bodypart").on("mouseleave", function(){
    $(this).children("p").css("margin-top", "15px").fadeOut();
  });


  // Arm parts
  $(".arm-image").hide();
  $("#Bicep").hide();
  $("#Tricep").hide();
  $("#Forearm").hide();
  $("#Shoulder").hide();

  // Front leg
  $(".front-leg-image").hide();
  $("#Quad").hide();
  $("#Tibialis").hide();
  // Rear Leg
  $(".rear-leg-image").hide();
  $("#rear-leg-text").hide();
  $("#Hamstring").hide();
  $("#Calve").hide();
  // Back
  $(".rear-torso-image").hide();
  $("#Trapezius").hide();
  $("#Right-Lat").hide();
  $("#Left-Lat").hide();
  $("#Rhomboids").hide();
  $("#Lower-Back").hide();
  $("#Right-Glute").hide();
  $("#Left-Glute").hide();


  $(".bodypart").css("top", "+=" + 50);
  $(".bodypart").css("bottom", "-=" + 50);

  // Responsive pulsating dots
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

  // Chest
  $("#Left-Chest").on("click", function(){
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#back-view").hide();
    $("#return").hide();
    getAndAppendVideoIframes("chest workout", $("#videoContainer"));
    $("#videoContainer").show();
  });

  $("#Right-Chest").on("click", function(){
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#back-view").hide();
    $("#return").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("chest workout", $("#videoContainer"));
  });
  // Arm
  $("#Right-Arm").on("click", function(){
    $(".arm-image").fadeIn();
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#Bicep").show();
    $("#Tricep").show();
    $("#Forearm").show();
    $("#Shoulder").show();
    $("#back-view").hide();
    $("#return").hide();
  });

  $("#Left-Arm").on("click", function(){
    $(".arm-image").fadeIn();
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#Bicep").show();
    $("#Tricep").show();
    $("#Forearm").show();
    $("#Shoulder").show();
    $("#back-view").hide();
    $("#return").hide();
  });

  $("#Bicep").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#videoContainer").show();
    $("#return").hide();
    getAndAppendVideoIframes("bicep workout", $("#videoContainer"));
  });

  $("#Tricep").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $("#Bicep").hide();
    $("#Tricep").hide();
    $("#videoContainer").show();
    $("#return").hide();
    getAndAppendVideoIframes("tricep workout", $("#videoContainer"));
  });

  $("#Forearm").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#videoContainer").show();
    $("#return").hide();
    getAndAppendVideoIframes("forearm workout", $("#videoContainer"));
  });

  $("#Shoulder").on("click", function(){
    $(".arm-image").animate({top: "400px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#videoContainer").show();
    $("#return").hide();
    getAndAppendVideoIframes("shoulder workout", $("#videoContainer"));
  });
  // Leg
  $("#Right-Leg").on("click", function(){
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $(".front-leg-image").fadeIn();
    $("#Tibialis").show();
    $("#Quad").show();
    $("#rear-leg-text").show();
    $("#back-view").hide();
    $("#return").hide();
    $("#return-rear-leg").show();
  });

  $("#Left-Leg").on("click", function(){
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $(".front-leg-image").fadeIn();
    $("#Tibialis").show();
    $("#Quad").show();
    $("#rear-leg-text").show();
    $("#back-view").hide();
    $("#return").hide();
    $("#return-rear-leg").show();
  });

  // Right and Left Leg Hover show leg preview
  $("#Right-Leg").on("mouseover", function(){
    $("#leg-image-preview-container").fadeIn();
  });

  $("#Right-Leg").on("mouseleave", function(){
    $("#leg-image-preview-container").hide();
  });

  $("#Left-Leg").on("mouseover", function(){
    $("#leg-image-preview-container").fadeIn();
  });

  $("#Left-Leg").on("mouseleave", function(){
    $("#leg-image-preview-container").hide();
  });

  $("#Quad").on("click", function(){
    $(".bodypart").hide();
    $("#return").hide();
    $("#return-rear-leg").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("quad workout", $("#videoContainer"));
  });

  $("#Tibialis").on("click", function(){
    $(".bodypart").hide();
    $("#return").hide();
    $("#return-rear-leg").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("tibialis workout", $("#videoContainer"));
  });

  // Shows Rear Leg
  $("#rear-leg-text").on("click", function(){
    $(".bodypart").hide();
    $("#return").hide();
    $("#return-rear-leg").hide();
    $(".front-leg-image").animate({top: "400px"}, 500).fadeOut();
    $(".rear-leg-image").fadeIn();
    $("#Hamstring").show();
    $("#Calve").show();
    $("#rear-leg-text").hide();
  });

  // Rear Leg
  $("#Hamstring").on("click", function(){
    $(".bodypart").hide();
    $("#return").hide();
    $("#return-rear-leg").hide();
    $(".rear-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("hamstring workout", $("#videoContainer"));
  });

  $("#Calve").on("click", function(){
    $(".bodypart").hide();
    $("#return").hide();
    $("#return-rear-leg").hide();
    $(".rear-leg-image").animate({top: "400px"}, 500).fadeOut();
    $("#rear-leg-text").hide();
    $("#videoContainer").show();
    getAndAppendVideoIframes("calve workout", $("#videoContainer"));
  });
  // Left and Right Arm hover previews arm
  $("#Right-Arm").on("mouseover", function(){
    $("#arm-image-preview-container").fadeIn();
  });

  $("#Right-Arm").on("mouseleave", function(){
    $("#arm-image-preview-container").hide();
  });

  $("#Left-Arm").on("mouseover", function(){
    $("#arm-image-preview-container").fadeIn();
  });

  $("#Left-Arm").on("mouseleave", function(){
    $("#arm-image-preview-container").hide();
  });

  $("#Abdominals").on("click", function(){
    $(".torso").css("position", "absolute").css("top", "100px").css("left", "400px").animate({left: "900px"}, 500).fadeOut();
    $(".bodypart").hide();
    $("#back-view").hide();
    getAndAppendVideoIframes("abdominals workout", $("#videoContainer"));
    $("#videoContainer").show();
    $("#return").hide();
  });

  if(window.innerHeight > window.innerWidth){
    alert("Please use Landscape!");
  }
  // Shows Rear Torso
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

  // Back
  $("#Right-Lat").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    $("#return").hide();
    getAndAppendVideoIframes("lat workout", $("#videoContainer"));
  });

  $("#Left-Lat").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    $("#return").hide();
    getAndAppendVideoIframes("lat workout", $("#videoContainer"));
  });

  $("#Lower-Back").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    $("#return").hide();
    getAndAppendVideoIframes("lower back workout", $("#videoContainer"));
  });

  $("#Rhomboids").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    $("#return").hide();
    getAndAppendVideoIframes("rhomboids workout", $("#videoContainer"));
  });


  $("#Trapezius").on("click", function(){
    $(".bodypart").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    $("#return").hide();
    getAndAppendVideoIframes("trapezius workout", $("#videoContainer"));
  });

  $("#Right-Glute").on("click", function(){
    $(".bodypart").hide();
    $("#return").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    $("#videoContainer").show();
    getAndAppendVideoIframes("butt workout", $("#videoContainer"));
  });

  $("#Left-Glute").on("click", function(){
    $(".bodypart").hide();
    $("#return").hide();
    $(".rear-torso-image").animate({top: "400px"}, 500).fadeOut();
    getAndAppendVideoIframes("butt workout", $("#videoContainer"));
  });

  // YOUTUBE FUNCTION
  var SEARCH_URL = "http://gdata.youtube.com/feeds/api/videos/";

  var defaultOptions = {
    "v": 2,
    "alt": "jsonc",
    "max-results": 8
  };

  function getAndAppendVideoIframes(searchTerm, element) {
    var data = {
    "q": searchTerm
    };

    _.defaults(data, defaultOptions);

    $.getJSON(SEARCH_URL, data).done(function(data) {
      data.data.items.forEach(function(link) { //Finding link
        var newLink = link.player.default.replace("watch?v=", "embed/").replace("&feature=youtube_gdata_player", "").replace("http:", ""); //Replacing strands to fit embedding string
        var iframe = $("<iframe>").attr("src", newLink).attr("width", 360).attr("height", 215); //iframe style
        var button = $("<button>Add to your Workout</button><br>").attr("id", newLink).css("margin", "0 auto").css("display", "block"); //Add to workout button
        element.append(iframe); //Append iframe to element(videoContainer)
        element.append(button);
      });

      $("button").on("click", function(){
        $.ajax ({
            url: "/workouts",
            type: "POST",
            data: { "video_url": $("button").attr("id")},
            dataType: "JSON"
        }).done(function(data){
          console.log(data);
        });
      });
    });
  }
});

