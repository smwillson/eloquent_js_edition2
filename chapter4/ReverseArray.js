/*Reversing an array
Arrays have a method reverse, which changes the array by inverting
the order in which its elements appear. For this exercise, write two
functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes
an array as argument and produces a new array that has the same
elements in the inverse order. The second, reverseArrayInPlace, does what
the reverse method does: it modifies the array given as argument in order
to reverse its elements. Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in
the previous chapter, which variant do you expect to be useful in more
situations? Which one is more efficient?` */


function reverseArray(inputArray){


	let revArray = [];

	for(let index = (inputArray.length -1) ; index >=0 ; index--){
 
		revArray.push(inputArray[index]);
		

	}


return revArray;
}

//test the function reverseArray
let inputArray = [1,2];

let rArray = reverseArray([1,2,3,4,5,6,7,8,9,10]);

console.log(rArray.join(','));



function reverseArrayInPlace(inputArray){

if(inputArray.length > 1){

	for(let index = 0, lastIndex = (inputArray.length - 1) ; index < Math.floor(inputArray.length/2) ; lastIndex--,index++ ){


		[inputArray[index], inputArray[lastIndex]] = [inputArray[lastIndex],inputArray[index]];

	}
}

return inputArray;
}


//test revrseArrayInPlace function 

let arr = reverseArrayInPlace(inputArray);

console.log(arr.join(','));