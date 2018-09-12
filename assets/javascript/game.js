
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
var winCount = 0; // Set win count = 0;
var guessCount;
var wordUsed = [];
var quizChoice;
var bgSound;


//====== functions =======//
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

//
//Sound function
function sound(src) {
    bgSound = document.createElement("iframe");
    bgSound.src = src;
    bgSound.setAttribute("allow", "autoplay");
    bgSound.style.display = "none";
    document.body.appendChild(bgSound);
}

//
//Alphabet function
var alphabetArray = [];
function alpha(charA, charZ) {

    var j = charA.charCodeAt(0);
    var k = charZ.charCodeAt(0);
    for (; j <= k; j++) {
        alphabetArray.push(String.fromCharCode(j));
    }
    return alphabetArray;
};
//Run once when page loaded
alpha('A', 'Z');
console.log(alphabetArray);


//
// Game Start
document.onkeyup = function (event) {
    
    var eventKeyUpper = event.key.toUpperCase(); //Turn key to upper case
    var charCodeCheck = eventKeyUpper.charCode;

    //check if the input is a alphabet
if  (event.which  >= 65 && event.which  <= 90) {
    wordUsed.push(eventKeyUpper); 

    // relate js to html
    var getMaskedArray = document.getElementById('answerArray-Text');
    var getGuessLeft = document.getElementById('guessLeftCount-Text');
    var getwinCount = document.getElementById('winCount-Text');
    var getwordUsed = document.getElementById('guessSoFar-Text');
    // mistake check counter
    var elementWrongCounter = 0;


            for (var i = 0; i < wordArray.length; i++) {
                if (eventKeyUpper == wordArray[i]) {
                    maskedArray[i] = eventKeyUpper;
                    console.log(maskedArray);
                    console.log(wordArray);
                    if (maskedArray.toString() == wordArray.toString()) {

                        alert('Good job, the answer is ' + quizChoice);
                        winCount++;

                        if (quizChoice == "MERCURY") {
                            document.getElementById("planet").src = "assets/images/mercury.jpg";
                            bgSound = sound("assets/media/mercury.mp3");
                        }
                        if (quizChoice == "VENUS") {
                            document.getElementById("planet").src = "assets/images/venus.jpg";
                            bgSound = sound("assets/media/venus.mp3");
                        }
                        if (quizChoice == "EARTH") {
                            document.getElementById("planet").src = "assets/images/earth.jpg";
                            bgSound = sound("assets/media/earth.mp3");
                        }
                        if (quizChoice == "MARS") {
                            document.getElementById("planet").src = "assets/images/mars.jpg";
                            bgSound = sound("assets/media/mars.mp3");
                        }
                        if (quizChoice == "JUPITER") {
                            document.getElementById("planet").src = "assets/images/jupitor.jpg";
                            bgSound = sound("assets/media/jupitor.mp3");
                        }
                        if (quizChoice == "SATURN") {
                            document.getElementById("planet").src = "assets/images/saturn.jpg";
                            bgSound = sound("assets/media/saturn.mp3");
                        }
                        if (quizChoice == "URANUS") {
                            document.getElementById("planet").src = "assets/images/uranus.jpg";
                            bgSound = sound("assets/media/uranus.mp3");
                        }
                        if (quizChoice == "NEPTUNE") {
                            document.getElementById("planet").src = "assets/images/neptune.jpg";
                            bgSound = sound("assets/media/neptune.mp3");
                        }
                       
                        // console.log(winCount);
                        gameStart();
                    }
                } else {
                    elementWrongCounter++;
                }
                if (elementWrongCounter == wordArray.length) {
                    --guessCount;
                    // console.log(guessCount);
                }
                if (guessCount == 0) {
                    alert('Game Over, the answer is "' + quizChoice + '". Game restart!');
                    gameStart();
                }

            }

            getMaskedArray.textContent = maskedArray;
            getGuessLeft.textContent = guessCount;
            getwinCount.textContent = winCount;
            getwordUsed.textContent = wordUsed;
        }
};
