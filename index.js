// Play function
function play() {
    // playRound();
    //
}

// CPU choice logic

function cpuPick() {
    // gets number between 1 and 3
    let x = Math.floor(Math.random() * 3) + 1;
    console.log(`CPU choice: ${x}`);
    return x;
}

// Player choice logic
function numberPick() {
    let input;

    while (true) {
        input = prompt(
            "Enter a choice:\n\n 1 = Scissors\n\n 2 = Rock\n\n 3 = Paper\n\n 4 = Exit"
        );

        // convert string to number

        input = Number(input);

        // condition to handle incorrect input to loop until correct input

        if (input === 1 || input === 2 || input === 3 || input == 4) {
            break;
        } else {
            alert("Invalid choice, Please enter a valid number between 1 to 3");
        }
    }

    console.log(`Player number: ${input}`);
    return input;
}

function playRound(cpuChoice, playerChoice) {
    // Loop counter for round
    let round = 1;

    // Logic for winning

    for (let i = 1; i <= 5; i++) {
        // Gets player choice  function
        playerChoice = numberPick();
        cpuChoice = cpuPick();

        // If player exits
        if (playerChoice == 4) {
            console.log("GoodBye!");
            break;
        }

        // Displays round
        console.log(`Round: ${round}`);

        // all outcomes for human wins
        // if cpu choice is 1 (scissors) and human is 1 (rock)
        // if cpu choice is 2 (rock) and human is 3 (paper)
        // if cput choice is 3 (paper) and human is 1 (scissors)
        if (
            (cpuChoice === 1 && playerChoice === 2) ||
            (cpuChoice === 2 && playerChoice === 3) ||
            (cpuChoice == 3 && playerChoice === 1)
        ) {
            console.log(`CPU choice: ${cpuChoice}`);
            console.log(`Human choice: ${playerChoice}`);
            console.log("You win!");
        }
        // if CPU choice is equal to human input. Its a tie
        else if (cpuChoice === playerChoice) {
            console.log(`CPU choice: ${cpuChoice}`);
            console.log(`Human choice: ${playerChoice}`);
            console.log("It is a draw!");
        }
        // Else CPU wins.
        else {
            console.log(`CPU choice: ${cpuChoice}`);
            console.log(`Human choice: ${playerChoice}`);
            console.log("You lose!");
        }
        round++;
    }
}

play();

// Win logic
