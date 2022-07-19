import { greeting } from './module';
import { COLOR } from './module-2';
import './style.css';

function init() {
  const nameElement = document.getElementById('name');
  const greetingElement = document.getElementById('greeting');

  nameElement.onkeyup = (e) => {
    const name = e?.target?.value;
    greetingElement.innerHTML = greeting(name || 'guest'); // use func greeting import from module.js
    greetingElement.style.color = name ? COLOR.PRIMARY : COLOR.BLACK; // use constant from module-2.js
  };
}

document.addEventListener('DOMContentLoaded', () => init());
