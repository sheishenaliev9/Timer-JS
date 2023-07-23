const sec = document.querySelector(".second");
const wrapper = document.querySelector(".wrapper");
const inputMin = document.querySelector("#inputMinute");

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

const notificationSound = document.querySelector("#notificationSound");
const clickSound = document.querySelector("#clickSound");

let interval;
let secCounter = 0;
let isStarted = false;

// Функция для старта таймера
function startTimer() {
  if (secCounter === 0) (secCounter = inputMin.value * 60).toFixed();
  clickSound.play();

  interval = setInterval(() => {
    // проверка на то что если переданное число равна 0 то функция прекращается
    if (secCounter <= 0) return;
    isStarted = true;
    startBtn.disabled = true;

    sec.innerHTML = --secCounter;
    if (secCounter === 0) {
      notificationSound.play();
      startBtn.innerHTML = "Start";
      wrapper.style.background = "#4DAA57";
      startBtn.disabled = false;
    } else {
      wrapper.style.background = "#ba4949";
      startBtn.innerHTML = "Continue";
    }
  }, 1000);
}

// Функция для остановки таймера
function stopTimer() {
  clickSound.play();
  wrapper.style.background = "#397097";
  isStarted = false;
  clearInterval(interval);
  sec.innerHTML = secCounter;
  startBtn.disabled = false;
}

// Функция для обнуление таймера
function resetTimer() {
  clickSound.play();
  secCounter = inputMin.value * 60;
  sec.innerHTML = secCounter;
  startBtn.innerHTML = "Start";
}

startBtn.onclick = startTimer;
stopBtn.onclick = stopTimer;
resetBtn.onclick = resetTimer;
