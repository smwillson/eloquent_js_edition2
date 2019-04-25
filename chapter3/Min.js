/*
The previous chapter introduced the standard function Math.min that
returns its smallest argument. We can do that ourselves now. Write a
function min that takes two arguments and returns their minimum.

*/

let min = function(number1, number2){

	let minNumber;

	minNumber =  (number1 < number2) ? number1 : number2;

return minNumber;
}

console.log(`Smaller of 2 numbers is ${min(20,18)}`);