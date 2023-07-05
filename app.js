// Get the necessary elements
const close = document.querySelector('.close');
const lines = document.getElementById('lines');
const navbar = document.querySelector('.navbar');

// Function to toggle the menu
lines.addEventListener('click', ()=>{
    navbar.classList.add('show-nav');
  console.log('open');
})

close.addEventListener('click', ()=>{
    navbar.classList.remove('show-nav');
  console.log('close');
})


