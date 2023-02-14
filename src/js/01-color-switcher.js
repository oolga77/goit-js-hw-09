const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const body = document.getElementsByTagName('body');
let timerId = null;
stopBtn.disabled = true;
 
startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        document.body.style.background =        getRandomHexColor()
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;

})


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  stopBtn.addEventListener('click', () =>{
clearInterval(timerId);
startBtn.disabled = false;
stopBtn.disabled = true;
  })