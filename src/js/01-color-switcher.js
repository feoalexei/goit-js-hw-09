const buttons = document.querySelectorAll('button[type="button"]');
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

stop.disabled = true;

start.addEventListener('click', startChanging);
stop.addEventListener('click', stopChanging);

function startChanging() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  toggleDisabled();
  // start.disabled = true;
  // stop.disabled = false;
}

function stopChanging() {
  clearInterval(timerId);
  toggleDisabled();
  // start.disabled = false;
  // stop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Работает на localhost, но почему-то не работает на github pages:
function toggleDisabled() {
  buttons.forEach(btn => {
    btn.toggleAttribute('disabled');
  });
}

// Также работает на localhost, но почему-то не работает на github pages:
// function toggleDisabled(btn) {
//   btn.toggleAttribute('disabled');
//   btn.previousElementSibling.toggleAttribute('disabled');
//   btn.nextElementSibling.toggleAttribute('disabled');
// }
