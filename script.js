// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordCount = prompt("Please input length of password. At least 10 characters but no more than 64.");
  let passwordCountNum = parseInt(passwordCount);
  //alert(passwordCountNum);
  if (passwordCountNum && passwordCountNum >= 10 && passwordCountNum <= 64) {
    //alert("test");
    let needLowerCase = confirm("Do you need Lowercase?");
    let needUpperCase = confirm("Do you need Uppercase?");
    let needNumeric = confirm("Do you need Numeric?");
    let needSpecialCharacters = confirm("Do you need Special characters?");
    //alert(passwordCountNum + " " + needLowerCase + " " + needUpperCase + " " + needNumeric + " " + needSpecialCharacters);
    if (!needLowerCase && !needUpperCase && !needNumeric && !needSpecialCharacters) {
      alert("Try Again and select one or more character type!");
      //getPasswordOptions();
      return false;
    } else
      return [passwordCountNum, needLowerCase, needUpperCase, needNumeric, needSpecialCharacters];
  } else {
    alert("ERROR: Your input must be a number between 10 and 64. Please try again!");
    return false;
    /*if (passwordCountError) {
      getPasswordOptions();
      return false;
    } else {
      alert("GOOD BYE!");
      return false;
    }*/
  }

}

// Function for getting a random element from an array
function getRandom(arr) {
  const random = Math.floor(Math.random() * arr.length); //get random index in array's elements
  return arr[random]; //return random element's value in array
}

// Function to generate password with user input
function generatePassword() {
  let newPassword = [];
  let answersArray = getPasswordOptions();
  var arrayCharacters = [];
  if (answersArray[1]) {
    arrayCharacters.push(lowerCasedCharacters);
    newPassword.push(getRandom(lowerCasedCharacters)); //add min 1 char in newPassword from lowerCasedCharacters array
  }
  if (answersArray[2]) {
    arrayCharacters.push(upperCasedCharacters);
    newPassword.push(getRandom(upperCasedCharacters)); //add min 1 char in newPassword from upperCasedCharacters array
  }
  if (answersArray[3]) {
    arrayCharacters.push(numericCharacters);
    newPassword.push(getRandom(numericCharacters)); //add min 1 char in newPassword from numericCharacters array
  }
  if (answersArray[4]) {
    arrayCharacters.push(specialCharacters);
    newPassword.push(getRandom(specialCharacters)); //add min 1 char in newPassword from specialCharacters array
  }
  // console.log("@@@", newPassword);
  // let newPassword = answersArray[0] + answersArray[1] + answersArray[2] + answersArray[3] + answersArray[4] + answersArray[5];
  forSteps = answersArray[0] - newPassword.length;
  for (let i = 0; i < forSteps; i++) {
    const randomCharArrayIndex = Math.floor(Math.random() * arrayCharacters.length); //get random index in arrayCharacters's elements
    randCharacter = getRandom(arrayCharacters[randomCharArrayIndex]); //return random element's value in arrayCharacters
    // console.log(arrayCharacters[randomCharArrayIndex], randCharacter); //return random element's value in array
    newPassword.push(randCharacter);
  }
  // console.log(newPassword);
  return newPassword.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);