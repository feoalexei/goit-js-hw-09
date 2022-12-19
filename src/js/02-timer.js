import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const input = document.querySelector('input#datetime-picker');
const start = document.querySelector('button[data-start]');
const timeUnits = document.querySelectorAll('.value');
let remainedMs = 0;

start.disabled = true;

// OPTIONS OBJECT for flatpickr(selector, options)
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const currentDate = new Date().getTime();
    const selectedDate = new Date(input.value).getTime();

    selectedDate - currentDate > 0
      ? start.toggleAttribute('disabled')
      : Notiflix.Notify.failure('Please choose a date in the future');

    remainedMs = selectedDate - currentDate;
  },
};

// INITIALIZING FALTPICKR INSTANCE
flatpickr(input, options);

// EVENT LISTENERS
start.addEventListener('click', startCountDown);

// FUNCTION starCountDown()
function startCountDown() {
  const timerId = setInterval(() => {
    if (remainedMs <= 0) {
      clearInterval(timerId);
    } else {
      start.disabled = true;
      remainedMs -= 1000;
      const convertedRemainedTime = convertMs(remainedMs);
      displayCountDown(convertedRemainedTime);
    }
  }, 1000);
}

// FUNCTION dispalyCountDown()
function displayCountDown(obj) {
  const CHECK_ARRAY = ['minutes', 'days', 'seconds', 'hours'];
  timeUnits.forEach(unit => {
    const attrName = unit.attributes.item(1).name;
    const attrNameType = attrName.slice(attrName.indexOf('-') + 1);
    CHECK_ARRAY.includes(attrNameType) &&
      (unit.textContent = addLeadingZero(obj[attrNameType]));
  });
}

// FUNCTION convertMs
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// FUNCTION addLeadingZero
function addLeadingZero(num) {
  return num.toString().padStart(2, '0');
}

// Notiflix.Notify adjustments

Notiflix.Notify.init({
  position: 'center-center',
});
