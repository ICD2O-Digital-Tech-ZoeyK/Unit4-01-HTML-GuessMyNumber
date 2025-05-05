// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
let number = Math.floor(Math.random() * 6) + 1;

function checkGuess() {
    let guess = document.getElementById("userGuess").value;
    guess = parseInt(guess);
    let result = document.getElementById("result");

    if (guess === number) {
        result.textContent = "You got it right!";
    }

    if (guess !== number) {
        result.textContent = "Wrong guess. The correct number was " + number + ".";
    }
}
