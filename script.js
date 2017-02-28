function setBackground(url) {
  $(".background").css("background-image", `url("${url}")`)
}

function sendGifRequest(search) {
  $.ajax({
    url: "https://api.giphy.com/v1/gifs/search",
    type: "get",
    data: {
      api_key: "dc6zaTOxFJmzC",
      q: search
    }
  }).done(function(response) {
    setBackground(response.data[0].images.downsized.url)
  })
}


$(document).ready(function() {

  $(".cool-input").addClass("shown")
  $(".cool-input").change(function() {
    sendGifRequest($(this).val())
  })
})
