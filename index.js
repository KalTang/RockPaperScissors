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

function CpuChoice() {
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

play();

// Win logic
