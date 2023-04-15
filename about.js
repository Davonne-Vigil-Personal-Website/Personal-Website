/*functions to swap images of interests*/

// History
function changePic() {
    let image = document.getElementById("hobbies");
    image.src = ("images/statueLiberty.jpg");
}

changePic();

function changeBack() {
    let oldImage = document.getElementById("hobbies");
    oldImage.src = ("images/egypt.jpg");
}

// Earth Science - Space
function swapPic() {
    let world = document.getElementById("space");
    world.src = ("images/space.jpg");
}

swapPic();

function swapBack() {
    let geology = document.getElementById("space");
    geology.src = ("images/earth.jpg");
}

swapBack();

//My 4 Dogs - Books
function newPic() {
    let books = document.getElementById("dogs");
   books.src = ("images/library.jpg");
}

newPic();

function oldPic() {
    let myDogs = document.getElementById("dogs");
    myDogs.src = ("images/myDogs.jpg");
}

oldPic();

//Basketball - Weather 
function tornado() {
    let favoriteSport = document.getElementById("basketball");
    favoriteSport.src = ("images/tornado.jpg");
}

tornado();

function basketball() {
    let weatherNerd = document.getElementById("basketball");
    weatherNerd.src = ("images/basketball.jpg");
}

basketball();