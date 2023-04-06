//landing page javascript
//prompt question to enter your name with an alert
//changes h1 to a bigger size when hovered over
//changes h1 back to normal
//console logs "Hello World"

let question = prompt("Hello! What is your name?");
    alert("Hi, " + question + "!" + " " + "Welcome To Block 12 My Updated Personal Website");

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

//
console.log("Hello World!");