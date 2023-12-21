const display = document.getElementById("display");
let startBtn = document.getElementById("start");

let mainbtn = true;
let interval;

let minutes = 0;
let seconds = 0;

const start = () => {
    if (mainbtn) {
        startBtn.innerHTML = "STOP";
        interval = setInterval(update, 1000);
    } else {
        startBtn.innerHTML = "START";
        clearInterval(interval);
    }
    mainbtn = !mainbtn; 
};


const update = () => {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    updateDis();
};

const inc = () => {
    clearInterval(interval);
    mainbtn = true;
    seconds = seconds + 1;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    updateDis();
    startBtn.innerHTML = "START"
    
};

const decrement = () => {
    clearInterval(interval);
    mainbtn = true;
    seconds = seconds - 1;
    if (seconds === 0) {
        minutes--;
        seconds = 60;
    }

    updateDis();
    startBtn.innerHTML = "START"
};

const updateDis = () => {
    let seconds0;
    let minutes0;

    if (minutes < 10) {
        minutes0 = "0" + minutes;
    } else {
        minutes0 = minutes;
    }

    if (seconds < 10) {
        seconds0 = "0" + seconds;
    } else {
        seconds0 = seconds;
    }

    display.textContent = `${minutes0}:${seconds0}`;
};