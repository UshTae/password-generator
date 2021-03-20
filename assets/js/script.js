
// This creates a var called generateBtn targeted at #generate under card-footer 
var generateBtn = document.querySelector("#generate");

// creates a function called writePassword
function writePassword() {

  // this is the function in which all the alert prompts and user input occurs 
  function generatePassword() {}
  // this displays the generated password 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
  
  
  
  // logs the output 
console.log(getRandomSpecial());