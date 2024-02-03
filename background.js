function randomnumber(number){
    var max = (number + 1);
    return Math.floor(Math.random() * Math.floor(max));
}

chrome.runtime.onMessage.addListener((msg, response) => {

    if (msg.name ==  "message"){
        
        const puzzles = [
            "Is it possible to put more than 40 cans of beer of diameter 1 unit and height 2.6 units in a crate that has dimensions 5 x 8 x 2.6?",
            "Place 13 chairs along the walls of a rectangular room such that each wall has the same number of chairs as the wall it faces.",
            "Imagine a 9x9 chessboard. (Like a Sudoku grid, but with alternating black and white cells). Each square has a different person standing on it. Is it possible for all 81 people to step onto a neighbouring square, so that each square again has a different person on it?"
        ];

        var random = randomnumber(2);

        response({puzzle: puzzles[random]});
    }

}); 
