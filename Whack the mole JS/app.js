const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
let result = 0;
let currentTime = timeLeft.textContent


//on ajoute de façon aléatoire la class mole a un des 9 carrés
function randomSquare(){
    square.forEach(className =>{
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id

    //https://www.youtube.com/watch?v=lhNdUVh3qCc
}

//si le click correspond à la bonne case, on gagne un point
square.forEach( id => {
    id.addEventListener('mouseup', () =>{
      if(id.id === hitPosition)  {
          result = result + 1
          score.textContent = result
      }
    })
})

function moveMole(){
let timerId = null
timerId = setInterval(randomSquare, 700)
}

function countDown(){
    currentTime --
    timeLeft.textContent = currentTime

    if(currentTime === 0){
        clearInterval(timerId)
        alert ('GAME OVER! ton score est' + result)
    }
}

let timerId = setInterval(countDown, 1000)

moveMole()

