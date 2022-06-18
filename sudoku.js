let array = [
  { a1: "" },
  { b1: "" },
  { c1: "" },
  { d1: "" },
  { e1: "" },
  { f1: "" },
  { g1: "" },
  { h1: "" },
  { i1: "" },
  { a2: "" },
  { b2: "" },
  { c2: "" },
  { d2: "" },
  { e2: "" },
  { f2: "" },
  { g2: "" },
  { h2: "" },
  { i2: "" },
  { a3: "" },
  { b3: "" },
  { c3: "" },
  { d3: "" },
  { e3: "" },
  { f3: "" },
  { g3: "" },
  { h3: "" },
  { i3: "" },
  { a4: "" },
  { b4: "" },
  { c4: "" },
  { d4: "" },
  { e4: "" },
  { f4: "" },
  { g4: "" },
  { h4: "" },
  { i4: "" },
  { a5: "" },
  { b5: "" },
  { c5: "" },
  { d5: "" },
  { e5: "" },
  { f5: "" },
  { g5: "" },
  { h5: "" },
  { i5: "" },
  { a6: "" },
  { b6: "" },
  { c6: "" },
  { d6: "" },
  { e6: "" },
  { f6: "" },
  { g6: "" },
  { h6: "" },
  { i6: "" },
  { a7: "" },
  { b7: "" },
  { c7: "" },
  { d7: 5 },
  { e7: "" },
  { f7: "" },
  { g7: "" },
  { h7: "" },
  { i7: "" },
  { a8: "" },
  { b8: "" },
  { c8: "" },
  { d8: "" },
  { e8: "" },
  { f8: "" },
  { g8: "" },
  { h8: "" },
  { i8: "" },
  { a9: "" },
  { b9: "" },
  { c9: "" },
  { d9: "" },
  { e9: "" },
  { f9: "" },
  { g9: "" },
  { h9: "" },
  { i9: "" },
];

function exibeTabuleiro() {
  let tab = document.getElementById("area");
  array.map((e) => {
    let block = document.createElement("input");
    block.value = e[Object.keys(e)];
    block.classList.add("item");
    block.classList.add("l");
    block.classList.add("t");
    tab.appendChild(block);
  });
}
exibeTabuleiro();



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
