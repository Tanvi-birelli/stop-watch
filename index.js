const startStopBtn = document.getElementById("start-stop");
const resetBtn = document.getElementById("reset");

const timer = document.getElementById("timer");

let seconds = 0;
let minutes =0 ;
let hours = 0;

let modifiedSeconds;
let modifiedMinutes;
let modifiedHours;

let timerState="stopped";
let timerIntervel;

const timerFunction = ()=>{
    seconds++;
    if(seconds/60===1){
        seconds=0;
        minutes++;
    }
    if(minutes/60===1){
        seconds=0;
        minutes=0;
        hours++;
    }

    modifiedSeconds = seconds<10? "0"+ seconds.toString() : seconds;
    modifiedMinutes = minutes<10?  "0"+ minutes.toString() : minutes;
    modifiedHours = hours<10? "0" + hours.toString() : hours;
    timer.innerText=modifiedHours+":"+modifiedMinutes+":"+modifiedSeconds;
}

startStopBtn.addEventListener("click",()=>{
    if(timerState==="stopped"){
        timerIntervel = window.setInterval(timerFunction,1000);
        timerState="started";
        startStopBtn.innerHTML=`<i class="fa-solid fa-pause"></i>`;
    }else{
        timerState="stopped";
        window.clearInterval(timerIntervel);
        startStopBtn.innerHTML=`<i class="fa-solid fa-play"></i>`
    }
})
resetBtn.addEventListener("click",()=>{
    timer.innerText="00:00:00";
    timerState="stopped";
    startStopBtn.innerHTML=`<i class="fa-solid fa-play"></i>`
    window.clearInterval(timerIntervel);
    seconds=0;
    minutes=0;
    hours=0;
})


