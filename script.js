// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (i = 0; i < numbers.length; i++) {
    text += numbers[i] + "1";
}


// TODO: create the generatePassword function the final passward and the code should live inside the function

// TODO: create a prompt to ask the length of  the password and save it to a value

// TODO: create a confirm to ask the user if they want uppercase char

// TODO: create a confirm to ask the user if they want lowerrcase char

// TODO: create a confirm to ask the user if they want numbers char


// TODO: create a confirm to ask the user if they want special char


// TODO: after I'm done with the prompt have to create the password 

// TODO: create arrays with all needed char (uppercase , lowerrcase ,numbers ,numbers)

// TODO: create a conditional situation that seems chosen from the confirm to a new collaction

// TODO:  we have to select a specific numdwe of char randomly from our final collation based on the user choice 

//  i can use math.random or math.floor 

// TODO:  create a var  that hold the char that hte user wnat in the password 

// TODO: add validation to make sure atleast one type of char is selected and alert the user if there are no type being selected

// TODO: add validation with a lenght to make sure is between 8 and 128 char





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);