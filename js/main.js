let randomList = [];
let liste = ['red', 'blue', 'green', 'yellow', 'pink', 'cyan', 'orange', 'purple'];

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
  }

function doRandom() {
    for(i = 0; i < 6; i++) {
        let number = Math.floor(Math.random() * liste.length);
        randomList.push(liste[number]);
        randomList.push(liste[number]);
        liste.splice(number, 1);
    };
    arrayShuffle(randomList);
   return randomList;
}
doRandom();
console.log(randomList);

let cards = document.getElementsByClassName("gameCard");
for(let card of cards) {
    card.onclick = function() {
        this.innerHTML = `<img src="img/return_${randomList[this.id]}.png" alt="" class="return">`
        let inQueue = document.getElementById("waiting")
            this.setAttribute("class","gameCard waiting");


        let waiting = document.getElementsByClassName("waiting")
        let returned = document.getElementsByClassName("return");
        console.log(waiting);
        console.log(returned);
        if(waiting[1] === undefined) {

        }
        else if(randomList[waiting[0].id] === randomList[waiting[1].id]) {
            waiting[0].setAttribute("class","gameCard");
            waiting[0].setAttribute("class","gameCard");
            returned[0].setAttribute("class","OK");
            returned[0].setAttribute("class","OK");
        } else {
            waiting[0].removeChild(returned[0]);
            waiting[1].removeChild(returned[0]);
            waiting[0].setAttribute("class","gameCard");
            waiting[0].setAttribute("class","gameCard");
        }
    }
}