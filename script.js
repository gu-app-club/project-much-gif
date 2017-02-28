function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
    let index = getRandomInt(0, response.data.length - 1)
    setBackground(response.data[index].images.downsized_large.url)
  })
}

const randomPrompts = [
  'Type your favorite TV show!',
  'Type your favorite animal!',
  'Type your favorite movie!',
  'Type a place you want to visit!'
]


$(document).ready(function() {

  // Set random placeholder
  let index = getRandomInt(0, randomPrompts.length - 1)
  $(".cool-input").attr('placeholder', randomPrompts[index])

  // Set click and keypress events
  $(".cool-input").change(function() {
    sendGifRequest($(this).val())
  }).keypress(function (e) {
    if (e.which == 13) {
      sendGifRequest($(this).val())
      return false;
    }
  })

  // Show input
  $(".cool-input").addClass("shown")
})
