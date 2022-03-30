let square0 = document.getElementById("0");
let square1 = document.getElementById("1");
let square2 = document.getElementById("2");
let square3 = document.getElementById("3");
let square4 = document.getElementById("4");
let square5 = document.getElementById("5");
let square6 = document.getElementById("6");
let square7 = document.getElementById("7");
let square8 = document.getElementById("8");

let squares = [
  square0,
  square1,
  square2,
  square3,
  square4,
  square5,
  square6,
  square7,
  square8,
];

let player = document.getElementById("jogador");

const pieces = {
  x: "classX",
  o: "classO",
};

let playerSelector = true;

function nextPlayer() {
  player.classList.add(pieces.x);
  if (playerSelector) {
    player.classList.add(pieces.x);
    player.classList.remove(pieces.o);
  } else {
    player.classList.remove(pieces.x);
    player.classList.add(pieces.o);
  }
}

let counter = 0;

function addCounter() {
  counter++;
}

let gameOver = false;

function playerClick() {
  const target = event.target;
  const classes = target.className;

  if (!gameOver) {
    if (classes.includes(pieces.x) || classes.includes(pieces.o)) {
      console.log("ja está preenchido");
    } else {
      target.classList.add(playerSelector ? pieces.x : pieces.o);
      playerSelector = !playerSelector;
      addCounter();
      nextPlayer();
      checarFim();
    }
  }
}

function reset() {
  squares.forEach((s) => {
    s.classList.remove(pieces.x);
    s.classList.remove(pieces.o);
  });
  playerSelector = true;
  vencedorDisplay.innerText = "";
  vencedorDisplay.className = "hide";
  counter = 0;
  nextPlayer();
  gameOver = false;
}
