let timerInterval = null;
let remainingTime = 0;

const display = document.getElementById('timer-display');
const btn10 = document.getElementById('btn-10min');
const btn30 = document.getElementById('btn-30min');
const btn60 = document.getElementById('btn-60min');
const resetBtn = document.getElementById('reset-btn');

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function updateDisplay() {
  display.textContent = formatTime(remainingTime);
}

function startTimer(seconds) {
  clearInterval(timerInterval);
  remainingTime = seconds;
  updateDisplay();
  timerInterval = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      updateDisplay();
      if (remainingTime === 0) {
        clearInterval(timerInterval);
        display.classList.add('blink');
        setTimeout(() => display.classList.remove('blink'), 2000);
        alert('타이머 종료!');
      }
    }
  }, 1000);
}

btn10.onclick = () => startTimer(600);
btn30.onclick = () => startTimer(1800);
btn60.onclick = () => startTimer(3600);
resetBtn.onclick = () => {
  clearInterval(timerInterval);
  remainingTime = 0;
  updateDisplay();
};

document.addEventListener('DOMContentLoaded', updateDisplay);
