const favoriteArtist = ['Nas', 'Kendrick', 'Andre3k', 'Jay', 'Cole'];
const randomEmojis = ['😁', '🥸', '🤯', '👀', '🥷🏽'];
const eliteCoders = [];
const theDevLeague = [];
const mechaPodzilla = ['Godzilla','Ghidorah', 'Megalon', 'Kong'];
const reallyCoolPodName = [];
const my2DArray = [[20, 22, 23], [40, 12, 50], [100, 200, 300]];
console.log(randomEmojis);
console.log(mechaPodzilla);
console.log(my2DArray);
console.log(favoriteArtist);

// // Methods
// // let animalLength = animals.length; 
// // const carsAndProfessionals = cars.concat(professionals);
// // let animalLength = animals.length;
// // console.log(animalLength);
// // // 5
// // // const carsAndProfessionals = cars.concat(professionals);
// // // console.log(carsAndProfessionals);
// // ["🚗", "🚙", "🏎", "🚕", "🚓", "👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾", "👨🏼‍⚖️"]
// console.log(theDevLeague.indexOf('Brianna Giorgi'))
// // 6
// console.log(theDevLeague);
// // ["Paula Bauerman", "Brandon Hall", "Thomas Duong", "Paul Knick", "Evan Woodworth", "Aaron Prince", "Brianna Giorgi", "Maurice Chevez", "Amanda Posey"]0: "Paula Bauerman"1: "Brandon Hall"2: "Thomas Duong"3: "Paul Knick"4: "Evan Woodworth"5: "Aaron Prince"6: "Brianna Giorgi"7: "Maurice Chevez"8: "Amanda Posey"length: 9__proto__: Array(0)
// console.log(theDevLeague[6]);
// // "Brianna Giorgi"
// console.log(theDevLeague.indexOf('brianna giorgi'));
// // -1
// // console.log(professionals.pop());
// // // "👨🏼‍⚖️"
// console.log(professionals);
// //  ["👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾"]
// console.log(professionals.push('👨🏼‍⚖️'));
// // 4
// console.log(professionals);
// // ["👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾", "👨🏼‍⚖️"]
// console.log(cars.includes('Rome'));
// // false
// console.log(cars.includes('🚓'));
// // true
// console.log(numbers);
// //  [1, 66, 48, 9, 23, 19, 20, 66, 30]
// console.log(numbers.toString());
// // "1,66,48,9,23,19,20,66,30"
// let stringOfNumbers = numbers.toString();
// console.log(stringOfNumbers);
// "1,66,48,9,23,19,20,66,30"
// console.log(stringOfNumbers.split(','));
// // ["1", "66", "48", "9", "23", "19", "20", "66", "30"]
// let moreStrings = "1-66-48-9-23-19-20-66-30";
// console.log(moreStrings.split('-'));
// // ["1", "66", "48", "9", "23", "19", "20", "66", "30"]

const teams = ['Lakers', 'Nets', 'Nuggets', 'GS', 'Clippers'];
teams.reverse();//mutate(change original stae of the code)
console.log(teams);

teams.sort();//mutate array: YES
console.log(teams);

teams.shift();//mutated array: YES, removed the first element
console.log(teams);

teams.unshift('Blazers');//add to the beginning of the array
console.log(teams);

// for (let i = 0; i < teams.length; i++) {
//     //steps/process/algorithm(steps to get something done inside the for loop)
//     let teamElement = teams[i]; //goes to element 0(Blazers)
//     console.log(i, teamElement); //starts at 0 blazers
// }
//other ways to write
for (let i = 0; i < teams.length; i++) {
let teamElement = teams[i];
console.log(`${teamElement} Stadium`);
}

// for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];
//     let addTwo = num + 2;
//     console.log(addTwo);
// }


for (let i = 0; i < favoriteArtist.length; i++) {
    let artistElement = favoriteArtist[i];
console.log(i, artistElement);
}


for (let i = 0; i < mechaPodzilla.length; i++) {
        let mech = mechaPodzilla[i];
        console.log(i, mech);
    }

    for (let i = 0; i < my2DArray.length; i++) {
        let num = my2DArray[i];
        let addTwo = my2DArray + 2;
         console.log(addTwo);
    }
    