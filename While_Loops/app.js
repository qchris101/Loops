// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

let maximum = parseInt(prompt("Enter the maximum number!"))

while (!maximum) { // While the number is NaN repeat until a number is inserted
    maximum = parseInt(prompt("Enter a Valid number!"))
}


const targetNum = Math.floor(Math.random() * maximum) + 1

let guess = prompt("Enter your first guess (Type 'q' to quit)")

let attempts = 1

while(parseInt(guess)  !== targetNum) {
    if (guess === 'q') break
    guess = parseInt(guess)
    if (guess > targetNum ){
        guess = (prompt("Too High, Enter a new guess!"))
        attempts++
    } else if (guess < targetNum) {
        guess = (prompt("Too low! Enter a new guess:"))
        attempts++
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit")
    }
}

if (guess === 'q'){
    console.log("Game over You quit")
} else{ 
    console.log(`You got it, it took ${attempts} guesses`)
}