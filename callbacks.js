function checkInstagram(username) {
    console.log(`Check the stories ${username}`)
}
function makePhoneCall(contact) {
    console.log(`Call your mom ${contact}`)
}
function playSpotify(song) {
    console.log(`Play my favorite song ${song}`)
}
function checkEmail(emailProvider) {
    console.log(`Check your email ${emailProvider}`)
}
function sendEmail(message) {
    console.log(`Send your email ${message}`)
}
function sendTextMessage(contact) {
    console.log(`Yo, what's the word ${contact}`);
}
function takePicture(filter) {
    console.log(`Take picture with ${filter} filter`);
}
function faceTime(friend) {
    console.log(`Facetiming my friend ${friend}...`);
}
function useMobileDevice(typeOfPhone, funcName, param) {
    let nameOfFunction = funcName.name;
    if (typeOfPhone === 'Android' && nameOfFunction === 'faceTime') {
        console.log('Facetime is only a feature on iPhones');
        return;
    }
    console.log(`Use my ${typeOfPhone} to ${nameOfFunction}`);
    funcName(param);
}
useMobileDevice('iPhone', sendTextMessage, 'Sebastian');
console.log('---');
useMobileDevice('Android', faceTime, 'Jake');
console.log('---');
useMobileDevice('iPhone', takePicture, 'portrait');
useMobileDevice('iPhone', playSpotify, 'NY State of Mind')
useMobileDevice('iPhone', checkEmail, 'Chris');
useMobileDevice('Android', sendEmail, 'Paul');
useMobileDevice('Android', checkInstagram, 'Aaron');
useMobileDevice('iPhone', makePhoneCall, 'Chris')



function add(num1, num2) {
    return num1 + num2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function calculator(operation, num1, num2) {
    let result = operation(num1, num2);

    return result;
}

calculator(add, 5, 12);



