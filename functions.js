const professionals = ['👨🏽‍🏫', '👩‍🍳', '👨🏽‍🌾', '👨🏼‍⚖️'];
const numbers = [1, 66, 48, 9, 23, 19, 20, 66, 30];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const teams = ['Lakers', 'Nets', 'Clippers', 'Mavericks'];
const storageUnit = ['art', 'pots', 'yearbook', 'shoes', 'lucky socks'];

//function called addNumbers

//input --> function --> output

function addNumbers(numbersArray) {
    //pseudocode - plan of attack for your code
    //add all of the numbers in the array
    //return a result(what datatype is being returned)
    //1. declarations
    let result = 0;

    //2 - logic(steps to solve the problm or get return value)
    //for loop to iterate through
    for (let i = 0; i < numbersArray.length; i++) {
        let temp = numbersArray[i];//each element(will start with 1)
        // console.log(temp);

        result += temp; //result = result + temp
    }

    //3 - return value
    return result;
}

console.log(addNumbers(numbers));

const romeObject = {
    name: 'Rome',
    location: 'LA',
    team: 'Lakers'
}
const otherObject = {
    name: 'Rome',
    location: 'LA',
}

//function taht returns teamName

function teamName(object) {
    //define what the return value (datatype)
    return object.team;
}

let result = teamName(romeObject);
console.log(result);

let resultTwo = teamName(otherObject);
console.log(resultTwo);

const returnObject = (object) => {
    //return the object
return object;
}
    console.log(returnObject(romeObject));
