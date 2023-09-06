let table = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let player = "X";
let win = false;
const winCombs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let play = (box, row) => {
    if (player === "X" && box.value !== "X" && box.value !== "O" && !win) {
        box.value = "X"
        table[row] = "X"
        check()
        turn()
        bot()
    }
}

let turn = () => {
    if (player === "X") {
        player = "O";
    } else player = "X"
}

// let bot = () => {
//     table.every(box => {
//         if (!isNaN(box) && !win) {
//             console.log(box)
//             document.querySelector("#box" + box).value = "O";
//             table[box] = "O";
//             check();
//             turn();
//             return false;
//         }else return true;
//     });
// }
let empty
let ranPlay
let bot = () => {
    empty = []
    table.forEach(box => {
        if (!isNaN(box)) {
            empty.push(box)
        }
    });
    if (!win) {
        len = 0;
        empty.every(move => {
            t = [...table]
            t[move] = "O"
            botTryWin(move)
            if (x === false) return false;
            len++
            if(len === empty.length){
                botDif()
                return false
            }
            return x
        });
    }
}
let botDif = () => {
    empty = []
    table.forEach(box => {
        if (!isNaN(box)) {
            empty.push(box)
        }
    });
    if (!win) {
        len = 0;
        empty.every(move => {
            ta = [...table]
            ta[move] = "X"
            botTryDif(move)
            if (x === false) return false;
            len++
            if(len === empty.length && rand === true){
                randPlay()
                return false
            }
            return x
        });
    }
}


let stopWin = (move) => {
    document.querySelector("#box" + move).value = "O";
    table[move] = "O";
    check();
    turn();
    console.log(table);
}
let randPlay = () => {
    ranPlay = empty[Math.floor(Math.random() * empty.length)]
    document.querySelector("#box" + ranPlay).value = "O";
    table[ranPlay] = "O"
    console.log(empty)
    check();
    turn();
}

let botTryWin = (move) => {
    let item = 0
    winCombs.every(com => {
        item++
        if (t[com[0]] === t[com[1]] && t[com[1]] === t[com[2]] && t[com[0]] === "O") {
            console.log("yes")
            stopWin(move)
            return x = false
        } else return x = true
    });
}
let botTryDif = (move) => {
    let item = 0
    winCombs.every(coms => {
        rand = true
        item++
        if (ta[coms[0]] === ta[coms[1]] && ta[coms[1]] === ta[coms[2]] && ta[coms[0]] === "X") {
            console.log("yes")
            stopWin(move)
            rand = false
            return x = false
        } else return x = true
    });
}

let check = () => {
    winCombs.forEach(comb => {
        if (table[comb[0]] === table[comb[1]] && table[comb[1]] === table[comb[2]] && table[comb[0]] === player) {
            console.log("win")
            return win = true
        }
    });
}
