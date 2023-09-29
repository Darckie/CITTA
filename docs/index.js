const play = document.querySelector(".play");
const hindi = document.querySelector(".hindi");
const eng = document.querySelector(".eng");
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const headr = document.querySelector("#services");
if (bar) {
  bar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}

// //cokie msg to implement::::::::::::::::::::
// document.addEventListener("DOMContentLoaded", () => {
//   const msgx = document.createElement("div");
//   msgx.classList.add("cookie-msg");

//   msgx.innerHTML =
//     'We use cookied for improved functionality and analytics.<i href=#><button class="btn13">Got it!</button></i>';

//   headr.prepend(msgx);

//   document.querySelector(".btn13").addEventListener("click", function () {
//     msgx.remove();
//   });
// });
//
// Login name on home Page

const PLAY = new Audio("Play.mp3");
play.addEventListener("mouseenter", function () {
  const rand = Math.trunc(Math.random() * 10 + 1);
  PLAY.play();
  if (rand === 1) {
    if (!PLAY) {
      PLAY.pause();
    }
    hindi.textContent = "😄 आपका जीवन सुखमय और समृद्ध हो।";
    eng.textContent = "May your life be happy and prosperous.";
  } else if (rand === 2) {
    if (!PLAY) {
      PLAY.pause();
    }
    hindi.textContent = "😎 स्वस्थ और सुरक्षित रहें।";
    eng.textContent = "May you stay healthy and safe.";
  } else if (rand === 3) {
    if (!PLAY) {
      PLAY.pause();
    }
    hindi.textContent = "🤗 आपके लिए उज्जवल भविष्य की कामना।";
    eng.textContent = "Wishing you a bright future.";
  } else if (rand === 4) {
    if (!PLAY) {
      PLAY.pause();
    }
    hindi.textContent = "😜 आपको हर कार्य में सफलता मिले।";
    eng.textContent = "May you achieve success in all your endeavors.";
  } else if (rand === 5) {
    if (!PLAY) {
      PLAY.pause();
    }
    hindi.textContent = "😊 आपके सभी सपने पूरे हों।";
    eng.textContent = "May all your dreams come true.";
  } else if (rand === 6) {
    if (!PLAY) {
      PLAY.pause();
    }
    hindi.textContent = "😍 समस्त खुशियाँ आपके साथ हों।";
    eng.textContent = "May all happiness be with you.";
  } else if (rand === 7) {
    if (!PLAY) {
      PLAY.pause();
    }
    hindi.textContent = "😃 आपका दिन शुभ हो !";
    eng.textContent = "May your day be auspicious.";
  } else if (rand === 8) {
    if (!PLAY) {
      PLAY.pause();
    }
    hindi.textContent = "🤩 आपका दिन सुन्दर हो।";
    eng.textContent = "have a nice day.";
  } else if (rand === 9) {
    if (!PLAY) {
      PLAY.play();
    }
    hindi.textContent = "😁 आपकी ज़िन्दगी का हर दिन सुनहरा हो।";
    eng.textContent = " May every day of your life be golden.";
  } else if (rand === 10) {
    if (!PLAY) {
      PLAY.pause();
    }

    hindi.textContent = "😘 आपकी खुशी हमारी खुशी है।";
    eng.textContent = "Your happiness is our happiness.";
  }
});

//blog button js_____________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  var continueButtons = document.querySelectorAll(".continue");
  var hideButtons = document.querySelectorAll(".hide");

  continueButtons.forEach(function (continueButton) {
    continueButton.addEventListener("click", function () {
      var textToShow = this.previousElementSibling;
      textToShow.style.maxHeight = "none";
      this.style.display = "none";
      this.nextElementSibling.style.display = "inline-block";
    });
  });

  hideButtons.forEach(function (hideButton) {
    hideButton.addEventListener("click", function () {
      var textToShow = this.previousElementSibling.previousElementSibling;
      textToShow.style.maxHeight =
        "4.4em"; /* Adjust this value to control the number of visible lines */
      this.style.display = "none";
      this.previousElementSibling.style.display = "inline-block";
    });
  });

  // Hide the "Hide" button initially
  hideButtons.forEach(function (hideButton) {
    hideButton.style.display = "none";
  });
});

// ____________________________________________________

// ______________________________________________________

//PRODUCT PAGE JS DOING CARTING______________________

var Mainimg = document.getElementById("mainImg");
var smallimg = document.getElementsByClassName("smlImg");

for (var i = 0; i < smallimg.length; i++) {
  smallimg[i].addEventListener("click", changeMainImage);
}

function changeMainImage() {
  Mainimg.src = this.src;
}
// IMPLEMENTING JS FOR CARTING THE PRODUCT::::::::::::::::
document.addEventListener("DOMContentLoaded", function () {
  const money = document.querySelector(".money");
  const cartX = document.querySelector(".cartX");
  const valx = document.querySelector(".val");
  cartX.addEventListener("click", function () {
    // const val = parseFloat(valx.value);
    setTimeout(() => {
      window.location.href = "cart.html";
    }, 1000);
  });
});
