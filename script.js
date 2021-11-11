// Define Variables for All Passward characters IE lowercase uppercase, special characters and numbers
var lowercase = ['a', 'b', 'c'];
var uppercase =['A', 'B', 'C'];
var numbers = ['0', '1',  '2'];
var specials = ['!', '@', '#'];
// function asks what characters the user wants in their password
function getPasswordCriteria() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  if( length < 8 || length >128) {
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

// Generate the password using the true and false values
function generatePassword() {
  var options = getPasswordCriteria()
}
// Random function that will pick out a random character from the arrays

// function to write the password using the criteria the user specified
function writePassword(){
  var password = generatePassword();
}

document.getElementById('generate').addEventListener('click', () =>{
writePassword()
})