// Define Variables for All Passward characters IE lowercase uppercase, special characters and numbers
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['!', '@', '#', '$', '%', '&'];
// function asks what characters the user wants in their password
function getPasswordCriteria() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  if (length < 8 || length > 128) {
    alert('Password length must be at least 8 characters or less than 128 characters')
    return null;
  }

  var containLowercase = confirm('Click OK to put lowercase characters in your password');

  var containUppercase = confirm('Click OK to put uppercase characters in your password');

  var containNumbers = confirm('Click OK to put numerical characters in your password');

  var containSpecial = confirm('Click OK to put special characters in your password');

  var passwordOptions = {
    length: length,
    containLowercase: containLowercase,
    containUppercase: containUppercase,
    containNumbers: containNumbers,
    containSpecial: containSpecial
  }
  // console.log(passwordOptions)
  return passwordOptions;
}

// Random function that will pick out a random character from the arrays
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomCharacter = arr[randomIndex];

  return randomCharacter;
}

// Generate the password using the true and false values
function generatePassword() {
  var options = getPasswordCriteria()
  var finalPassword = [];
  var potentialCharacters = [];
  var guranteedCharacters = [];

  if (!options) return null;
  if (options.containLowercase) {
    potentialCharacters = potentialCharacters.concat(lowercase);
    guranteedCharacters.push(getRandom(lowercase))
  }

  if (options.containUppercase) {
    potentialCharacters = potentialCharacters.concat(uppercase);
    guranteedCharacters.push(getRandom(uppercase))
  }

  if (options.containSpecial) {
    potentialCharacters = potentialCharacters.concat(specials);
    guranteedCharacters.push(getRandom(specials))
  }

  if (options.containNumbers) {
    potentialCharacters = potentialCharacters.concat(numbers);
    guranteedCharacters.push(getRandom(numbers))
  }

  for (i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(potentialCharacters);

    finalPassword.push(possibleCharacter)
  }

  for (var i = 0; i < guranteedCharacters.length; i++) {
    finalPassword[i] = guranteedCharacters[i];
  }

  return finalPassword.join('');

}


// function to write the password using the criteria the user specified
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

document.getElementById('generate').addEventListener('click', () => {
  writePassword()
})

