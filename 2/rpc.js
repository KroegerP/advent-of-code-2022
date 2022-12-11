"use strict";
exports.__esModule = true;
var fs = require("fs");
function determineOutcome(oppMove, respMove) {
    switch (oppMove) {
        case 'A': // Rock
            return 1;
        case 'B': // Paper
            return 2;
        case 'C': // Scissors
            return 3;
    }
}
fs.readFile('./input.txt', 'utf-8', function (err, data) {
    var parsedData = data.split('\r\n');
    var openingMoves = [];
    var respMoves = [];
    var scoreArray = [];
    var scoreValue = 0;
    parsedData.forEach(function (move, index) {
        console.log("move ".concat(index, ": "), move[2]);
        openingMoves.push(move[0]);
        respMoves.push(move[2]);
    });
    console.log(openingMoves);
    openingMoves.forEach(function (value, index) {
        var newScore = 0;
        var respMove = respMoves[index];
        var moveScore = 0;
        switch (respMove) {
            case 'X': // Rock
                moveScore = 1;
                switch (value) {
                    case 'A': // Rock
                        newScore += 3;
                        break;
                    case 'B': // Paper
                        newScore += 0;
                        break;
                    case 'C': // Scissors
                        newScore += 6;
                        break;
                }
                break;
            case 'Y': // Paper
                moveScore = 2;
                switch (value) {
                    case 'A': // Rock
                        newScore += 6;
                        break;
                    case 'B': // Paper
                        newScore += 3;
                        break;
                    case 'C': // Scissors
                        newScore += 0;
                        break;
                }
                break;
            case 'Z': // Scissors
                moveScore = 3;
                switch (value) {
                    case 'A': // Rock
                        newScore += 0;
                        break;
                    case 'B': // Paper
                        newScore += 6;
                        break;
                    case 'C': // Scissors
                        newScore += 3;
                        break;
                }
                break;
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
