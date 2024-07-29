// HOME WORK 1

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResults = document.querySelector("#gmail_result");

const regExp = /^\w+(\.\w+)*@gmail\.com$/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailResults.innerHTML = 'OK'
        gmailResults.style.color = 'green'
    } else {
        gmailResults.innerHTML = 'NOT OK'
        gmailResults.style.color = 'red'
    }
}

// HOME WORK 1(2)

const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector(".parent_block");
const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

let positionX = 0;
let positionY = 0;

const moveBlock = () => {
    requestAnimationFrame(moveBlock);
    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;

    // Двигаемся вправо
    if (positionX < offsetWidth && positionY === 0) positionX++;
    // Двигаемся вниз
    else if (positionX >= offsetWidth && positionY < offsetHeight) positionY++;
    // Двигаемся влево
    else if (positionY >= offsetHeight && positionX > 0) positionX--;
    // Двигаемся вверх
    else if (positionX <= 0 && positionY > 0) positionY--;
};

moveBlock();

// HOME WORK 2

// const secondTime = document.querySelector("#seconds")
// const startButton = document.querySelector("#start")
// const stopButton = document.querySelector("#stop")
// const resetButton = document.querySelector("#reset")
//
// let counter = 0
//
// const updateCounter = () => {
//     secondTime.textContent = counter
// };
//
// const startCounter = () => {
//     interval = setInterval(() => {
//         counter++
//         updateCounter()
//     }, 1000)
// };
//
// const stopCounter = () => {
//         clearInterval(interval);
// };
//
// const resetCounter = () => {
//     stopCounter();
//     counter = 0;
//     updateCounter();
// };
//
// startButton.addEventListener("click", startCounter);
// stopButton.addEventListener("click", stopCounter);
// resetButton.addEventListener("click", resetCounter);
//
// updateCounter();

const secondTime = document.querySelector("#seconds");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

let counter = 0;
let interval = null;

const updateCounter = () => {
    secondTime.textContent = counter;
};

const startCounter = () => {
    if (interval === null) {
        interval = setInterval(() => {
            counter++;
            updateCounter();
        }, 1000);
    }
};

const stopCounter = () => {
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
};

const resetCounter = () => {
    stopCounter();
    counter = 0;
    updateCounter();
};

startButton.addEventListener("click", startCounter);
stopButton.addEventListener("click", stopCounter);
resetButton.addEventListener("click", resetCounter);

updateCounter();



