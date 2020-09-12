//onclick we want to generate a password
// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

var generatePassword = function() {
    //*****get user input
    //prompt user and collect user data
    //types numbers, string, boolean, objects, arrays
    var length = parseInt(prompt("How many characters do you want?"));

    //check length
    if (length < 8) {
        alert("password is too short, it has to be greater than 8");
        return;
    }
    if (length > 128) {
        alert("password is too long, it has to be less than 128");
        return;
    }

    var includeSpecialCharacters = confirm("Do you want Special Charcters?");
    var includeUppercase = confirm("Do you want Uppercase?");
    var includeLowercase = confirm("Do you want Lowerscase?");
    var includeNumbers = confirm("Do you want Numbers?");

    //if user select nothing - handle case
    while (!includeSpecialCharacters && !includeUppercase && !includeLowercase && !includeNumbers) {
        alert("you need to selelect something");
        includeSpecialCharacters = confirm("Do you want Special Charcters?");
        includeUppercase = confirm("Do you want Uppercase?");
        includeLowercase = confirm("Do you want Lowerscase?");
        includeNumbers = confirm("Do you want Numbers?");
    }

    //build an array of all possbilities
    var possbilities = [];
    if (includeSpecialCharacters) {
        //do this
        possbilities = possbilities.concat(specialCharacters);
    }
    if (includeUppercase) {
        //do this
        possbilities = possbilities.concat(upperCasedCharacters);
    }
    if (includeLowercase) {
        //do this
        possbilities = possbilities.concat(lowerCasedCharacters);
    }
    if (includeNumbers) {
        //do this
        possbilities = possbilities.concat(numericCharacters);
    }

    console.log("possbilities", possbilities);

    //generate random password and set length
    var newPassword = [];
    for (i = 0; i < length; i++) {
        //for every index run this code
        //create a random number less than possibility
        var randomNumber = Math.floor(Math.random() * possbilities.length);
        //select a an item from possibility
        var randomlySelectedPossibility = possbilities[randomNumber];
        //store random slection into array
        newPassword.push(randomlySelectedPossibility);
    }

    console.log("newPassword: ", newPassword);

    //show the random password
    document.querySelector("#passwordGenratorText").value = newPassword.join('');
}

document.querySelector("#generate").addEventListener("click", generatePassword);