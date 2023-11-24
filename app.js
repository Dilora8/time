let test = document.querySelector('#test');
let i = 0;
let stops = document.querySelector('.stop');
let start = document.querySelector('.start');

let starts  = () => {
    let id = setInterval(function (){

        test.innerHTML = i++;
           console.log(i);
    }, 100);
   stops.onclick = () => {
           clearInterval(id);
   }
}

start.addEventListener('click', starts)

let cancel = () => {
    i = 0;
    test.innerHTML = i;
}