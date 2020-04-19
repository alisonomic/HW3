// Assignment Code
var gerateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
var generateBtn = addEventListener("click", writePassword);

console.log(passwordCharacters)

//Variables
var confirmLength = "";
var confirmUpper;
var confirmLower;
var confirmNumbers;
var confirmSpecialChar;

//Array options
var letterCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "~", "?"];

//Initial prompt
function generatePassword() {
     confirmLength = (prompt("Your password must contain 8-15 characters, how many chacters would you like your password to contain?"));
}

//Confirm characters user selected
var confirmUpper = confirm("Confirm if you would like to use uppercase letters");
var confrimLower = confirm("Confirm if you would like to use lowercase letters");
var numbers = confirm("Confirm if you would like numbers to be included in your password");
var confirmSpecialChar = confirm("Confirm if you would like to include special characters");

var userPass = []

if (confirmUpper) {
    userPass = userPass.concat(letterCap)
}
if (confirmLower) {
    userPass = userPass.concat(letterLow)
}
if (confirmNumbers) {
    userPass = userPass.concat(numbers)
}
if (confirmSpecialChar) {
    userPass = userPass.concat(specialChar)
}

//Loop for random password to be pulled
var randomPass =""

for (var i = 0; i < confirmLength; i++) {
    randomPass = randomPass + userPass[Math.floor(Math.random() * userPass.length)];
    console.log(randomPass)
  }
return randomPass;

