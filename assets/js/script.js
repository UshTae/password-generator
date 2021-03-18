// This creates a var called generateBtn targeted at #generate under card-footer 
var generateBtn = document.querySelector("#generate");

// creates a function called writePassword
function writePassword() {
  // this creates a variable called password thats linked to a function
  // called generate password 
  var password = generatePassword();
  // creates a variable called passwordText targeted at #password under card body 
  var passwordText = document.querySelector("#password");

  // value of passwordText is password, therefore the new password is displayed  
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