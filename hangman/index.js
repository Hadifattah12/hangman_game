


  const letters = "abcdefghijklmnopqrstuvwxyz";
const lettersArry = Array.from(letters);
const lettersContainer = document.querySelector(".letters");

lettersArry.forEach(letter => {
  const span = document.createElement("span");
  const theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});

const words = {
  programming: ["php", "javascript", "thakns", "scala", "csharp", "mysql", "python",],
  movies: ["prestige", "inception", "parasite", "interstellar", "whiplash", "memento", "firstoffurios", "up"],
  people: ["ghina","AlbertEinstein", "hitchcock", "Alexendra", "cleopatra", "MahatmaGandhi","hadi"],
  countries: ["lebanon", "syria", "yemen", "egypt", "bahrain", "qatar"],
  fruit:["banana","tomato","mango","blueberry","grape","peach","avocado","melon"]
  
};

const allkeys = Object.keys(words);
const randompronum = Math.floor(Math.random() * allkeys.length);
const randompropName = allkeys[randompronum];
const randompropValue = words[randompropName];
const randomvaluenumber = Math.floor(Math.random() * randompropValue.length);
const randomvaluevalue = randompropValue[randomvaluenumber];

document.querySelector(".game-info .category span").innerHTML = randompropName;

const letterGuesscontainer = document.querySelector(".letters-guess");
const letterAndSpace = Array.from(randomvaluevalue);

letterAndSpace.forEach(letter => {
  const emptySpan = document.createElement("span");
  if (letter === "") {
    emptySpan.className = "with-space";
    }
  letterGuesscontainer.appendChild(emptySpan);
  });

const guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttemots=0;
let theDraw= document.querySelector(".hangman-draw");


document.addEventListener("click", (e) => {
  let theStatus=false;
if (e.target.className === "letter-box") {
 e.target.classList.add("clicked");
 const theClickedLetter = e.target.innerHTML.toLowerCase();
const theChosenWord =Array.from(randomvaluevalue.toLowerCase());
theChosenWord.forEach((wordLetter, wordIndex) => {

if(theClickedLetter === wordLetter){

  theStatus=true;

guessSpans.forEach((span, spanIndex) => {
if(wordIndex === spanIndex){
span.innerHTML=wordLetter;
}
});
}

});
if (theStatus !==true){
wrongAttemots++;
theDraw.classList.add(`wrong-${wrongAttemots}`);
document.getElementById("fail").play();

if(wrongAttemots===8){
  endGame();
  lettersContainer.classList.add("finished");
}
}
winGame();
  document.getElementById("success").play();
}
});

function endGame(){
  let div =document.createElement("div");
  let divtext=document.createTextNode(`game over, the word is ${randomvaluevalue}`);
  div.appendChild(divtext);
  div.className="popup";
  document.body.appendChild(div);
}
function winGame(){
  let di =document.createElement("div");
  let divtex=document.createTextNode(`greate you win`);
  div.appendChild(divtex);
  div.className="popupf";
  document.body.appendChild(di);
}
  



