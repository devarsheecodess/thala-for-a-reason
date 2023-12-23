function playVideo() {
  var userInput = document.getElementById("search-input").value;
  var total = calculateTotal(userInput);
  var div = calculateDiv(userInput);
  var sub = calculateSub(userInput);
  var count = countLetters(userInput);
  var videoSeven = document.getElementById("videoSeven");
  var videoNotSeven = document.getElementById("videoNotSeven");
  if (
    total === 7 ||
    div === 7 ||
    sub === 7 ||
    count === 7 ||
    userInput.toLowerCase() === "thala" ||
    userInput.toLowerCase() === "mahi" ||
    userInput.toLowerCase() === "dhoni" ||
    userInput.toLowerCase() === "msd"
  ) {
    videoNotSeven.currentTime = 0;
    videoNotSeven.pause();
    videoSeven.style.display = "block";
    videoNotSeven.style.display = "none";
    videoSeven.play();
    videoSeven.currentTime = 0;
    if (count === 7) {
      showInputWithPlus();
    } else {
      numText();
    }
  } else {
    videoSeven.currentTime = 0;
    videoSeven.pause();
    videoSeven.style.display = "none";
    videoNotSeven.style.display = "block";
    videoNotSeven.play();
    aukaat();
    videoSeven.currentTime = 0;
  }
}

function calculateTotal(input) {
  var total = 0;

  for (var i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      total += parseInt(input[i]);
    } else {
      total += input[i].toLowerCase().charCodeAt(0) - 96;
    }
  }
  return total;
}

function calculateDiv(input) {
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      total /= parseInt(input[i]);
    } else {
      total /= input[i].toLowerCase().charCodeAt(0) - 96;
    }
  }
  return total;
}

function calculateSub(input) {
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      total -= parseInt(input[i]);
    } else {
      total -= input[i].toLowerCase().charCodeAt(0) - 96;
    }
  }
  return total;
}

function countLetters(input) {
  var lettersOnly = input.replace(/[^a-zA-Z]/g, "");
  var numberOfLetters = lettersOnly.length;
  return numberOfLetters;
}

function showInputWithPlus() {
  var userInput = document.getElementById("search-input").value;
  var result = userInput.split("").join("+");
  var total = calculateTotal(userInput);
  document.getElementById("output").innerText =
    result + " = 7 \nTHALA FOR A REASON 😍";
  playVideo(total);
}

function aukaat() {
  var userInput = document.getElementById("search-input").value;
  var result = userInput.split("").join("+");
  var total = calculateTotal(userInput);
  document.getElementById("output").innerText =
    result + " ≠ 7 \n Aukaat dikha di bhai tumne bhi 🙂";
  playVideo(total);
}

function numText() {
  var userInput = document.getElementById("search-input").value;
  var total = calculateTotal(userInput);
  var result = userInput.split("").join("+");
  document.getElementById("output").innerText =
    result + " = 7\n THALA FOR A REASON 😍";
  playVideo(total);
}

function shareOnWhatsApp() {
  window.open(
    "https://wa.me/?text=" +
      "Check out this amazing fun website!\n" +
      encodeURIComponent(document.URL)
  );
}

function shareOnFacebook() {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" +
      "Check out this amazing fun website!\n" +
      encodeURIComponent(document.URL)
  );
}

function shareOnTwitter() {
  var currentURL = encodeURIComponent(window.location.href);
  window.open(
    "https://twitter.com/intent/tweet?url=" +
      "Check out this amazing fun website!" +
      currentURL
  );
}

function shareOnInstagram() {
  var instagramDMUrl = "https://www.instagram.com/direct/inbox/";
  window.open(instagramDMUrl, "_blank");
}
