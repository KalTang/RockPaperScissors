// Play function
function play() {
    // Loop to ensure rounds is 5 or less
    // Gets player choice function
    CpuChoice();
    playerChoice();
    // Gets CPU choice function
    //
}

// CPU choice logic

function cpuChoice() {
    // gets number between 1 and 3
    let x = Math.floor(Math.random() * 3) + 1;
    console.log(`CPU choice: ${x}`);
    return x;
}

// Player choice logic
function playerChoice() {
    let input;

    while (true) {
        input = prompt(
            "Enter a choice:\n\n 1 = Scissors\n\n 2 = Rock\n\n 3 = Paper"
        );

        // convert string to number

        input = Number(input);

        // condition to handle incorrect input to loop until correct input

        if (input === 1 || input === 2 || input === 3) {
            break;
        } else {
            alert("Invalid choice, Please enter a valid number between 1 to 3");
        }
    }

    console.log(`Player number: ${input}`);
    return input;
}

function playRound(cpuChoice, playerChoice) {
    // Gets the number function
    const cpuChoice = cpuChoice();
    const playerChoice = playerChoice();

    // Loop counter for round

    // Logic for winning
    // Outcomes:
    // all outcomes for human wins
    // If cpu choice is 1 (scissors) and human is input is 2 (rock). human wins
    // if cpu choice is 2 (rock) and human is 3 (paper) human wins
    // if cput choice is 3 (paper) and human is 1 (scissors) human wins
    // if CPU choice is equal to human input. Its a tie
    // All else CPU wins.
}

// play();

// Win logic
