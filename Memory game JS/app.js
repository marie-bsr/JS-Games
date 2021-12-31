document.addEventListener('DOMContentLoaded', () => {


    //card options

    const cardArray = [
        {
            name: 'boy',
            img: 'images/boy.jpeg'
        },
        {
            name: 'boy',
            img: 'images/boy.jpeg'
        },
        {
            name: 'cloud',
            img: 'images/cloud.svg'
        },
        {
            name: 'cloud',
            img: 'images/cloud.svg'
        },
        {
            name: 'lynx',
            img: 'images/lynx.jpeg'
        },
        {
            name: 'lynx',
            img: 'images/lynx.jpeg'
        },
        {
            name: 'navy',
            img: 'images/navy.jpeg'
        },
        {
            name: 'navy',
            img: 'images/navy.jpeg'
        },
        {
            name: 'green',
            img: 'images/green.png'
        },
        {
            name: 'green',
            img: 'images/green.png'
        },
        {
            name: 'pink',
            img: 'images/pink.png'
        },
        {
            name: 'pink',
            img: 'images/pink.png'
        },

    ]

    cardArray.sort(() => 0.5- Math.random())

    var cardsChosen =[]
    var cardsChosenId =[]
    var cardsWon =[]
    


    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')

    function createBoard(){
        for (let i = 0; i < cardArray.length; i ++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
           card.addEventListener('click', flipCard)
           grid.appendChild(card)
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if( cardsChosen[0] === cardsChosen[1]){
            alert('Les cartes sont identiques!')
            cards[optionOneId].setAttribute('src', 'images/rainbow.png')
            cards[optionTwoId].setAttribute('src', 'images/rainbow.png')
            cardsWon.push(cardsChosen)
        } else{
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Dommage...Essaye encore!')
        }
    
        cardsChosen =[]
        cardsChosenId =[]
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "Bravo, tu as gagné!"
        }

    }


    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length == 2){
            setTimeout(checkForMatch, 500)
        }


    }

    createBoard()

})