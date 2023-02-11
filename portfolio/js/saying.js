const sayings = [
    {
        saying: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",

    },
    {
        saying: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
    },
    {
        saying: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
    },
    {
        saying: "Life is ours to be spent, not to be saved.",
        author: "D. H. Lawrence",
    },
    {
        saying: "Life is made of ever so many partings welded together.",
        author: "Charles Dickens",
    },
    {
        saying: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        saying: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky",
    },
    {
        saying: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        saying: "Dreaming, after all, is a form of planning.",
        author: "Gloria Steinem",
    },
    {
        saying: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
];

const saying = document.querySelector("#sayings #saying");
const author = document.querySelector("#sayings #author");

const number = sayings[Math.floor(Math.random() * 10)];

saying.classList.add("sayingfont");
author.classList.add("sayingfont");
saying.innerText = number.saying + "\n";
author.innerText = "-" + number.author;

const box = document.querySelector("#sayings");

function hover() {
    saying.classList.remove("toto");
    author.classList.remove("toto");
}

function unhover() {
    saying.classList.add("toto");
    author.classList.add("toto");
}

box.addEventListener("mouseover", hover);
box.addEventListener("mouseout", unhover);

