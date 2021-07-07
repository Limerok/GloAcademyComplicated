const bird = document.querySelector('.bird'),
    startStop = document.querySelector('.fly-stop'),
    reset = document.querySelector('.reset'),
    width = window.innerWidth - 120;
let count = 0,
flyInterval,
animate = false;

console.log(width);
let fly = () => {
    flyInterval = requestAnimationFrame(fly);
    count += 5;
    
    if (count < width) {
        bird.style.left = count + 'px';
    }else if(count >= width) {
        bird.style.opacity = 0;
        startStop.setAttribute('disabled', true);
        cancelAnimationFrame(flyInterval);
    }
    
};

startStop.addEventListener('click', () => {
    if(!animate) {
        animate = true;
        startStop.innerHTML = 'Стоп';
        flyInterval = requestAnimationFrame(fly);
    } else {
        animate = false;
        startStop.innerHTML = 'Полетели';
        cancelAnimationFrame(flyInterval);
    }
});

reset.addEventListener('click', () => {
    cancelAnimationFrame(flyInterval);
    count = 0;
    bird.style.left = count + 'px';
    bird.style.opacity = 1;
    animate = false;
    startStop.removeAttribute("disabled");
    startStop.innerHTML = 'Полетели';
});

