// TODO (see instructions)
const spanElement = document.getElementById("counter");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");

let count = 0;

function incrementCounter(){
 count += 1;
    spanElement.textContent = count;                         
}

function decrementCounter(){
 count += -1;
    spanElement.textContent = count;                         
}

incrementBtn.addEventListener("click",incrementCounter);
decrementBtn.addEventListener("click",decrementCounter);