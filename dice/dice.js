

function getRandom() {
    return  (Math.floor(Math.random(6) * 6))  + 1   ;
}



// randomNum1 = getRandom();
// randomNum2 = getRandom();
// var randomNum1 =  (Math.floor(Math.random(6) * 6))  + 1   ;
// var randomNum2 =  (Math.floor(Math.random(6) * 6))  + 1   ;

// var imageLink =  "images/dice" + randomNum+ ".png";


// console.log(randomNum);








// console.log(imageLink);




document.querySelector(".img1").src = "images/dice" + getRandom() + ".png";

document.querySelector(".img2").src = "images/dice" + getRandom() + ".png";

