import Notiflix from 'notiflix';

// Selectors
const form = document.querySelector('.form');

// Event listeners
form.addEventListener('submit', generatePromises);

// Function to create several promises based on amount
function generatePromises(e) {
  e.preventDefault();
  const {
    delay: { value: firstDelay },
    step: { value: step },
    amount: { value: amount },
  } = e.currentTarget.elements;
  for (let i = 1; i <= Number(amount); i++) {
    let subsequentDelay = Number(firstDelay) + Number(step) * i;
    createPromise(i, subsequentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

// Function to create one promise
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
