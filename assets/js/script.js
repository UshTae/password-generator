// This creates a var called generateBtn targeted at #generate under card-footer 
var generateBtn = document.querySelector("#generate");

// creates a range of numbers


// var options = rangeArray;



// creates a function called writePassword
function writePassword() {

  // this is the function in which all the alert prompts and user input occurs 
  function generatePassword() {
    // ask for password length 
      var userLength = window.prompt("Insert password length (8-128)");
      // turns user input into a number 
      parseInt(userLength, 10)

      // creates a range criteria for user length
      if (isNaN(userLength) || userLength < 8 || userLength > 128 ){
        alert("The length must be between 8-128")
      }
      else {
        var userCharacters = window.prompt("Insert password. Length must be " + userLength + " characters long." );

        if (userCharacters.length != userLength) {
          alert("Length must be " + userLength + " characters long")
        }
      }
    
     }
      


  // this displays the generated password 
   
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
