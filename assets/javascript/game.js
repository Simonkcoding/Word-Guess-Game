
//declare quiz
var wordList = [
    "MERCURY",
    "VENUS",
    "EARTH",
    "MARS",
    "JUPITER",
    "SATURN",
    "URANUS",
    "NEPTUNE"
];

//declare quiz alphabet array and masked array
var wordArray = [];
var maskedArray = [];
var winCount;
var guessCount;
var wordUsed = [];
var quizChoice;
var bgSound;


//
// Program Start function
function gameStart() {
    //Create random choice
    quizChoice = wordList[Math.floor(Math.random() * wordList.length)];
    // Generate Word array   
    wordArray = quizChoice.split("");
    //reset masked array
    maskedArray.length = 0;
    //Generate Masked array
    var n;
    for (n = 0; n < wordArray.length; n++) {
        maskedArray[n] = "_";
    }
    //reset guess count to #
    guessCount = 9;
    //reset guess
    wordUsed = [];
    
};

//Run once when page loaded
gameStart();
// Set win count = 0;
winCount = 0;
//Sound function
function sound(src) {
    bgSound = document.createElement("iframe");
    bgSound.src = src;
    bgSound.setAttribute("allow","autoplay");
    bgSound.style.display = "none";
    document.body.appendChild(bgSound);
}

// Game Start
document.onkeyup = function (event) {
//Turn key to upper case
var eventKeyUpper = event.key.toUpperCase();
    wordUsed.push(eventKeyUpper);
    console.log(wordUsed);
    var elementWrongCounter = 0;
    var i;
    for (i = 0; i < wordArray.length; i++) {
        if (eventKeyUpper == wordArray[i]) {
            maskedArray[i] = eventKeyUpper;
            console.log(maskedArray);
            console.log(wordArray);
            if (maskedArray.toString() == wordArray.toString()) {
                alert('Good job, the answer is '+ quizChoice);
                winCount++;
                if(quizChoice=="MERCURY"){
                    document.getElementById("planet").src = "assets/images/mercury.jpg";
                    bgSound = sound("assets/media/mercury.mp3");
                }
                if(quizChoice=="VENUS"){
                    document.getElementById("planet").src = "assets/images/venus.jpg";
                    bgSound = sound("assets/media/venus.mp3");
                }
                if(quizChoice== "EARTH"){
                    document.getElementById("planet").src = "assets/images/earth.jpg";
                    bgSound = sound("assets/media/earth.mp3");
                }
                if(quizChoice== "MARS"){
                    document.getElementById("planet").src = "assets/images/mars.jpg";
                    bgSound = sound("assets/media/mars.mp3");
                }
                if(quizChoice=="JUPITER"){
                    document.getElementById("planet").src = "assets/images/jupitor.jpg";
                    bgSound = sound("assets/media/jupitor.mp3");
                }
                if(quizChoice== "SATURN"){
                    document.getElementById("planet").src = "assets/images/saturn.jpg";
                    bgSound = sound("assets/media/saturn.mp3");
                }
                if(quizChoice== "URANUS"){
                    document.getElementById("planet").src = "assets/images/uranus.jpg";
                    bgSound = sound("assets/media/uranus.mp3");
                }
                if(quizChoice=="NEPTUNE"){
                    document.getElementById("planet").src = "assets/images/neptune.jpg";
                    bgSound = sound("assets/media/neptune.mp3");
                }
                console.log(winCount);
                gameStart();    
            }
        } else {
            elementWrongCounter++;
        }
        if (elementWrongCounter == wordArray.length) {
            --guessCount;
            console.log(guessCount);
        }
        if (guessCount == 0) {
            alert('Game Over, the answer is "'+ quizChoice +'". Game restart!');
            gameStart();
        }

    }


    var getMaskedArray = document.getElementById('answerArray-Text');
    var getGuessLeft = document.getElementById('guessLeftCount-Text');
    var getwinCount = document.getElementById('winCount-Text');
    var getwordUsed = document.getElementById('guessSoFar-Text');

    getMaskedArray.textContent = maskedArray;
    getGuessLeft.textContent = guessCount;
    getwinCount.textContent = winCount;
    getwordUsed.textContent = wordUsed;
};
