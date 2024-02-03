function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const number = getRandomInt(0,8);
function newpuzzle(){
    const puzzles = [
    "You are standing on the surface of the Earth. You walk one mile south, one mile west and one mile north. You end up exactly where you started. Where are you?",
    "Place 13 chairs along the walls of a rectangular room such that each wall has the same number of chairs as the wall it faces.",
    "Among six children, each handshake is between a boy and a girl. Each of four children shakes hands with exactly two others. Each of the other two shakes hands with exactly three others. Do these children shake hands with each other?",
    "Two objects perform the same task. One has many thousands of moving parts while the other has no moving parts. What are they?",
    "In some places in the world train tracks make a giant loop and then pass under themselves. Why?",
    "Arun and Disha played several games of table tennis. At five points during the day, Arun calculated the percentage of the games played so far that he had won. The results of these calculations were exactly 30 per cent, exactly 40 per cent, exactly 50 per cent, exactly 60 per cent and exactly 70 per cent, but not necessarily in that order.What is the smallest possible number of games they played?",
    "Which view of the 11-cube snake is incorrect?",
    "Make this equation correct just by moving the digits about: 26 = 74",
    "How many zeros does the factorial of 100 really has at the end?",
    "This is an annual ritual for the readers of this column. Fill in the gaps so the following equation makes sense 10 9 8 7 6 5 4 3 2 1 0 = 2022"
    ];
    return puzzles[number];
}
function newpuzzleimage(){
    const puzzle = [
        "Images/elonmusk.webp", 
        "Images/retangular.jpeg", 
        "Images/6 children.jpeg", 
        "Images/2objects.webp", 
        "Images/595.webp", 
        "Images/pingpong.webp" ,
        "Images/asdadsa.webp",
        "Images/equation.png",
        "Images/100.jpeg",
        "Images/fillinthegaps.png"
    ]
    return puzzle[number];
}
document.getElementById("x").innerHTML = newpuzzle();
document.getElementById("image").src = newpuzzleimage();
