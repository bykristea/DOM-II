// Your code goes here
//all selctors
let mainNav = document.querySelector('.main-navigation');
let logoHead = document.querySelector('.logo-heading');
let navAnchors = document.querySelectorAll('.nav-link');
let header = document.querySelector('.main-navigation');
let allImgs = document.querySelectorAll('img');
let footer = document.querySelector('.footer');
let button = document.querySelectorAll('.btn');


//header change background, alert, and transform logo

mainNav.addEventListener('mouseenter', (event) => {
    mainNav.style.backgroundColor = 'teal';
})

logoHead.addEventListener('click', (event) => {
    alert('Are you ready for FUN?!')
})
document.addEventListener("scroll", function (e) {
    logoHead.style.transform = "rotate(180deg)";
})


//nava's create hover
navAnchors.forEach(function (index, i) {
    navAnchors[i].addEventListener('mouseover', function (e) {
        e.target.style.color = '#fcc100';
        e.target.style.textDecoration = 'underline';
    });
});

navAnchors.forEach(function (index, i) {
    navAnchors[i].addEventListener('mouseout', function (e) {
        e.target.style.color = '';
        e.target.style.textDecoration = 'none';
    });
});


//Prevent anchor tags in nav from refreshing page

document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener("click",
        function (e) {
            e.preventDefault();
        }
    )
});

//right click on header
header.addEventListener('contextmenu', function (e) {
    alert("What are you doing?");
});

//for purposes of using stopPropagation when copy ps vs hs
document.querySelectorAll('.container ').forEach(function (heading) {
    heading.addEventListener("copy",
        function (e) {
            alert("I know my headings are FUN!");
            e.stopPropagation();
        }
    )
});
document.querySelectorAll('p').forEach(function (text) {
    text.addEventListener("copy",
        function (e) {
            alert("Give me props!");
            e.stopPropagation();

        }
    )
});
//imgs event listener to skew based on single or double click

allImgs.forEach((img) => {
    img.addEventListener('click', function (e) {
        e.target.style.transform = 'skewX(-15deg)';
    })

    img.addEventListener('dblclick', function (e) {
        e.target.style.transform = 'skewX(15deg)';
    })
})


  
//footer change background
footer.addEventListener('click', (event) => {
    footer.style.backgroundColor = 'aqua';
})


// //buttons using GreenSock and bounce

button.forEach((btn) => {
    btn.addEventListener('mouseover', function (e){
        TweenMax.to(btn, 1, {
            width: 250,
            ease: Bounce.easeOut
        });
    });
    btn.addEventListener('mouseout', function (e) {
        TweenMax.to(btn, 1, {
            width: 200,
            ease: Bounce.easeOut
        });

    });
});
