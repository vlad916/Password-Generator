function getRandomPassword(){
  var choiceArray = [];
  var passwordPrompt = prompt("How many characters would you like your new password to be? Pick a number between 8 and 128.");
  var getLength = parseInt(passwordPrompt);
  if (getLength < 8 || getLength > 128) {
      alert("Please choose a number between 8 and 128.")
  }
else {
    var password = "";
    var specialCaseCharacters = confirm("Would you like to use Special Characters?");
    if (specialCaseCharacters === true) {
      choiceArray.push("@", "#", "$", "%", "^", "&", "*", "(", ")", "!", "-", "_", "+", "?", ",", ".", "[", "]", "{", "}", "~", ":", ";", "<", ">", "/");
    }
    var numericalCaseCharacters = confirm("Would you like to use Numbers?");
    if (numericalCaseCharacters === true){
      choiceArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
    var lowerCaseCharacters = confirm("Would you like to use Lower case Characters?");
    if (lowerCaseCharacters === true){
      choiceArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }
    var upperCaseCharacters = confirm("Would you like to use Upper case Characters?");
    if (upperCaseCharacters === true){
      choiceArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }

    // This is to check if all the items are in the choiceArray
    console.log(choiceArray); 

    // Generates a password of the length of characters from all the available characters
    for (var i = 0; i < getLength; i++){
      var passwordCharacters = getRandomCharacters();
      password = password + passwordCharacters; 
    }

    console.log(password);

    return password;
  }


  function getRandomCharacters(x) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    var randomQ = choiceArray[randomIndex];


    return randomQ;
  }
}


// Created a function for the click button
var generatePassword = document.getElementById("generate");
generatePassword.addEventListener("click", function () {
  var randomPassword = getRandomPassword();
  var securePasswordElement = document.getElementById("password");
  securePasswordElement.innerHTML = randomPassword;
});