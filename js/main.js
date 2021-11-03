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

let cards = document.getElementsByClassName("gameCard");
for(let card of cards) {
    card.onclick = function() {
        this.innerHTML = `<img src="img/return_${randomList[this.id]}.png" alt="" class="return">`
    };
}