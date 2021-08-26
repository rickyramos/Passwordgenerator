// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(length, characters) {

var inputlength = prompt("How many characters do you want your password to be (Between values 8-128)?");


inputlength = parseInt(inputlength)

while (inputlength < 8 || inputlength > 128) {
  alert("Please enter a valid character length from 8 to 128")
  inputlength = prompt("How many characters do you want your password to be (Between values 8-128)?");
}

var isLowerCase = confirm("Lowercase?");
var isUpperCase = confirm("Uppercase?");
var isNumber = confirm("Numeric?");
var isSpecialChar = confirm("Special Characters?");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");

const numbers = '1234567890'.split("");
const SpecialChar = "~`!@#$%^&*()-_=+{[}]\|;:'<>,./?".split("");

var newPassword = "";

var index;

while (newPassword.length <= inputlength) {
  if (isLowerCase) {
    index = getRandomIndex(lowercase.length);
    newPassword = newPassword + lowercase[index];
  }
  if (isUpperCase) {
    index = getRandomIndex(uppercase.length);
    newPassword = newPassword + numbers[index];
  }
  if (isNumber) {
    index = getRandomIndex(numbers.length);
    newPassword = newPassword + numbers[index];
  }
  if (isSpecialChar) {
    index = getRandomIndex(SpecialChar.length);
    newPassword = newPassword + SpecialChar[index];
  }
  console.log(newPassword);
}
return newPassword;
}

function getRandomIndex(max) {

  return Math.floor(Math.random() * max);
}