"use strict";

let body = document.querySelector("body");

// elementName, tagName, elementID, text
// container
let box = elementCreator("box", "div", "bigBox");
let passwordOut = elementCreator("passwordOut", "div", "outBox");

// low cases checkbox
let lowCases = elementCreator("lowCases", "input", "lowCases", "");
lowCases.type = "checkbox";
let lowLabel = elementCreator("lowLabel", "label", "label", "Low Cases");
lowLabel.for = "lowCases";

// upper cases checkbox
let upperCases = elementCreator("upperCases", "input", "upperCases");
upperCases.type = "checkbox";

lowCases.addEventListener("change", lowFn);
upperCases.addEventListener("change", upperFn);

appendChilder(box, lowCases);
appendChilder(box, lowLabel);
appendChilder(box, upperCases);
appendChilder(body, box);

// function generatePassword() {
//   var length = 8,
//     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//     retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//     retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }
// console.log(generatePassword());

// helper functions **********************************************

// HTML element creator function
function elementCreator(elementName, tagName, elementClass, text) {
  let foo = (elementName = document.createElement(tagName));
  elementName.id = elementClass;
  elementName.textContent = text;
  return foo;
}

// append childer to html
function appendChilder(father, child) {
  return father.appendChild(child);
}

//adding low cases
function lowFn() {
  if (this.checked) {
    lowCases.value = "abcdefghijklmnopqrstuvwxyz";
  } else {
    lowCases.value = null;
  }
}

//adding upper cases
function upperFn() {
  if (this.checked) {
    upperCases.value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    upperCases.value = null;
  }
}
