
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


let carentTime = Date.now();
let intervalId = null;
const startBtn = document.querySelector('button[data-start]');
const inputDate = document.querySelector('#datetime-picker')
const refs = {
  daysEvent: document.querySelector('span[data-days]'),
  hoursEvent: document.querySelector('span[data-hours]'),
  minutesEvent: document.querySelector('span[data-minutes]'),
  secondsEven: document.querySelector('span[data-seconds]'),

}
const spanElem = document.querySelectorAll('.value');
const timerElem = document.querySelector('.timer');

timerElem.style.display = 'flex';
spanElem.forEach((item, i) => {
    item.style.fontSize = '30px';
});


startBtn.disabled = true;
startBtn.addEventListener('click', convertMs);


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
       
    if(selectedDates[0] < carentTime){
      
      Notiflix.Notify.failure('Please choose a date in the future')
      startBtn.disabled = true;
          } else{
            startBtn.disabled = false;
            
          }
  }
};
flatpickr(inputDate, options);

function pad(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = Math.floor(ms / day);
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
startBtn.addEventListener("click", startTimer);

function startTimer() {
  intervalId = setInterval(changeTimerValue, 1000);
  startBtn.disabled = true;
}

function changeTimerValue() {
  
   let countdown = new Date(inputDate.value) - Date.now();
      if (countdown < 100) {
        clearInterval(intervalId);
      } else {

        timerData = convertMs(countdown);
        refs.daysEvent.textContent = timerData.days;
        refs.hoursEvent.textContent = timerData.hours;
        refs.minutesEvent.textContent = timerData.minutes;
        refs.secondsEven.textContent = timerData.seconds;
           
      }
    }
  
