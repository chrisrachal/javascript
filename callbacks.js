// function checkInstagram(username) {
//     console.log(`Check the stories ${username}`)
// }
// function makePhoneCall(contact) {
//     console.log(`Call your mom ${contact}`)
// }
// function playSpotify(song) {
//     console.log(`Play my favorite song ${song}`)
// }
// function checkEmail(emailProvider) {
//     console.log(`Check your email ${emailProvider}`)
// }
// function sendEmail(message) {
//     console.log(`Send your email ${message}`)
// }
// function sendTextMessage(contact) {
//     console.log(`Yo, what's the word ${contact}`);
// }
// function takePicture(filter) {
//     console.log(`Take picture with ${filter} filter`);
// }
// function faceTime(friend) {
//     console.log(`Facetiming my friend ${friend}...`);
// }
// function useMobileDevice(typeOfPhone, funcName, param) {
//     let nameOfFunction = funcName.name;
//     if (typeOfPhone === 'Android' && nameOfFunction === 'faceTime') {
//         console.log('Facetime is only a feature on iPhones');
//         return;
//     }
//     console.log(`Use my ${typeOfPhone} to ${nameOfFunction}`);
//     funcName(param);
// }
// useMobileDevice('iPhone', sendTextMessage, 'Sebastian');
// console.log('---');
// useMobileDevice('Android', faceTime, 'Jake');
// console.log('---');
// useMobileDevice('iPhone', takePicture, 'portrait');
// useMobileDevice('iPhone', playSpotify, 'NY State of Mind')
// useMobileDevice('iPhone', checkEmail, 'Chris');
// useMobileDevice('Android', sendEmail, 'Paul');
// useMobileDevice('Android', checkInstagram, 'Aaron');
// useMobileDevice('iPhone', makePhoneCall, 'Chris')



// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(number1, number2) {
//     return number1 * number2;
// }

// function calculator(operation, num1, num2) {
//     let result = operation(num1, num2);

//     return result;
// }

// calculator(add, 5, 12);


//timing functions

// function alarm() {
//     console.log("Wake up!");
// }

// setTimeout(alarm, 10000);

// function annoy() {
//     console.log('Are we there yet?');
//   }
  
//   setInterval(annoy, 1000);

// function alarm() {
//     console.log("Wake up!");
// }

// const firstAlarm = setTimeout(alarm, 3000);
// const secondAlarm = setTimeout(alarm, 6000);

// function annoy() {
//     console.log('Are we there yet?');
// }

// function shutDown() {
//     console.log('No!');
// }

// const kids = setInterval(annoy, 1000);
// const parents = setInterval(shutDown, 3200);

// function annoy() {
//     console.log('Are we there yet?');
// }
// function hush() {
//     clearInterval(kids);
// }
// const kids = setInterval(annoy, 1000);
// setTimeout(hush, 10000);

// function alarmRing() {
//     console.log('RRRIIINNNGGGGG');
// }

// function turnOffSnooze() {
//     console.log("turning snooze off now");
//     clearTimeout(snoozeAlarm);
// }

// const snoozeAlarm = setTimeout(alarmRing, 3000);

// const snoozeOff = setTimeout(turnOffSnooze, 10000);


// 1: Assignment

function hydrate() {
    console.log('Dont forget to drink your water!');
}

setInterval(hydrate, 5000);

function hydrate() {
    console.log('Dont forget to drink your water!');
}
function shutDown() {
    console.log('I DID!');
}

const overwatch = setInterval(hydrate, 2100);
const drinker = setInterval(shutDown, 10000);