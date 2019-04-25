function range(start,end,step){

	let rangeArray = [];

	//now lets check if we have a +ve or a -ve countBy, depending on whether start > end

	let countBy = (step == undefined ) ? 
										(start < end) ? 1 : -1
										: step;

	let checkStep = (countBy > 0) ? 1 : 0;

	if(checkStep){

	for(let num = start, index = 0; num <= end ; num+= countBy){

		rangeArray[index++] = num;

	}
}else{

	for(let num = start, index = 0; num >= end ; num+= countBy){

		rangeArray[index++] = num;

	}


}
return rangeArray;
}

console.log(range(10,1,-2));



function sum(arrayRange){

	let sum = 0;

	for (let index = 0 ; index < arrayRange.length ; ){

		sum += arrayRange[index++];

	}

	return sum;
}

console.log(sum(range(1,10)));