const buttons = document.querySelectorAll('button[type="button"]');
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

let timerId;

stop.disabled = true;

start.addEventListener('click', startChanging);
stop.addEventListener('click', stopChanging);

function startChanging() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  toggleDisabled();
}

function stopChanging() {
  clearInterval(timerId);
  toggleDisabled();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function toggleDisabled() {
  buttons.forEach(btn => {
    btn.toggleAttribute('disabled');
  });
}
