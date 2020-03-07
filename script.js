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
      choiceArray.push
    }
    var numericalCaseCharacters = confirm("Would you like to use Numbers?");
    if (numericalCaseCharacters === true){
      choiceArray.push
    }
    var lowerCaseCharacters = confirm("Would you like to use Lower case Characters?");
    if (lowerCaseCharacters === true){
      choiceArray.push
    }
    var upperCaseCharacters = confirm("Would you like to use Upper case Characters?");
    if (upperCaseCharacters === true){
      choiceArray.push
    }
}