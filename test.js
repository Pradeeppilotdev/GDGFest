let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date(2025,02,21,00,00);
let endTime = endDate.getTime();

function countdown(){
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60  *1000;
  let oneHour = 60 * oneMin;
  let oneDay = 24 * oneHour;
  let addZeroes = (num) => (num < 10 ? `0${num}`:num);
if (endTime < todayTime){
    clearInterval(i);
    document.querySelector(".countdown").innerHTML=`<h1>The Event Has Begun</h1>`;

}
else{
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay)/oneHour);
    let minsLeft = Math.floor((remainingTime % oneHour)/oneMin);
    let secLeft = Math.floor((remainingTime % oneMin)/1000);
    dayBox.textContent=addZeroes(daysLeft);
    hrBox.textContent=addZeroes(hrsLeft);
    minBox.textContent=addZeroes(minsLeft);
    secBox.textContent=addZeroes(secLeft);
}
}
let i = setInterval(countdown,1000);
countdown();