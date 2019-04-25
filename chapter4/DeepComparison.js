/*
Deep comparison
The == operator compares objects by identity. But sometimes, you
would prefer to compare the values of their actual properties.
Write a function, deepComparison, that takes two values and returns true
only if they are the same value or are objects with the same properties
whose values are also equal when compared with a recursive call to
deepComparison.
To find out whether to compare two things by identity (use the ===
operator for that) or by looking at their properties, you can use the
typeof operator. If it produces "object" for both values, you should do a
deep comparison. But you have to take one silly exception into account:
by a historical accident, typeof null also produces "object".

*/
function deepComparison(value1, value2) {

    //first check the incoming values are not null
    if (value1 !== null && value2 !== null) {
        //check if the incoming values are not object, return their comparison
        if (!((typeof value1 === 'object') && (typeof value2 === 'object'))) {

            return (value1 === value2);

        } else {

            //if the incoming values are objects

            //first check if they refer to the same object
            if (value1 === value2) {

                return true;

            } else {

                //if they are not the same object

                //then first check if they have the same keys	
                let object1Keys = (Object.keys(value1)).sort();
                let object2Keys = (Object.keys(value2)).sort();

                // now we can compare the 2 arrays to compare if we have the same array values

                //now comapare the 2 arrays
                if(!(isArrayEqual(object1Keys, object2Keys))){

                	return false;

                }

                //if all the properties match, then we move on to check the values one by one

                for (let property in value1) {

                    //if both values are primitive datatypes and their values dont match
                    if (!((typeof value1[property] === 'object') && (typeof value2[property] === 'object'))) {


                        if (!(value1[property] === value2[property])) {
                            console.log('hola!');
                            return false;

                        }

                    } else if ((typeof value1[property] === 'object') && (typeof value2[property] === 'object')) {                        //what is of one the values in null which is also an object
                        
                          
                        //what if the type of object is an array

                        	if ((Array.isArray(value1[property])) && Array.isArray(value2[property])) {

                           		 if(!(isArrayEqual(value1[property], value2[property]))){

                            	return false;
                            	}

                        	} else {
                            // if both values are objects, this will be our recursive call
                            //console.log('recursive call');
                           return deepComparison(value1[property], value2[property]);
                        	}
                      }
                      else {

                        //if one is an object and another is not
                        console.log('booo!');
                        return false;

                    }

                }


            }

        }


return true;

    }

return false;

}


function isArrayEqual(array1, array2) {

    if (!(array1.length === array2.length)) {

        return false;

    } else {

        for (let i = 0; i < array1.length; i++) {

            if (array1[i] !== array2[i]) {

                return false;

            }
        }
    }

return true;
}

let jangoFett = {

    occupation: "Bounty Hunter",
    genetics: "superb",
    arr: [1, 2, 3]
};

let bobaFett = {

    genetics: "superb",
    occupation: "Bounty Hunter",
    arr: [1, 2]

};

console.log('Is BobaFett = JangoFett? ')
console.log(deepComparison(bobaFett, jangoFett));


let obj1 = {
  a: 'somestring',
  b: 42,
  c: {
    1: 'one',
    2: {
      3: {
      	first: 'Three',
      	arr: [1, 2, 13]}
    }
  }
};

let obj2 = {
  a: 'somestring',
  b: 42,
  c: {
    1: 'one',
    2: {
      3: {
      	first: 'Three',
      arr: [1, 2, 3]}
    }
  }
};
console.log("Is obj1 == obj2 : ");
console.log(deepComparison(obj1, obj2));


let obj3 = {
  a: 'somestring',
  b: 42,
  c: {
    1: 'one',
    2: {
      4: 'Three'
    }
  }
};

let obj4 = {
  a: 'somestring',
  b: 42,
  c: {
    1: 'one',
    2: {
      3: 'Three'
    }
  }
};
console.log("Is obj3 == obj4 : ");

console.log(deepComparison(obj3, obj4));
let obj = {
  name: {
    gender: "F"
  },
  age: 20
};


console.log('Is null == obj3');
console.log(deepComparison(null, obj3));
console.log('Is 5 == obj3');
console.log(deepComparison(5, obj3));
console.log('Is null == null');
console.log(deepComparison(null, null));
console.log('Is 10 == 5');
console.log(deepComparison(10, 5));
console.log(`Is 10 == '10'`);
console.log(deepComparison(10, '10'));
console.log(`Is 10 == 10`);
console.log(deepComparison(10, 10));