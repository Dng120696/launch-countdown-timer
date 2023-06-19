'use strict';

const days = document.querySelector('.days')
const hrs = document.querySelector('.hours')
const min = document.querySelector('.minutes')
const sec = document.querySelector('.seconds')

const countdownTimer = ()=>{

  let time = 14 * 24 * 60 *60
  const tick = ()=>{
    const day =String(Math.floor(time/86400)).padStart(2, '0');
    const hours = String(Math.floor(time/3600) % 24).padStart(2, '0');
    const minutes = String(Math.floor(time/60) % 60).padStart(2, '0');
    const seconds = String(Math.floor(time%60)).padStart(2, '0');

    days.textContent = day;
    hrs.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;

    if(time === 0){
      clearInterval(timer)
    }
    time--;
  }

  tick()
  const timer = setInterval(tick,1000)
  return timer;
}
countdownTimer()