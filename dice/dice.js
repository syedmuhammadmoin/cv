

function getRandom() {
    return  (Math.floor(Math.random(6) * 6))  + 1   ;
}


document.querySelector(".img1").src = "images/dice" + getRandom() + ".png";

document.querySelector(".img2").src = "images/dice" + getRandom() + ".png";

