const alphabet = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+="

const passwordText = document.getElementById("passwords");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incUpper = document.getElementById("upper");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");


// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  let characters = alphabet;
  incNumbers.checked ? (characters += numbers) : "";
  incUpper.checked ? (characters += upper) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordText.value = generatePassword(length.value, characters);
});

const generatePassword = (length, characters) => {
  let passwords = "";
  for (let i = 0; i < length; i++) {
    passwords += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return passwords;
};

