
// [N] changing this from making its own updates to just returning data...
// [X] -- remove the append
// [N] -- make it return data
// [N] ---- decide how to store and work with the data synchronously
// [X] handle dynamic search URL
// [X] -- save the abstract URL
// [X] -- handle query string parameters more conveniently

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
    data.data.items.forEach(function(link) {
      var newLink = link.player.default.replace("watch?v=", "embed/").replace("&feature=youtube_gdata_player", "").replace("http:", "");
      var iframe = $("<iframe>").attr("src", newLink).attr("width", 260).attr("height", 115);
      element.append(iframe);
    });
  });
}
