var i = 0;
var content = "Welcome to my personal website! Please scroll down.";
var speed = 80;

function animation() {
    if (i < content.length) {
        document.getElementById("typewriter").innerHTML += content.charAt(i);
        i++;
        setTimeout(animation, speed);
    } else {
        document.getElementById("typewriter").innerHTML += '<span class="blinking-cursor">|</span>';
    }
}

// window.onload = function() {
//     animation();
// };

document.addEventListener("DOMContentLoaded", function() {
    animation();
});