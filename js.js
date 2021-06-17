'use strict';

const background = document.querySelector('.backgraund'),
    backgroundText = document.querySelector('.backgraund--text'),
    backgroundBtn = document.querySelector('.background--btn');

function random() {
    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256)),
        color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    background.style.background = color;
    backgroundText.textContent = color;
}

backgroundBtn.addEventListener('click', function(event) {
    event.preventDefault();
    random();
});