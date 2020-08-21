// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

//Arrays for characters.
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//Variables

var passwordLength = "";
var confirmNumericCharacters;
var confirmSpecialCharacters;
var comfirmLowercaseLetters;
var confirmUppercaseLetters;

//Prompt to confirm number of characters in a password.
function generatePassword() {
  var passwordLength = (prompt("How many characters would you like to include between 8 to 128?"));

  // Loop for incorrect password length.
while(passwordLength <= 7 || passwordLength >= 129) {
  alert("Your password has to be between 8 to 128 characters. Try again.");
  var passwordLength = (prompt("How many characters would you like to include between 8 to 128?"));
}

// Password lenth repeat.
alert(`Your password will be ${passwordLength} characters.`);

// Confirm characters in a password.
var confirmNumericCharacters = confirm("Click OK to confirm include numeric characters. ");
var confirmSpecialCharacters = confirm("Click OK to confirm include special characters. ");
var confirmLowercaseLetters = confirm("Click OK to confirm include lowercase letters. ");
var confirmUppercaseLetters = confirm("Click OK to confirm include uppercase letters. ");
// Loop 
while(confirmNumericCharacters === false && confirmSpecialCharacters === false && confirmLowercaseLetters === false && confirmUppercaseLetters){ 
  alert("Please choose at least one character.")
var confirmNumericCharacters = confirm("Click OK to confirm include numeric characters. ");
var confirmSpecialCharacters = confirm("Click OK to confirm include special characters. ");
var confirmLowercaseLetters = confirm("Click OK to confirm include lowercase letters. ");
var confirmUppercaseLetters = confirm("Click OK to confirm include uppercase letters. ");
}

//Action to fix password.
var passwordCharacters = []

if (confirmNumericCharacters) {
  passwordCharacters = passwordCharacters.concat(numericCharacters)
}

if (confirmSpecialCharacters) {
  passwordCharacters = passwordCharacters.concat(specialCharacters)
}

if (confirmLowercaseLetters) {
  passwordCharacters = passwordCharacters.concat(lowercaseLetters)
}

if (confirmUppercaseLetters) {
  passwordCharacters = passwordCharacters.concat(uppercaseLetters)
}

console.log(passwordCharacters)

// Strings to be filled loop selecting random characters from the array
var randomPassword = ""

for (var i = 0; i < passwordLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword)
}
   return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}





