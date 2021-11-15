let randomList = [];
let liste = ['red', 'blue', 'green', 'yellow', 'pink', 'cyan', 'orange', 'purple','black','brown','dark_green','lime','magenta','white'];
let timeOut;
// Generate a random array with value in liste
function doRandom() {
    for(i = 0; i < 6; i++) {
        let number = Math.floor(Math.random() * liste.length);
        randomList.push(liste[number]);
        randomList.push(liste[number]);
        liste.splice(number, 1);
    };
    arrayShuffle(randomList);
   return randomList;
};
// Shuffle the random array
function arrayShuffle(array) {
    var lenght = array.length, index, random;
    while (0 !== lenght) {
      random = Math.floor(Math.random() * lenght);
      lenght -= 1;
      index = array[lenght];
      array[lenght] = array[random];
      array[random] = index;
    }
    return array;
  };
// reset all the function, html and timer when game is end
function endGame() {
    let endVerify = document.getElementById("endVerify")
    endVerify.setAttribute("class","end");
    document.getElementById("time").innerHTML = "";
    let startBtn = document.getElementById("Start");
    startBtn.style.display = "block";
    let cardsVisibility = document.getElementsByClassName("gameCard")
    for(let card of cardsVisibility) {
        card.style.display = "none";
    }
    let cardsReturn = document.getElementsByClassName("OK")
    let gameCards = document.getElementsByClassName("gameCard")
    for(i = 0; 0 !== cardsReturn.length; i++) {
        gameCards[i].removeChild(cardsReturn[0]);
    }
    randomList = []
    liste = ['red', 'blue', 'green', 'yellow', 'pink', 'cyan', 'orange', 'purple','black','brown','dark_green','lime','magenta','white']
    setTimer = function () {
        var Minute = 60 * 1,
            display = document.querySelector('#time');
        startTimer(Minute, display);
    };
}

let setTimer = function () {
    var Minute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(Minute, display);
};

// ======================================= START GAME =========================================================
function start() {
    let startBtn = document.getElementById("Start");
    startBtn.style.display = "none";
    doRandom();
    let cardsVisibility = document.getElementsByClassName("gameCard")
    for(let card of cardsVisibility) {
        card.style.display = "block"
    }
    setTimer();
}
// ======================================= ON CLICK CARD =======================================================
let cards = document.getElementsByClassName("gameCard");
for(let card of cards) {
    card.onclick = function() {
        // when click on 3 cards if 2 before are false, hide the 2 last cards
        clearTimeout(timeOut);
        // add card in div when click on cards
        this.innerHTML = `<img src="img/return_${randomList[this.id]}.png" alt="" class="return">`
            this.setAttribute("class","gameCard waiting");

            // If only one card has return
        let waiting = document.getElementsByClassName("waiting")
        let returned = document.getElementsByClassName("return");
        if(waiting[1] === undefined) {

        }
        // If return cards is equal, attribute class to cards to confirm
        else if(randomList[waiting[0].id] === randomList[waiting[1].id]) {
            waiting[0].setAttribute("class","gameCard");
            waiting[0].setAttribute("class","gameCard");
            returned[0].setAttribute("class","OK");
            returned[0].setAttribute("class","OK");
        } else {
            // else return to standard position with delay
            function wrongAnswer() {
                waiting[0].removeChild(returned[0]);
                waiting[1].removeChild(returned[0]);
                waiting[0].setAttribute("class","gameCard");
                waiting[0].setAttribute("class","gameCard");
                }
            timeOut = setTimeout(function() {
                wrongAnswer(); 
            }, 500);
        }

        let cardsReturn = document.getElementsByClassName("OK");

        if(cardsReturn.length === 13) {
            function endingGame() {
            alert("Vous avez gagné !")
            endGame()
            }
            setTimeout(function() {
                endingGame();     
             }, 100);
        }
    }
}
// =============================================== TIMER =========================================================
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    let endVerify = document.getElementById("endVerify")
    endVerify.setAttribute("class","OK");
    setInterval(function () {
        let isOk = document.getElementsByClassName("OK").length
        if(isOk > 0 && isOk < 12) {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            let cardsReturn = document.getElementsByClassName("OK");
            if(cardsReturn.length < 12) {
                display.textContent = minutes + ":" + seconds;
                if (--timer < 0) {
                    cardsReturn = 12;
                    alert("Vous avez perdu")
                    endGame()
                }
            }
        }
    }, 1000);
}
