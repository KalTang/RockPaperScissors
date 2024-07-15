// set rounds
let round = 0;
const maxRound = 5;

// set scores
let cpuScore = 0;
let playerScore = 0;

// hide reset button if game isn't started
document.getElementById("exit").classList.add("displayNone");

// CPU choice logic
function cpuPick() {
    // gets number between 1 and 3
    let x = Math.floor(Math.random() * 3) + 1;
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

    // handles player choice logic and image file name
    function handlePicks(playerChoice, imageName) {
        // shows scores and hides rules when any button is pressed
        document.getElementById("rules").classList.add("displayNone");
        document.getElementById("show-scores").classList.remove("scores");
        // displays reset button when any button is pressed
        document.getElementById("exit").classList.remove("displayNone");

        if (round < maxRound) {
            const playerCard = document.querySelector(".player__card img");
            playerCard.src = `./assets/images/${imageName}.jpg`;
            playRound(playerChoice);
        }
    }

    // Button even listeners
    scissorButton.addEventListener("click", () => handlePicks(1, "Scissor"));
    rockButton.addEventListener("click", () => handlePicks(2, "Rock"));
    paperButton.addEventListener("click", () => handlePicks(3, "Paper"));
}

function playRound(playerChoice) {
    // set round counter
    round++;
    // Displays round
    document.getElementById("round").textContent = round;

    // displays scores
    document.getElementById("cpu_score").textContent = cpuScore;
    document.getElementById("player_score").textContent = playerScore;

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
        playerScore += 1;
    }
    // if CPU choice is equal to human input. Its a tie
    else if (cpuChoice === playerChoice) {
        document.getElementById("results").innerHTML = "It's a tie!";
    }
    // Else CPU wins.
    else {
        document.getElementById("results").innerHTML = "Computer Wins!";
        cpuScore += 1;
    }
    document.getElementById("cpu_score").textContent = cpuScore;
    document.getElementById("player_score").textContent = playerScore;

    // Game over when round hits 5.
    if (round === maxRound) {
        // display the results + game over
        document.getElementById("results").innerHTML = "Game Over!";

        //Change button text
        document.getElementById("exit").innerHTML = "Play again";
        // hides the game buttons
        document.getElementById("hide-buttons").classList.add("displayNone");

        if (playerScore > cpuScore) {
            document.getElementById("results2").innerHTML =
                "You beat the Computer! ";
        } else if (playerScore === cpuScore) {
            document.getElementById("results2").innerHTML = "No winner :( ";
        } else {
            document.getElementById("results2").innerHTML =
                "The Computer wins... ";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    humanPick();
});
