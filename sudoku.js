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
let menu = document.querySelectorAll(".a-menu");
let sections = document.querySelectorAll("section");

menu.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("clicado: ", e.target.getAttribute("data-item"));
    sections.forEach((a) => {
      console.log("existente: ", a.getAttribute("id"));
      if (a.getAttribute("id") == e.target.getAttribute("data-item")) {
        a.style.display = "block";
      } else {
        a.style.display = "none";
      }
    });
  });
});

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

