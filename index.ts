import { createInterface } from 'readline';
import { checkNumberPadding } from './checkNumberPadding';

// Create an interface for user input and output
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

//take input array
//loop array
//log output
const testCases: string[] = [
    '["001", "002", "9999"]',
    '["1", "01", "10"]',
    '["100", "200", "300"]',
    '["0001", "002", "03"]',
    '["05", "5", "005"]',
    '["123", "0123", "00123"]',
    '["07", "07", "7"]',
    '["1000", "0001", "01"]',
    '["099", "99", "100"]',
    '["009", "9", "09"]'
];

testCases?.map((testCase) => console.log(`Input:${testCase} Output: ${checkNumberPadding(JSON.parse(testCase))}`))
// Get input from user
// rl.question('Ex: ["001"] \nEnter array of strings to check for padding consistency:\n', (answer: string) => {
//     console.log(`Output: ${checkNumberPadding(JSON.parse(answer))}`);

//     // Close the readline interface
//     rl.close();
// });
