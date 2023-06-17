import data from "./data.json" assert { type: "json" };

const reactionValue = document.getElementById("reactionValue");
const memoryValue = document.getElementById("memoryValue");
const visualValue = document.getElementById("visualValue");
const verbalValue = document.getElementById("verbalValue");
const scoreValue = document.getElementById("score");

reactionValue.innerText = data[0].score;
memoryValue.innerText = data[1].score;
visualValue.innerText = data[2].score;
verbalValue.innerText = data[3].score;

let score = 0;
let totalScore = 0;
data.forEach((d) => {
  totalScore += d.score;
});

score = totalScore / 4;

const animationDuration = 2000;
const updateInterval = 20;

let currentValue = 0;
let increment = (score / animationDuration) * updateInterval;

const updateCounter = () => {
  currentValue += increment;

  if (currentValue >= score) {
    currentValue = score;
    clearInterval(counterInterval);
    showConfetti();
  }

  scoreValue.innerText = Math.floor(currentValue);
};

const counterInterval = setInterval(updateCounter, updateInterval);

const showConfetti = () => {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
};
