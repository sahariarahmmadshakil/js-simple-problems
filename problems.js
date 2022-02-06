// Calculate total sum from 1 to 50

// let sum = 0;
// for (let i = 50; i >= 0; i--) {
//     sum = sum + i;
//     console.log(sum);
// }

// same problem solving using function 

function sumOfNumbers(inputValue) {
    let sum = 0;
    for (let i = 0; i <= inputValue; i = i + 1) {
        sum = sum + i;
        console.log(sum)
    }
    return sum; // to get only sum of al numbers value

}
let output = sumOfNumbers(50);
console.log('Total Sum of the Vlue is:', output);