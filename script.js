var min =   document.querySelectorAll('#min')[0];
console.log('min: ', min);
var sec =   document.querySelectorAll('#sec')[0];
console.log('sec: ', sec);
var milSec =   document.querySelectorAll('#mil-sec')[0];
console.log('milSec: ', milSec);
var minCount = 0
var secCount = 0
var milSecCount = 0
var intervel
console.log('intervel: ', intervel);



function timer(){
    milSecCount++
    milSec.innerHTML =  milSecCount;
    // console.log('milSecCount: ', milSecCount);
    if(milSecCount == 60){
        milSecCount = 0;
        secCount++;
        sec.innerHTML = secCount;
    }else if(secCount == 60){
        secCount = 0;
        minCount++;
        min.innerHTML = minCount
    }
}

function startTimer(){
    if(intervel){
        console.log('if condition true')
        stopTimer();
    }

   intervel =  setInterval(timer, 17)
   console.log('intervel: ', intervel);
}
function stopTimer(){
    clearInterval(intervel)
 }
 function resetTimer(){
    clearInterval(intervel)
    minCount = 0
    secCount = 0
    milSecCount = 0
    milSec.innerHTML = '00'
    sec.innerHTML = '00'
    min.innerHTML = '00'
 }