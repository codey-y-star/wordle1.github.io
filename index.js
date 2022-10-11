import {DICT} from "./dict.js"

const noOfGuess = 6;
let remGuess = noOfGuess;
let currentGuess = [];
let nextLetter = 0;
let targetWord = DICT[Math.floor(Math.random()*DICT.length)];
console.log(targetWord);

function createBoard()
{
    let board = document.getElementById("game-container");
    for(let i=0;i<noOfGuess;i++)
    {
        let row = document.createElement("div");
        row.className="letter-row";
        for(let j=0;j<5;j++)
        {
            let box = document.createElement("div");
            box.className="letter-box";
            row.appendChild(box);
        }
        board.appendChild(row);
    }
}

createBoard();

document.addEventListener("keyup",(e)=>{
    if(remGuess===0)
    {
        return;
    }
    let pressedKey = String(e.key);
    if(pressedKey==="Backspace" && nextLetter!==0)
    {
        deleteLetter();
        return;
    }
    if(pressedKey==="Enter")
    {
        checkGuess();
        return;
    }
    let found = pressedKey.match(/[a-z]/gi);
    if(!found||found.length>1){return;}
    else{insertLetter(pressedKey);}
});

function insertLetter(pressedKey)
{
    if(nextLetter===5){return;}
    pressedKey=pressedKey.toLowerCase();
    let row = document.getElementsByClassName("letter-row")[6-remGuess];
    let box = row.children[nextLetter];
    box.textContent=pressedKey;
    box.classList.add("filled-box");
    currentGuess.push(pressedKey);
    nextLetter+=1;
}

function deleteLetter()
{
    let row = document.getElementsByClassName("letter-row")[6-remGuess];
    let box=row.children[nextLetter-1];
    box.textContent="";
    box.classList.remove("filled-box");
    currentGuess.pop();
    nextLetter-=1;
}

function checkGuess()
{
    let row = document.getElementById("letter-row")[6-remGuess];
    let guessString="";
    
}