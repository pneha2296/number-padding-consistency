import { createInterface } from 'readline';
import { checkNumberPadding } from './checkNumberPadding';

// Create an interface for user input and output
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get input from user
rl.question('Ex: ["001"] \nEnter array of strings to check for padding consistency:\n', (answer: string) => {
    console.log(`Output: ${checkNumberPadding(JSON.parse(answer))}`);

    // Close the readline interface
    rl.close();
});