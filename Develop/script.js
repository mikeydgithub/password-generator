
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var passwordLength;
var passwordString = "";
var passwordCharacters ='';

var random = function (number) {
  return Math.floor(Math.random() * number)
};


function getPassword() {
  window.alert("Let's create a password!")
  console.log("Let's create a password!")
  passwordLength = prompt ("Choose between 8 and 128 characters")
  console.log("You chose " +  passwordLength + " characters.")

  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("You need to provide a valid answer! Please try again.")
    console.log("No answer was given.")
  } else {
    getLowercase()
  }
};

function getLowercase() {
  var answer = prompt("Do you want to use lowercase letters?")
  if (answer.toLowerCase() == "yes" || answer.toLowerCase() == "y")
    {passwordCharacters = passwordCharacters + "abcdefghijklmnopqrstuvwxyz";
  }
  getUpperCase()
}

function getUpperCase(){
  var answer = prompt("Do you want to use uppercase letters?")
  if (answer.toLowerCase() == "yes" || answer.toLowerCase() == "y")
    {passwordCharacters = passwordCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
    getNumbers()
}

function getNumbers() {
  var answer = prompt("Do you want to use numbers?")
  if (answer.toLowerCase() == "yes" || answer.toLowerCase() == "y")
    {passwordCharacters = passwordCharacters + "0123456789";
  }
    getSpecial();
}

function getSpecial(){
  var answer = prompt("Do you want to use special characters?")
  if (answer.toLowerCase() == "yes" || answer.toLowerCase() == "y")
    {passwordCharacters = passwordCharacters + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  passwordValidator()
}

function generatePassword () {
  getPassword();
}

function passwordValidator() {
  if(password.length === 0) {
    getLowercase();
  }
  else {
    var passwordarray = passwordCharacters.split("");
    console.log(passwordLength)
    while(passwordString.length < passwordLength){
      var number = random(passwordarray.length)
      passwordString = passwordString + passwordarray[number]
    }
    return
  }
}













// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


