const images = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

const background = document.querySelector("body");

const chosenImg = Math.floor(Math.random() * images.length);

function backgroundChange() {

    background.classList.add(images[chosenImg]);

}

backgroundChange();









