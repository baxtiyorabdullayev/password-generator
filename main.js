"use strict";

let passwordOut = query(".passwordOut");

let copyBtn = query(".copy");
copyBtn.addEventListener("click", copyToClipboard);

let passwordLength = query("#passwordLength");

let lowCases = query("#lowCases");
lowCases.value = "";
lowCases.addEventListener("change", lowFn);

let upperCases = query("#upperCases");
upperCases.value = "";
upperCases.addEventListener("change", upperFn);

let numbers = query("#numbers");
numbers.value = "";
numbers.addEventListener("change", numberFn);

let symbols = query("#symbols");
symbols.value = "";
symbols.addEventListener("change", symbolsFn);

let generateBtn = query("#generateButton");
generateBtn.addEventListener("click", generatePassword);

function generatePassword(e) {
  e.preventDefault();
  let password = "";
  if (passwordLength.value) {
    if (lowCases.value || upperCases.value || numbers.value || symbols.value) {
      let charset =
        lowCases.value + upperCases.value + numbers.value + symbols.value;
      for (let i = 0, n = charset.length; i < passwordLength.value; i++) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
    } else {
      return (passwordOut.textContent = "Please choose one!");
    }
  } else {
    return (passwordOut.textContent = "Please enter passaword length");
  }

  return (passwordOut.textContent = password);
}

// helper functions **********************************************

// query selector
function query(id) {
  return document.querySelector(id);
}

// copying to clipboard
function copyToClipboard() {
  //passwordOut.select();
  // passwordOut.setSelectionRange(0, 99999); // For mobile devices
  // // Copy the text inside the text field
  // navigator.clipboard.writeText(passwordOut.value);
}

//adding low cases
function lowFn() {
  if (this.checked) {
    lowCases.value = "abcdefghijklmnopqrstuvwxyz";
  } else {
    lowCases.value = "";
  }
}

//adding upper cases
function upperFn() {
  if (this.checked) {
    upperCases.value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    upperCases.value = "";
  }
}

//adding numbers
function numberFn() {
  if (this.checked) {
    numbers.value = "0123456789";
  } else {
    numbers.value = "";
  }
}

//adding symbols
function symbolsFn() {
  if (this.checked) {
    symbols.value = " ~`! @#$%^&*()_-+={[}]|:;'<,>.?/";
  } else {
    symbols.value = "";
  }
}
