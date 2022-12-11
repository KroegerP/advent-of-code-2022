import * as fs from 'fs';

function determineOutcome(oppMove: string, respMove: string) {
    switch(oppMove) {
        case 'A': // Rock
            return 1;
        case 'B': // Paper
            return 2;
        case 'C': // Scissors
            return 3;
    }
}


fs.readFile('./input.txt', 'utf-8', (err, data) => {
    const parsedData = data.split('\r\n');
    var openingMoves: string[] = [];
    var respMoves: string[] = [];
    var scoreArray: number[] = [];
    var scoreValue: number = 0;
    parsedData.forEach((move, index) => {
        console.log(`move ${index}: `, move[2]);
        openingMoves.push(move[0]);
        respMoves.push(move[2]);
    });
    console.log(openingMoves);
    openingMoves.forEach((value, index) => {
        let newScore: number = 0;
        let respMove: string = respMoves[index];
        let moveScore: number = 0;
        switch(value){
            case 'A': // Rock
                switch(respMove) {
                    case 'X': // Rock - Lose
                        moveScore = 3; // Scissors
                        newScore += 0;
                        break
                    case 'Y': // Paper - Draw
                        moveScore = 1; // Rock
                        newScore += 3;
                        break
                    case 'Z': // Scissors - Win
                        newScore += 6;
                        moveScore = 2; // Paper
                        break
                }
            break
            case 'B': // Paper
                switch(respMove) {
                    case 'X': // Rock
                        newScore += 0;
                        moveScore = 1; // Rock
                        break
                    case 'Y': // Paper
                        moveScore = 2; // Paper
                        newScore += 3;
                        break
                    case 'Z': // Scissors
                        moveScore = 3; // Paper
                        newScore += 6;
                        break
                }
            break
            case 'C': // Scissors
                switch(respMove) {
                    case 'X': // Rock
                        moveScore = 2; // Paper
                        newScore += 0;
                        break
                    case 'Y': // Paper
                        moveScore = 3; // Scissors
                        newScore += 3;
                        break
                    case 'Z': // Scissors
                        newScore += 6;
                        moveScore = 1; // Rock
                        break
                }
            break
        }
        newScore = newScore + moveScore;
        console.log('NEW SCORE: ', newScore);
        scoreArray.push(newScore);
        scoreValue += newScore;
        console.log(scoreValue);
    });
    // const sumOfArray
    console.log(scoreValue);
});

console.log("Waiting");