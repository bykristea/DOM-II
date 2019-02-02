// Your code goes here




let mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('mouseenter', (event) => {
    mainNav.style.backgroundColor = 'teal';
})

let logoHead = document.querySelector('.logo-heading');
logoHead.addEventListener('click', (event) => {
    alert('Are you ready for FUN?!')
})
document.addEventListener("scroll", function (e) {
    logoHead.style.transform = "rotate(180deg)";
})

//nav
let navAnchors = document.querySelectorAll('.nav-link');

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

//right click
document.body.addEventListener("contextmenu", function (e) {
    alert("What are you doing?");
});

//for purposes of using stopPropagation(), in next part
document.querySelectorAll('.container ').forEach(function (heading) {
    heading.addEventListener("copy",
        function (e) {
            alert("I know my headings are FUN!");
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
//imgs

let allImgs = document.querySelectorAll('img');
allImgs.forEach((img) => {
    img.addEventListener('click', function (e) {
        e.target.style.transform = 'skewX(-15deg)';
    })

    img.addEventListener('dblclick', function (e) {
        e.target.style.transform = 'skewX(15deg)';
    })
})


  
//footer
let footer = document.querySelector('.footer');
footer.addEventListener('click', (event) => {
    footer.style.backgroundColor = 'aqua';
})


// //buttons
let button = document.querySelectorAll('.btn');

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
