// Creating variables 
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// Adding event listener and input focus 
btn.addEventListener('click',() => {
  search.classList.toggle('active')
  input.focus()
})

