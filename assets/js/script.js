// Dom elements 
var resultEl = document.getElementById('password');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var specialsEl = document.getElementById('specials');
var generateBtn = document.getElementById('generate');

// variable with all functions defined as properties 
var randomFunction = {
  lower: getRandomLower,
  upper: getrandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
};


//When button is pressed, an event will happen
generateBtn.addEventListener("click", writePassword);

// creates a function called writePassword
function writePassword() {
  // this is the function in which all the alert prompts and user input occurs 
  function generatePassword() {
    var length = lengthEl.value;

  }



  // this displays the generated password 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// creating four different functions to give random outputs of each criteria 

  // captital random generation
function getrandomUpper() {
  // this will return a random string from built in character code chart within given criteria
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

  // lowercase random generation 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

  // numeric 
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

  // special characters 
function getRandomSpecial() {
  const special = '~!@#$%^&*(){}[]=<>/,.:;';
  return special[Math.floor(Math.random()* special.length)];
}