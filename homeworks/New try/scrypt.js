let countdown;
let remainingTime; 

function startTimer() {
  const timeInput = document.getElementById("timeInput").value;
  remainingTime = parseInt(timeInput); 


  if (isNaN(remainingTime) || remainingTime <= 0) {
    alert("Пожалуйста, введите положительное число секунд.");
    return;
  }

  clearInterval(countdown); 
  document.getElementById("message").innerText = ""; 
  updateDisplay(remainingTime); 
  countdown = setInterval(updateTimer, 1000); 
}

function updateTimer() {
  remainingTime--;

  
  updateDisplay(remainingTime);

  
  if (remainingTime <= 0) {
    clearInterval(countdown); 
    document.getElementById("message").innerText = "Время вышло!";
    document.getElementById("alarmSound").play(); 
  }
}

function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60); 
  const remainingSeconds = seconds % 60; 
  document.getElementById("timer").innerText = `${String(minutes).padStart(
    2,
    "0"
  )}:${String(remainingSeconds).padStart(2, "0")}`; 
}
