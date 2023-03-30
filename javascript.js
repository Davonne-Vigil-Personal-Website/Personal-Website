//landing page javascript
//console logs "Hello World"
//prompt question to enter your name with an alert
//changes h1 to a bigger size when hovered over
//changes h1 back to normal


console.log("Hello World!");

//
let question = prompt("Hello! What is your name?");
    alert("Hi, " + question + "!" + " " + "Welcome To Block 9 My Personal Website");

//
function changeSize() {
    document.getElementById("change").style.fontSize = "5.5em";
}

changeSize();

//
function changeBack() {
    document.getElementById("change").style.fontSize = "5em";
}

changeBack();

