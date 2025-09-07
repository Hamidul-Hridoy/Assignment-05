let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

function getElement(id) {
    return document.getElementById(id);
}

function updateDisplay() {
    getElement('heart').innerText = heartCount;
    getElement('coin').innerText = coinCount;
    getElement('copy').innerText = copyCount;
}

document.addEventListener("click", function(e) {
    if (e.target.closest(".heartBtn")) {
        heartCount++;
        updateDisplay();
    }
    
    if (e.target.closest(".copyBtn")) {
        const card = e.target.closest(".card");
        const number = card.querySelector(".number").innerText;
        navigator.clipboard.writeText(number);
        alert(`Copied: ${number}`);
        copyCount++;
        updateDisplay();
    }});