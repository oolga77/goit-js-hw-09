 import { Notify } from 'notiflix';
 const refs = {
  formData: document.querySelector('.form'),
  firstDelay: document.querySelector('[name=delay]'),
  stepDelay: document.querySelector('[name=step]'),
  amountDelay: document.querySelector('[name=amount]'),
  createPromiseeBtn: document.querySelector('[type=submit]'),
}

  refs.createPromiseeBtn.addEventListener('click', event => {
  event.preventDefault();
  
    let delay = Number(refs.firstDelay.value);
    let delayStep = Number(refs.stepDelay.value);
    let delayAmount = Number(refs.amountDelay.value);
    for (let position = 1; position <= delayAmount; position++) {
      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          
        });
      delay += delayStep;
    }
    refs.formData.reset();
  });

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

