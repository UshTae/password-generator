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
        var userCharacters = window.prompt("Insert password");

        if (userCharacters.length = userLength) {
          
        }
      }
    
      }
      


  // this displays the generated password 
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
