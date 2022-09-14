
var turn = "X";
var playedCell = [];
var playedTime = 0;
var xWon = 0;
var oWon = 0;
var MeButton;
var PcButton
var bReset;
var faceToface
var automatique = false;

MeButton = document.getElementById("me");
MeButton.addEventListener("click", modeAutoMe);

PcButton = document.getElementById("pc");
PcButton.addEventListener("click", modeAutoPc);

bReset = document.getElementById("reset");
bReset.addEventListener("click", reset);

faceToface = document.getElementById("one");
faceToface.addEventListener("click", onetoone);

// create elements <table> and a <tbody>
var tbl = document.createElement("table");

var tblBody = document.createElement("tbody");

// cells creation
var identifier = 0;
for (var j = 0; j <= 2; j++) {
  // table row creation
  var row = document.createElement("tr");

  for (var i = 0; i <= 2; i++) {

    var cell = document.createElement("td");

    row.appendChild(cell);

    cell.setAttribute("width", 120);
    cell.setAttribute("height", 120);
    cell.setAttribute("align", "center");
    cell.setAttribute("valign", "center");
    cell.addEventListener("click", playTurn);
    cell.identifier = identifier;
    cell.classList.add("cell");

    cell.setAttribute("id", identifier);
    identifier = identifier + 1;
    cell.style.fontSize = "xxx-large";
    // cell.style.backgroundColor = "springgreen";


  }

  //row added to end of table body
  tblBody.appendChild(row);
}

// append the <tbody> inside the <table>
tbl.appendChild(tblBody);
// put <table> in the <body>

document.getElementById("tictactoe").appendChild(tbl);

var boxList = document.querySelectorAll("td")


function playTurn() {

  //1 check if the cell has been played before
  if (this.innerHTML === "X" || this.innerHTML === "O") {
    return;
  }

  playedTime = playedTime + 1;
  //2 add the new played turn to the table playedCell
  playedCell[this.identifier] = turn;
  this.innerHTML = turn;

  //3 check if the game has been won by one of the players
  verifyWinner();
}

function verifyWinner() {
  if (hasWon(turn)) {

    alert("Player: " + turn + " has won the game");

    if (turn == 'X') {
      xWon = xWon + 1;
      document.getElementById("xWon").innerHTML = `X Won:${xWon} Times`;
    }
    else {
      oWon = oWon + 1;
      document.getElementById("oWon").innerHTML = `O Won:${oWon} Times`;
    }
    // init();
    return;

  }

  if (turn === "X") turn = "O";
  else turn = "X";


  if (playedTime === 9) {
    alert("Draw game");
    init();
  }
  else {
    if (automatique == true) {
      pcTurn();
    }
  }
}

function modeAutoMe() {
  init();
  pcTurn();
  
}

function modeAutoPc() {
  init();
  turn = "O";
  pcTurn();
 
}

function pcTurn() {
  automatique = true;
  if (turn == 'X') {
    return;
  }
  else {
    auto(turn);

  }
}

function check(cellIndex) {
  if (!(playedCell[cellIndex] == null)) {
    auto(turn);
  }
  else {
    playedTime = playedTime + 1;
    //2 add the new played turn to the table playedCell
    playedCell[cellIndex] = turn;
    boxList[cellIndex].innerHTML = turn;
    verifyWinner();
  }
}

function random() {
  return Math.floor(Math.random() * 9);
}
function RandArray(array){
  var rand = Math.random()*array.length | 0;
  var rValue = array[rand];
  return rValue;
}


function auto(turn) {

  if (automatique == true) {
    let i;
    i = random();

    if (playedCell[4] == null) {
      i = 4;
    }
    if(playedCell[4]=='X')
    {
      if(playedCell[0]==null || playedCell[2]==null || playedCell[6]==null || playedCell[8]==null)
      {
        var randomArry = [0,2,6,8];
      i = RandArray(randomArry);
      }
    }

    if (playedCell[0] === 'X' && playedCell[2] === 'X' && playedCell[1] == null) {
      i = 1;
    }
    else if (playedCell[6] === 'X' && playedCell[8] === 'X' && playedCell[7] == null) {
      i = 7;
    }
    else if (playedCell[0] === 'X' && playedCell[6] === 'X' && playedCell[3] == null) {
      i = 3;
    }
    else if (playedCell[2] === 'X' && playedCell[8] === 'X' && playedCell[5] == null) {
      i = 5;
    }
    else if (playedCell[0] === 'X' && playedCell[1] === 'X' && playedCell[2] == null) {
      i = 2;
    }
    else if (playedCell[1] === 'X' && playedCell[2] === 'X' && playedCell[0] == null) {
      i = 0;
    }
    else if (playedCell[3] === 'X' && playedCell[4] === 'X' && playedCell[5] == null) {
      i = 5;
    }
    else if (playedCell[4] === 'X' && playedCell[5] === 'X' && playedCell[3] == null) {
      i = 3;
    }
    else if (playedCell[6] === 'X' && playedCell[7] === 'X' && playedCell[8] == null) {
      i = 8;
    }
    else if (playedCell[7] === 'X' && playedCell[8] === 'X' && playedCell[6] == null) {
      i = 6;
    }
    else if (playedCell[0] === 'X' && playedCell[3] === 'X' && playedCell[6] == null) {
      i = 6;
    }
    else if (playedCell[3] === 'X' && playedCell[6] === 'X' && playedCell[0] == null) {
      i = 0;
    }
    else if (playedCell[1] === 'X' && playedCell[4] === 'X' && playedCell[7] == null) {
      i = 7;
    }
    else if (playedCell[4] === 'X' && playedCell[7] === 'X' && playedCell[1] == null) {
      i = 1;
    }
    else if (playedCell[2] === 'X' && playedCell[5] === 'X' && playedCell[8] == null) {
      i = 8;
    }
    else if (playedCell[5] === 'X' && playedCell[8] === 'X' && playedCell[2] == null) {
      i = 2;
    }
    else if (playedCell[0] === 'X' && playedCell[8] === 'X' && playedCell[4] == null) {
      i = 4;
    }
    else if (playedCell[0] === 'X' && playedCell[4] === 'X' && playedCell[8] == null) {
      i = 8;
    }
    else if (playedCell[4] === 'X' && playedCell[8] === 'X' && playedCell[0] == null) {
      i = 0;
    }
    else if (playedCell[2] === 'X' && playedCell[6] === 'X' && playedCell[4] == null) {
      i = 4;
    }
    else if (playedCell[2] === 'X' && playedCell[4] === 'X' && playedCell[6] == null) {
      i = 6;
    }
    else if (playedCell[4] === 'X' && playedCell[6] === 'X' && playedCell[2] == null) {
      i = 2;
    }
   

    if (playedCell[0] === 'O' && playedCell[2] === 'O' && playedCell[1] == null) {
      i = 1;
    }
    else if (playedCell[6] === 'O' && playedCell[8] === 'O' && playedCell[7] == null) {
      i = 7;
    }
    else if (playedCell[0] === 'O' && playedCell[6] === 'O' && playedCell[3] == null) {
      i = 3;
    }
    else if (playedCell[2] === 'O' && playedCell[8] === 'O' && playedCell[5] == null) {
      i = 5;
    }
    else if (playedCell[0] === 'O' && playedCell[1] === 'O' && playedCell[2] == null) {
      i = 2;
    }
    else if (playedCell[1] === 'O' && playedCell[2] === 'O' && playedCell[0] == null) {
      i = 0;
    }
    else if (playedCell[3] === 'O' && playedCell[4] === 'O' && playedCell[5] == null) {
      i = 5;
    }
    else if (playedCell[4] === 'O' && playedCell[5] === 'O' && playedCell[3] == null) {
      i = 3;
    }
    else if (playedCell[6] === 'O' && playedCell[7] === 'O' && playedCell[8] == null) {
      i = 8;
    }
    else if (playedCell[7] === 'O' && playedCell[8] === 'O' && playedCell[6] == null) {
      i = 6;
    }
    else if (playedCell[0] === 'O' && playedCell[3] === 'O' && playedCell[6] == null) {
      i = 6;
    }
    else if (playedCell[3] === 'O' && playedCell[6] === 'O' && playedCell[0] == null) {
      i = 0;
    }
    else if (playedCell[1] === 'O' && playedCell[4] === 'O' && playedCell[7] == null) {
      i = 7;
    }
    else if (playedCell[4] === 'O' && playedCell[7] === 'O' && playedCell[1] == null) {
      i = 1;
    }
    else if (playedCell[2] === 'O' && playedCell[5] === 'O' && playedCell[8] == null) {
      i = 8;
    }
    else if (playedCell[5] === 'O' && playedCell[8] === 'O' && playedCell[2] == null) {
      i = 2;
    }
    else if (playedCell[0] === 'O' && playedCell[8] === 'O' && playedCell[4] == null) {
      i = 4;
    }
    else if (playedCell[0] === 'O' && playedCell[4] === 'O' && playedCell[8] == null) {
      i = 8;
    }
    else if (playedCell[4] === 'O' && playedCell[8] === 'O' && playedCell[0] == null) {
      i = 0;
    }
    else if (playedCell[2] === 'O' && playedCell[6] === 'O' && playedCell[4] == null) {
      i = 4;
    }
    else if (playedCell[2] === 'O' && playedCell[4] === 'O' && playedCell[6] == null) {
      i = 6;
    }
    else if (playedCell[4] === 'O' && playedCell[6] === 'O' && playedCell[2] == null) {
      i = 2;
    }
    check(i);
  }
  
}

function onetoone() {
  init();
  automatique = false;
  
    
}

function hasWon(play) {

  if (playedCell[0] === play && playedCell[1] === play && playedCell[2] === play) {
    line(0, 1, 2);
    return true;
  }

  if (playedCell[3] === play && playedCell[4] === play && playedCell[5] === play) {
    line(3, 4, 5);
    return true;
  }

  if (playedCell[6] === play && playedCell[7] === play && playedCell[8] === play) {
    line(6, 7, 8);
    return true;
  }

  if (playedCell[0] === play && playedCell[3] === play && playedCell[6] === play) {
    line(0, 3, 6);
    return true;
  }

  if (playedCell[1] === play && playedCell[4] === play && playedCell[7] === play) {
    line(1, 4, 7);
    return true;
  }

  if (playedCell[2] === play && playedCell[5] === play && playedCell[8] === play) {
    line(2, 5, 8);
    return true;
  }

  if (playedCell[0] === play && playedCell[4] === play && playedCell[8] === play) {
    line(0, 4, 8);
    return true;
  }

  if (playedCell[2] === play && playedCell[4] === play && playedCell[6] === play) {
    line(2, 4, 6);
    return true;
  }

  return false;
}
function reset(){
  init();
  xWon=0;
  oWon=0;
  document.getElementById("xWon").innerHTML = `X Won:${xWon} Times`;
  document.getElementById("oWon").innerHTML = `O Won:${oWon} Times`;
}

function init() {

  playedTime = 0;
  turn = "X";
  for(let k=0;k<9;k++){
    document.getElementById(k).style.backgroundColor = "#00b4d8";
  }
  playedCell = [];
  var allCells = document.getElementsByClassName("cell");
  for (let item of allCells) {
    item.innerHTML = "";
  }
}

function line(x, y, z) {
  document.getElementById(x).style.backgroundColor = "red";
  document.getElementById(y).style.backgroundColor = "red";
  document.getElementById(z).style.backgroundColor = "red";
}
