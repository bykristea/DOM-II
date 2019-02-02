// Your code goes here
let mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('mouseenter', (event) => {
    mainNav.style.backgroundColor = 'teal';
})

let logoHead = document.querySelector('.logo-heading');
logoHead.addEventListener('click', (event) => {
    alert('Are you ready for FUN?!')
})

let introImg = document.getElementById("img[src='fun-bus.jpg']");
introImg.addEventListener('mouseover', (event) => {
    introImg.src = "img/yellow-bus.jpg"
})