// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var character = {
    symbol = "!@#$%&*?+^<>/[\|-",
    number = "0123456789",
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase = "abcdefghijklmnopqrstuvwxyz",
}

document.getElementById("generate");

let generate = prompt("How many characters would you like your password to include");
let text;
if (generate == null || generate == "") {
    text = "User cancelled the prompt.";
} else {
    text = "Hello" + generate + "How are you today?";
}

console.log(alert("A message"));
console.log(prompt("Give me some info"));
console.log(confirm("A yes / no choice"));

function generatePassword() {
    var password = "";

    password += "a";
    password += "r";
    password += "]";

    return password;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
}