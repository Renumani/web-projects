const input = document.getElementById("input");
const incr = document.getElementById("incr");
const decr = document.getElementById("decr");
const reset = document.getElementById("reset");
let count=0;
incr.addEventListener("click",()=>{
    count=count+1;
    input.innerHtml=count;
    });
    decr.addEventListener("click",()=>{
    count=count-1;
    input.innerHtml=count;
    });
    reset.addEventListener("click",()=>{
    count=0;
    input.innerHtml=count;
    });