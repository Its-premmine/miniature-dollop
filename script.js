const mycountShow = document.querySelector(".countShow")
const myresetValue = document.querySelector(".resetValue")
const mystr_but = document.querySelector(".str_but")
const myreset_but = document.querySelector(".reset_but")
const mystop_but = document.querySelector(".stop_but")
const myclear_but = document.querySelector(".clear_but")
const myget_time = document.querySelector(".get_time")

let startValue = 0

const startTime = ( ) => {
    intervalId = setInterval(() => {
        mycountShow.textContent = startValue++;
    },1000)
}

const stopTime = ( ) => {
    clearInterval(intervalId) 
}

const reValue = ( ) => {
    startValue = 0;
    mycountShow.textContent = startValue;
    clearInterval(intervalId)
}






mystr_but.addEventListener("click",startTime);
mystop_but.addEventListener("click",stopTime);
myresetValue.addEventListener("click",reValue);