
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

// lowercase random generation 

// captital random generation 

// numeric 

// special characters 