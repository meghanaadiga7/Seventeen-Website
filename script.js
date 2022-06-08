"use strict";
let count = 1;
document.querySelector(".moon").addEventListener("click", function () {
  if (count === 1) {
    document.querySelector("body").style.backgroundColor = "#a0937d";
    count = 0;
  } else {
    document.querySelector("body").style.backgroundColor = "#f6e6cb";
    count = 1;
  }
});
