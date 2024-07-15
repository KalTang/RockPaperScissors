// set rounds
let round = 0;
const maxRound = 5;

// CPU choice logic
function cpuPick() {
    // gets number between 1 and 3
    let x = Math.floor(Math.random() * 3) + 1;
    console.log(`CPU choice: ${x}`);
    return x;
}

// CPU image update
function updateCpuImage(choice) {
    const cpuCardImage = document.querySelector(".cpu__card img");
    let fileName;

    if (choice === 1) {
        fileName = "Scissor";
    } else if (choice === 2) {
        fileName = "Rock";
    } else {
        fileName = "Paper";
    }

    cpuCardImage.src = `./assets/images/${fileName}.jpg`;
}

// Player choice logic
function humanPick() {
    const scissorButton = document.getElementById("scissor-btn");
    const rockButton = document.getElementById("rock-btn");
    const paperButton = document.getElementById("paper-btn");

    // handle choice logic
    function handlePicks(playerChoice, imageName) {
        if (round < maxRound) {
            const playerCard = document.querySelector(".player__card img");
            playerCard.src = `./assets/images/${imageName}.jpg`;
            playRound(playerChoice);
        } else {
            document.getElementById("results").innerHTML = "Game Over!";
            console.log("game over");
        }
    }

    scissorButton.addEventListener("click", () => handlePicks(1, "Scissor"));
    rockButton.addEventListener("click", () => handlePicks(2, "Rock"));
    paperButton.addEventListener("click", () => handlePicks(3, "Paper"));
}

function playRound(playerChoice) {
    // set round counter
    round++;
    // Displays round
    document.getElementById("round").textContent = round;

    // CPU choice
    cpuChoice = cpuPick();
    updateCpuImage(cpuChoice);

    // all outcomes for human wins
    // if cpu choice is 1 (scissors) and human is 1 (rock)
    // if cpu choice is 2 (rock) and human is 3 (paper)
    // if cput choice is 3 (paper) and human is 1 (scissors)
    if (
        (cpuChoice === 1 && playerChoice === 2) ||
        (cpuChoice === 2 && playerChoice === 3) ||
        (cpuChoice == 3 && playerChoice === 1)
    ) {
        document.getElementById("results").innerHTML = "You Win! ";
        console.log(`CPU choice: ${cpuChoice}`);
        console.log(`Human choice: ${playerChoice}`);
        console.log("You win!");
    }
    // if CPU choice is equal to human input. Its a tie
    else if (cpuChoice === playerChoice) {
        document.getElementById("results").innerHTML = "It's a tie!";
        console.log(`CPU choice: ${cpuChoice}`);
        console.log(`Human choice: ${playerChoice}`);
        console.log("It is a draw!");
    }
    // Else CPU wins.
    else {
        document.getElementById("results").innerHTML = "You lose!";
        console.log(`CPU choice: ${cpuChoice}`);
        console.log(`Human choice: ${playerChoice}`);
        console.log("You lose!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    humanPick();
});
