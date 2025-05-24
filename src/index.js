import "./styles.css";
import ann from "./images/ann.png";
import giftBox from "./images/gift-box.png";
import pop from "./images/pop.mp3";
import darkHeart from "./images/darkheart.png";
import lightHeart from "./images/lightheart.png";
import openGiftBox from "./images/open-gift-box.png";
import flower from "./images/flower.png";
import cat from "./images/cat.png";
import bow from "./images/bow.png";

// Set src of img tags
const heart = document.querySelector(".heart");
heart.src = ann;
const gift = document.querySelector(".gift-box");
gift.src = giftBox;
const img1 = document.querySelector(".img1");
img1.src = darkHeart;
const img2 = document.querySelector(".img2");
img2.src = flower;
const img3 = document.querySelector(".img3");
img3.src = lightHeart;

// Play sound and show heart on click
gift.addEventListener("click", () => {
  const popSound = new Audio(pop);
  popSound.volume = 0.3;
  popSound.play();
});

gift.addEventListener("click", () => {
  heart.style.transform = "translateY(0px)";
  heart.style.transition = "none";
  heart.style.visibility = "hidden";
  setTimeout(() => {
    heart.style.visibility = "visible";
    heart.style.transform = "translateY(-1000px)";
    heart.style.transition = "2s ease-in";
  }, 100);
});

// open gift box
function open() {
  const page = document.querySelector(".page");
  let count = 0;

  gift.addEventListener("click", () => {
    count++;
    if (count == 3) {
      page.classList.add("active");
    }
  });
}
open();
