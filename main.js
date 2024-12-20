"use strict"
/* copyright rosemary, venice, & alanna */


/* document.getElementById("").addEventListener
("EVENT", FUNCTION) */
document.getElementById("newWord").addEventListener("click", newWord);
document.getElementById("buttons").addEventListener("click", howtoplay);
document.getElementById("q").addEventListener("click", type);
document.getElementById("w").addEventListener("click", type);
document.getElementById("e").addEventListener("click", type);
document.getElementById("r").addEventListener("click", type);
document.getElementById("t").addEventListener("click", type);
document.getElementById("y").addEventListener("click", type);
document.getElementById("u").addEventListener("click", type);
document.getElementById("i").addEventListener("click", type);
document.getElementById("o").addEventListener("click", type);
document.getElementById("p").addEventListener("click", type);
document.getElementById("a").addEventListener("click", type);
document.getElementById("s").addEventListener("click", type);
document.getElementById("d").addEventListener("click", type);
document.getElementById("f").addEventListener("click", type);
document.getElementById("g").addEventListener("click", type);
document.getElementById("h").addEventListener("click", type);
document.getElementById("j").addEventListener("click", type);
document.getElementById("k").addEventListener("click", type);
document.getElementById("l").addEventListener("click", type);
document.getElementById("z").addEventListener("click", type);
document.getElementById("x").addEventListener("click", type);
document.getElementById("c").addEventListener("click", type);
document.getElementById("v").addEventListener("click", type);
document.getElementById("b").addEventListener("click", type);
document.getElementById("n").addEventListener("click", type);
document.getElementById("m").addEventListener("click", type);
document.getElementById("enter").addEventListener("click", check);
document.getElementById("backspace").addEventListener("click", backspace);

/* array to pick words from */
const word = ["array", "abide", "about"];

/* functions below */
function newWord(){
    let element = Math.floor(Math.random()*3);
    let tempWord = word[element];
    console.log("found new word");
    return tempWord;
}
newWord();

function howtoplay(){
    confirm("You have 6 chances to guess a five letter word, Must be valid word, Green is for letters that are in the correct spot, Yellow is for letters that are in the wrong spot, White is for letters that incorrect");
}

function type(letter){
    // take new letter
    letter = letter;
    // find next box to type in
    let spot = findSpot();
    // type input
    document.getElementById(spot).innerHTML = letter;
    // return
    return;
}

function check(){
    // run through each row to check if letter is green, yellow, or grey
    // if all green, tell user they got the word, and to press the try again button
    // if not all green & they're past boardrow 6, then they lose and can try again
}

function backspace(){
    // remove last placed character (if letter = null kind of statement)
    let spot = findSpot();
    spot = spot--;
    document.getElementById(spot).innerHTML = null;
    return;
}

function findSpot(){
    let box = "";
    let element = 0;
    //run through all rows on Jurdle until you find null,return placement
    do{
        element++;
        box = document.getElementById("column" + element);
    } while (box != null)
    return box;
}
