"use strict";

let body = document.querySelector("body");

// elementName, tagName, elementClass, text
let box = elementCreator("box", "div", "bigBox", "This is container");
let btn = elementCreator("btn", "button", "clickButton", "click me");

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
  elementName.className = elementClass;
  elementName.textContent = text;
  return foo;
}

// append childer to html
function appendChilder(father, child) {
  return father.appendChild(child);
}
