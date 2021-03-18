// This creates a var called generateBtn targeted at #generate under card-footer 
var generateBtn = document.querySelector("#generate");

// creates a range of numbers
const rangeArray = []

for (let i = 8; i <= 128; i++){
    rangeArray.push(i)
}

console.log(rangeArray);
// var options = rangeArray;

// creates a function called writePassword
function writePassword() {

  // this is the function in which all the alert prompts and user input occurs 
  function generatePassword() {
    // ask for password length 
      var userLength = window.prompt("Insert password length (8-128)")

      if (userLength = rangeArray) {

        var userCharacters = window.prompt("Insert password")
      }
      // else {

      // }

  }


// this displays the generated password 
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// if generate is pressed 
  // display choose password length prompt 
    // user inputs a number from 8-128

// then 

// if password length 8-128 
  // display insert password (limit this by (length))
    // user inserts a password 

    // then 

// if one of the character types are selected 
  // display password on page