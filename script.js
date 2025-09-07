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
    }

    if (e.target.closest('.callBtn')) {
        if (coinCount < 20) {
            alert("You do not have enough coins to make a call 📞.");
            return;
        } 
        const card = e.target.closest(".card");
        const number = card.querySelector(".number").innerText;
        const name = card.querySelector(".name").innerText;
        alert(`Calling 📞 ${name} : ${number}`);
        coinCount = coinCount - 20;
        updateDisplay();
        const time = new Date().toLocaleTimeString();
        const historyContainer = getElement("container");
        const history = document.createElement('div');
        history.innerHTML = `
             <div class="bg-gray-100 flex items-center justify-between p-3 rounded-lg mb-2">
                 <div>
                     <p>${name}</p>
                     <p class="text-gray-600">${number}</p>
                 </div>
                 <p>${time}</p>
             </div>
         `;
        historyContainer.prepend(history);
        updateDisplay();
    }

    if (e.target.closest(".clear")) {
        const historyContainer = getElement('container');
        historyContainer.innerHTML = '';
    }
});

const buttons = document.querySelectorAll('.my-btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.backgroundColor = "#e4e1e1ff";
                this.style.transform = "scale(1.05)";
                this.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
            });
            
            
            button.addEventListener('mouseleave', function() {
                this.style.backgroundColor = "";
                this.style.transform = "";
                this.style.boxShadow = "";
            });
        });