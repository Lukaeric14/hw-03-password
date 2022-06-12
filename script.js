// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

let lowercaseChar = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let uppercaseChar = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numericChar = ["1","2","3","4","5","6","7","8","9","0"];
let specialChar = ["!","@","#","$","%","^","&","*","(",",",")"];
let possibleChar = [];
let finalPass = [];

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  var passLength = window.prompt("How long would you like your password to be? 10 Characters Atleast");
  if (passLength <= 9 || passLength == "") {
    alert("You must include at least 8 characters")
    writePassword()
  } 
  var passLowerCase = window.confirm("Should your password include lowercase characters?");
  var passUpperCase = window.confirm("Should your password include uppercase characters?");
  var passNumeric = window.confirm("Should your password include numeric characters?");
  var passSpecial = window.confirm("Should your password include special characters?");

  console.log(passLength,passLowerCase,passUpperCase,passNumeric,passSpecial);
    possibleChar = [];
    finalPass = [];

  if (passLowerCase === true) {
    possibleChar = possibleChar.concat(lowercaseChar);
  }

  if (passUpperCase === true) {
    possibleChar = possibleChar.concat(uppercaseChar)
  }
  
  if (passNumeric === true) {
    possibleChar = possibleChar.concat(numericChar)
  }
  
  if (passSpecial === true) {
    possibleChar = possibleChar.concat(specialChar)
  }

  console.log("Possible Characters:" + possibleChar);

 for (let i = 0; i < passLength; i++){
   var currentPosition = Math.floor(Math.random()*possibleChar.length);
   var additionalChar = possibleChar[currentPosition];
   finalPass.push(additionalChar);
   console.log(finalPass);
 }
 let ffinalPass = finalPass.join('');
 console.log(ffinalPass);
 return ffinalPass
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
