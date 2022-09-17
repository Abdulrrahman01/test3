// -----------------------------------------------------------------------

// Up Button 
// -----------------------------------------------------------------------

let upButton = document.querySelector('.up')

window.onscroll = function () {
    if (window.pageYOffset >= 1000) {
        upButton.style.display = 'block';
    } else {
        upButton.style.display = 'none';
    }
}

upButton.onclick = function () {
    window.scrollTo(0, 0);
}

// -----------------------------------------------------------------------

// Countdown Timer
// -----------------------------------------------------------------------

let countDownDate = new Date('31 aug, 2022').getTime();

let counter = setInterval(() => {
    
    // get Date Now 
    let dateNow = new Date().getTime();

    // Get Difference Between Date Now And Date Of Timer
    let diffDate = countDownDate - dateNow;

    // Get Time Units [Days]
    let days = Math.floor(diffDate / 1000 / 60 / 60 / 24)
    document.querySelector('.days').innerHTML = days < 10 ? `0${days}`: days;

    // Get Time Units [Hours]
    let hours = Math.floor(diffDate % (1000 * 60 * 60 * 24)/(1000 * 60 * 60))
    document.querySelector('.hours').innerHTML = hours < 10 ? ` 0${hours}`: hours ;
    
    // Get Time Units [Minuts]
    let minutes = Math.floor(diffDate % (1000 * 60 * 60)/(1000 * 60))
    document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    
    // Get Time Units [seconds]
    let seconds = Math.floor(diffDate % (1000 * 60 )/ 1000)
    document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}`: seconds;
    
    if (diffDate >= 0) {
        clearInterval();
    }

}, 1000);
// -----------------------------------------------------------------------

// Increase Number On Scrolling
// -----------------------------------------------------------------------

let nums = document.querySelectorAll(".num");
let section = document.querySelector('.stats');
let started = false; // function started ? No
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

// -----------------------------------------------------------------------

//  Animate Width On Scrolling
// -----------------------------------------------------------------------

let skillSection = document.querySelector(".skills");
let spans = document.querySelectorAll('.progress span');

window.onscroll = function () {
    if (window.scrollY >= skillSection.offsetTop - 250) {
        spans.forEach(span => {
            span.style.width = span.dataset.width;
        });
    }
};