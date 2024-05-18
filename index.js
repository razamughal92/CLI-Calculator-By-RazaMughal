#!/usr/bin/env node
// This above line tells the system to use the Node.js interpreter (`node`)
// to execute this script.
// CLI Calaculator - Code by Raza Mughal
// The below line imports the Inquirer library, which is used to create
// interactive command-line prompts for user input.
// It is used for importing the Inquirer module for getting input from user.
import inquirer from "inquirer";
// This below line imports the Chalk library, which is used to add color and
// formatting to the console output. It is used for importing Chalk for coloring
// console output
import chalk from "chalk"; // Importing Chalk for coloring console output
// Declaration of welcome() function. This function displays a colorful
// welcome message using Chalk. This function is used to display the welcome message
async function welcome() {
    console.log(chalk.green(`
 ______________________________________________________________
|                                                              |
|                                                              |
|                   WELCOME to CLI CALCULATOR                  |
|                      Code by Raza Mughal                     |
|                                                              |
|______________________________________________________________|
`)); // End of the welcome message
}
// Declararion of askQuestion() function. This function is used to perform calculation
// based on input given by user.
async function askQuestion() {
    const ans = await inquirer.prompt([
        // Declaration of an object with "ans" name which type is list
        {
            type: "list",
            name: "operator",
            message: "Which operation do you want to perform?",
            choices: ["Addition", "Substraction", "Multiplication", "Division"],
        },
        {
            type: "number",
            name: "num1",
            message: "Enter the first number:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter the second number:",
        },
    ]);
    let result;
    switch (ans.operator) {
        case "Addition":
            result = ans.num1 + ans.num2;
            break;
        case "Substraction":
            result = ans.num1 - ans.num2;
            break;
        case "Multiplication":
            result = ans.num1 * ans.num2;
            break;
        case "Division":
            if (ans.num2 === 0) {
                // Check either given number from user are divided by zero or not.
                console.log(chalk.red("Error: Divided by Zero is not allowed."));
                return;
            }
            result = ans.num1 / ans.num2;
            break;
        default:
            console.log(chalk.red("Error: Invalid operation selected."));
            return;
    }
    // Display the calculation result with proper format
    console.log(chalk.green(// Applying green color to the output
    `${ans.num1} ${getOperatorSymbol(ans.operator)} ${ans.num2} = ${result}` // Using template literals to format the output
    ));
}
// Function to get operator symbol based on user selected operation
function getOperatorSymbol(operator) {
    switch (operator) {
        case "Addition":
            return "+";
        case "Subtraction":
            return "-";
        case "Multiplication":
            return "*";
        case "Division":
            return "/";
        default:
            return "";
    }
}
// Function to ask user if they want to continue
async function startAgain() {
    let restart = "y";
    while (restart.toLowerCase() === "y" || restart.toLowerCase() === "yes") {
        await askQuestion();
        const response = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? (y/n)..... ",
        });
        restart = response.restart;
    }
}
// Main function to run the calculator
async function main() {
    await welcome();
    await startAgain();
    console.log(chalk.yellow("Thanks for using this program. Goodbye.!"));
}
// Start the calculator
main();
// ************** End of Programme **************
