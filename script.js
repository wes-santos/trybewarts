const loginButton = document.getElementById('button');

loginButton.addEventListener('click', () => {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

// Atributo disabled aprendendido pelo QA Stack:
// https://qastack.com.br/programming/3014649/how-to-disable-html-button-using-javascript
submitButton.disabled = true;

agreement.addEventListener('change', () => {
  if (agreement.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// Counter no textarea
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

// Descobri o keyCode no seguinte link:
// https://www.edsonemiliano.com.br/blog/identificar-tecla-pressionada-com-javascript-setas-esc-enter/
function defineCounterValue(event) {
  const counterText = counter.innerText;
  if (textarea.value === '') {
    counter.innerText = 500;
  }
  if (textarea.value !== '') {
    counter.innerText = counterText - 1;
  }
  if (event.keyCode === 8 && counterText < 500) {
    counter.innerText = parseInt(counterText, 10) + 1;
  }
}

textarea.addEventListener('keyup', defineCounterValue);
