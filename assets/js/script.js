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
  special: getRandomSpecial,
};



//When button is pressed, an event will happen
generateBtn.addEventListener("click", writePassword);

// creates a function called writePassword
function writePassword() {
  
  // this is the function in which all the alert prompts and user input occurs 
  function generatePassword() {
    
    for (var properties in randomFunction){
      if (uppercaseEl.checked == true){
        // captital random generation
        function getrandomUpper() {
          // this will return a random string from built in character code chart within given criteria
          return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }
      }else{
        console.log("unchecked")
      }
  
      if (lowercaseEl.checked == true){
  
          // lowercase random generation 
        function getRandomLower() {
          return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
      }else{
        console.log("unchecked")
      }
  
      if (numbersEl.checked == true){
        // numeric 
        function getRandomNumber() {
          return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        }
      }else{
        console.log("unchecked")
      }
  
      if (specialsEl.checked == true){
        // special characters 
        function getRandomSpecial() {
  
          const special = '~!@#$%^&*(){}[]=<>/,.:;';
          return special[Math.floor(Math.random()* special.length)];
        }
      }else{
        console.log("unchecked")
      }
    }
  }   
 // this displays the generated password 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// variable with all the criteria functions 
// make array from variable 
// encase all of this in a loop thats restricted by user length input 
  // choose random function from array 
  // if function is 'checked' return it
  // else next function 
  // continues looping through them all until user length met 

  