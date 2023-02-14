import { Notify } from 'notiflix';

const refs = {
formData: document.querySelector('.form'),
firstDelay: document.querySelector('[name = "delay"]'),
delayStep: document.querySelector('[name = "step"]'),
delayAmount: document.getElementsByName('[name = "amount"]'),
btnCreatePromise: document.querySelector('button[type=submit]')
}

refs.btnCreatePromise.addEventListener('submit', evt => {
  evt.preventDefault();
})

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
};

refs.btnCreatePromise.addEventListener('click', onSubmit);


function onSubmit(){
 

  let delay = Number(refs.firstDelay.value);
  let step = Number(refs.delayStep.value);
  let amount = Number(refs.delayAmount.value);

  for (let i = 0; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
  
  
refs.formData.reset();
}





