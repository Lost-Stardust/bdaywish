import "./styles.css";
import ann from "./images/ann.png";
import giftBox from "./images/gift-box.png";
import pop from "./images/pop.mp3";

// Set src of img tags
const heart = document.querySelector(".heart");
heart.src = ann;
const gift = document.querySelector(".gift-box");
gift.src = giftBox;

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
