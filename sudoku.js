let sudoku = [
  ["", "", 7, 4, 9, 1, 6, "", 5],
  [2, "", "", "", 6, "", 3, "", 9],
  ["", "", "", "", "", 7, "", 1, ""],
  ["", 5, 8, 6, "", "", "", "", 4],
  ["", "", 3, "", "", "", "", 9, ""],
  ["", "", 6, 2, "", "", 1, 8, 7],
  [9, "", 4, "", 7, "", "", "", 2],
  [6, 7, "", 8, 3, "", "", "", ""],
  [8, 1, "", "", 4, 5, "", "", ""],
];

let solucao = [
  [3, 8, 7, 4, 9, 1, 6, 2, 5],
  [2, 4, 1, 5, 6, 8, 3, 7, 9],
  [5, 6, 9, 3, 2, 7, 4, 1, 8],
  [7, 5, 8, 6, 1, 9, 2, 3, 4],
  [1, 2, 3, 7, 8, 4, 5, 9, 6],
  [4, 9, 6, 2, 5, 3, 1, 8, 7],
  [9, 3, 4, 1, 7, 6, 8, 5, 2],
  [6, 7, 5, 8, 3, 2, 9, 4, 1],
  [8, 1, 2, 9, 4, 5, 7, 6, 3],
];

let messagem = document.getElementById("mensagem");
let tab = document.getElementById("grade");

function exibeTabuleiro() {
  for (let i = 0; i <= 8; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j <= 8; j++) {
      let td = document.createElement("td");
      let input = document.createElement("input");

      input.setAttribute("id", `c${i}${j}`);
      input.setAttribute("type", "text");
      input.value = sudoku[i][j];

      input.addEventListener("input", (e) => {
        let el = e.target.getAttribute("id");
        let lin = el[1];
        let col = el[2];
        let valor = e.target.value;

        if (!valor) {
          messagem.innerHTML = "";
          input.classList.remove("certo");
          input.classList.remove("errado");
        }

        if (valor > 0 && validaJogada(lin, col, valor)) {
          input.classList.remove("errado");
          if (valor) {
            messagem.innerHTML = "";
            input.classList.add("certo");
          }
          sudoku[lin][col] = valor;
        } else if (valor > 0) {
          messagem.innerHTML = "Valor errado, tente outro número";
          input.classList.remove("certo");
          input.classList.add("errado");
        }

        finalizaJogo();
      });

      td.append(input);
      tr.append(td);
    }

    tab.append(tr);
  }
}
exibeTabuleiro();

function validaJogada(lin, col, valor) {
  if (solucao[lin][col] == valor) {
    return true;
  }
  return false;
}

let menu = document.querySelectorAll(".a-menu");
let sections = document.querySelectorAll("section");
menu.forEach((element) => {
  element.addEventListener("click", (e) => {
    sections.forEach((a) => {
      if (a.getAttribute("id") == e.target.getAttribute("data-item")) {
        a.style.display = "block";
      } else {
        a.style.display = "none";
      }
    });
  });
});

/*
    insere as verificações para saber se o número não é repetido naquela linha,
    coluna, ou quadrante.
    */

function finalizaJogo() {
  let points = 0;

  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      if (sudoku[i][j]) {
        points++;
      }
    }
  }

  if (points == 81) {
    messagem.innerHTML = "Parabéns, você finalizou tudo corretamente";
    return true;
  }
  /*
    vai verificar se todos os itens do array sudoku estão preenchidos
    */
}

// $(document).ready(
// function(){
//     for(let i=0; i<=8; i++){

//     let tr = $('<tr>');
//     for (let j=0; j<=8; j++){
//         let input = $(`<input type="text" id="c${i} ${j}" value="${array[i] [j]}">`);
//         let td = $(`<td>`)
//         td.append(input);
//         tr.append(td);

//         input.on('input',function(e) {
//                 let el = $(this);
//                 let lin = el.attr('id') [1];
//                 let col = el.attr('id') [2];
//                 let valor = el.val();
//                 if (jogadaValida(array,lin,col,valor)){
//                     array[lin] [col] = valor;
//                 }

//                else{
//                 //mensagem de erro
//                }

//                if(jogoCompleto(array)){
//                 //fim de jogo, parabéns!
//                }

//                 console.log(array);
//             }
//         )
//     }

//     $('#grade').append(tr);
//     }

//     }

// );
// function jogadaValida(array,lin,col,valor)

/*let numSelected = null;
let tileSelected = null;

let errors = 0;

let board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

let solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    setGame();
}

function setGame() {
    // Digitos 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Borda 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}*/
