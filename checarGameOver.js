const vencedorDisplay = document.getElementById("vencedor");

function Vencedor() {
  if (playerSelector == true) {
    gameOver = true;
    vencedorDisplay.innerText = "Vitória do Jogador O";
    vencedorDisplay.className = "";
  } else {
    gameOver = true;
    vencedorDisplay.innerText = "Vitória do Jogador X";
    vencedorDisplay.className = "";
  }
}

function gameOverFirstRow() {
  if (counter >= 5 && square0.className != "square") {
    if (
      square0.className == square1.className &&
      square0.className == square2.className
    ) {
      Vencedor();
    }
  }
}
function gameOverSecondRow() {
  if (counter >= 5 && square3.className != "square") {
    if (
      square3.className == square4.className &&
      square4.className == square5.className
    ) {
      Vencedor();
    }
  }
}
function gameOverThirdRow() {
  if (counter >= 5 && square6.className != "square") {
    if (
      square6.className == square7.className &&
      square6.className == square8.className
    ) {
      Vencedor();
    }
  }
}
function gameOverFirstColumn() {
  if (counter >= 5 && square0.className != "square") {
    if (
      square0.className == square3.className &&
      square3.className == square6.className
    ) {
      Vencedor();
    }
  }
}
function gameOverSecondColumn() {
  if (counter >= 5 && square1.className != "square") {
    if (
      square1.className == square4.className &&
      square1.className == square7.className
    ) {
      Vencedor();
    }
  }
}
function gameOverThirdColumn() {
  if (counter >= 5 && square2.className != "square") {
    if (
      square2.className == square5.className &&
      square2.className == square8.className
    ) {
      Vencedor();
    }
  }
}
function gameOverFirstDiagonal() {
  if (counter >= 5 && square0.className != "square") {
    if (
      square0.className == square4.className &&
      square0.className == square8.className
    ) {
      Vencedor();
    }
  }
}
function gameOverSecondDiagonal() {
  if (counter >= 5 && square2.className != "square") {
    if (
      square2.className == square4.className &&
      square2.className == square6.className
    ) {
      Vencedor();
    }
  }
}

function checarFim() {
  gameOverFirstRow();
  gameOverSecondRow();
  gameOverThirdRow();
  gameOverFirstColumn();
  gameOverThirdColumn();
  gameOverFirstDiagonal();
  gameOverSecondDiagonal();
}
