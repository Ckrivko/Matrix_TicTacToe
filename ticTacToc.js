function ticTacToc(moves) {

    let dashBoard = [["false", "false", "false"],
    ["false", "false", "false"],
    ["false", "false", "false"]];

    let player = "X";

    let isDraw = false;
    let winning = false;

    for (const move of moves) {

        let row = Number(move[0]);
        let col = Number(move[2]);


        if (dashBoard[row][col] != "false") {
            console.log("This place is already taken. Please choose another!");
            continue;

        }

        dashBoard[row][col] = player;

        isDraw = draw(dashBoard, isDraw);
        winning = win(dashBoard, player);

        if (winning) {

            console.log(`Player ${player} wins!`)
            printMatrix(dashBoard);
            break;
        }

        if (winning == false && isDraw == true) {

            console.log("The game ended! Nobody wins :(")
            printMatrix(dashBoard);
            break;
        }


        player = player === 'X' ? 'O' : 'X';
    }


    function draw(dashBoard) {

        if (!dashBoard.some(a => a.some(y => y == 'false'))) {

            return true;
        }
        return false;
    }

    function win(dashBoard, player) {


        // check horizontal
        for (let i = 0; i < dashBoard.length; i++) {

            if (dashBoard[i].every(a => a == player)) {
                return true;
            }

        }
        let text = '';

       //check vertical
        // for (let i = 0; i < dashBoard.length[0]; i++) {

        //     for (let j = 0; j < dashBoard.length; j++) {
        //         text += dashBoard[i][j];

        //     }
        //     console.log(text);
        //     if (text == `${player}${player}${player}`) {
        //         return true;
        //     }

        //     text = '';
        // }
       
       
       
        for (let col = 0; col < dashBoard.length; col++) {

            if (dashBoard[0][col] == player &&
                dashBoard[1][col] == player &&
                dashBoard[2][col] == player) {
                return true;
            }
        }

       


        //checking diagonal

        let counterTwo = dashBoard.length - 1;
        let text2 = '';

        for (let i = 0; i < dashBoard.length; i++) {

            text += dashBoard[i][i];
            text2 += dashBoard[i][counterTwo];


            counterTwo--;

        }

        if (text == `${player}${player}${player}` || text2 == `${player}${player}${player}`) {
            return true;
        }

        return false;
    }


    function printMatrix(dashBoard) {

        for (let row = 0; row < dashBoard.length; row++) {

            console.log(dashBoard[row].join("\t"));

        }

    }


}


// ticTacToc(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"])