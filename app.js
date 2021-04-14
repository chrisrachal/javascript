'use strict';

console.log(5+5);

console.log("I don't like anchovies");
console.log(parseInt('33'));
console.log(parseFloat('33.3'));




//Assignment Operators
let age = 27;
let firstName = 'Chris';

console.log(firstName.replace('s', 'c'));

console.log(5 == 5);

let doesEqual = 5 == 5;
console.log(doesEqual);

let doorClosed = false;

if (doorClosed) {
    console.log('Open door');
}
   else {
    console.log('Walk through the door');
   } 

// Truthy vs falsey
age = 0;

if (age) {
    console.log('Age is zero');
}
 else {
     console.log('Age is not zero');
 }


if (firstName) {
    console.log('This is true');
}
 else {
     console.log('This is false');
 }

 let stopLight = 'red';

 if (stopLight === 'green') {
     console.log('GO');
 } else if (stopLight === 'red') {
     console.log('STOP');
 } else {
     console.log('SLOW DOWN');
 }

 //loops
 //while loop

 let count = 0;

 while(count !== 10) {
     console.log(count);
     count ++;
 }

let countDown = 10;

 while(countDown >= 0) {
     console.log("Countdown:", countDown);
     countDown --;
 };

 for(let i=0; i < countDown; i++) {
     console.log(countDown)
 };