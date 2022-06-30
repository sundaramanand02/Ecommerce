const nav = document.querySelector('#bar');
const bar = document.querySelector('#navbar');

nav.addEventListener('click', () => {
    bar.classList.add('active');
})

const x = document.querySelector('#close');
x.addEventListener('click', (e) => {
    bar.classList.remove('active');
})