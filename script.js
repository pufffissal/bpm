const calculateBtn = document.getElementById('calculateBtn');
const resultText = document.getElementById('result');
const startBtn = document.getElementById('startBtn');

calculateBtn.addEventListener('click', function() {
  const heartbeatsInput = document.getElementById('heartbeats');
  const heartbeats = parseInt(heartbeatsInput.value);

  if (!isNaN(heartbeats)) {
    const seconds = 20;
    const bpm = Math.round((heartbeats / seconds) * 60);
    resultText.textContent = `Pulzus: ${bpm} ütés/perc`;
  } else {
    resultText.textContent = 'Kérlek add meg az ütések számát!';
  }
});

let timerInterval;
const timerDuration = 20; // Másodpercek
let timeLeft = timerDuration;

function startTimer() {
  timeLeft = timerDuration;
  resultText.textContent = '20 másodperc mérés indítása...';
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (!resultText.textContent.includes('Pulzus')) {
        resultText.textContent = 'Idő letelt! Kész vagy? Add meg az ütések számát.';
      }
    }
  }, 1000);
}

startBtn.addEventListener('click', function() {
  startTimer();
});
