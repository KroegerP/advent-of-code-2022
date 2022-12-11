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
        switch(respMove){
            case 'X': // Rock
                moveScore = 1;
                switch(value) {
                    case 'A': // Rock
                        newScore += 3;
                        break
                    case 'B': // Paper
                        newScore += 0;
                        break
                    case 'C': // Scissors
                        newScore += 6;
                        break
                }
            break
            case 'Y': // Paper
                moveScore = 2;
                switch(value) {
                    case 'A': // Rock
                        newScore += 6;
                        break
                    case 'B': // Paper
                        newScore += 3;
                        break
                    case 'C': // Scissors
                        newScore += 0;
                        break
                }
            break
            case 'Z': // Scissors
                moveScore = 3;
                switch(value) {
                    case 'A': // Rock
                        newScore += 0;
                        break
                    case 'B': // Paper
                        newScore += 6;
                        break
                    case 'C': // Scissors
                        newScore += 3;
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