const counter=document.getElementById('count');
const increment=document.getElementById('increment');
let countvalue=0;
function increase(){
    countvalue++;
    counter.textContent=countvalue;

}
increment.addEventListener('click',increase);
