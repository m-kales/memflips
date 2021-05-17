document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'beaver',
            img: './assets/beaver.svg'
        },
        {
            name: 'beaver',
            img: './assets/beaver.svg'
        },
        {
            name: 'cheetah',
            img: './assets/cheetah.svg'
        },
        {
            name: 'cheetah',
            img: './assets/cheetah.svg'
        },
        {
            name: 'chicken',
            img: './assets/chicken.svg'
        },
        {
            name: 'chicken',
            img: './assets/chicken.svg'
        },
        {
            name: 'crocodile',
            img: './assets/crocodile.svg'
        },
        {
            name: 'crocodile',
            img: './assets/crocodile.svg'
        },
        {
            name: 'dog',
            img: './assets/dog.svg'
        },
        {
            name: 'dog',
            img: './assets/dog.svg'
        },
        {
            name: 'duck',
            img: './assets/duck.svg'
        },
        {
            name: 'duck',
            img: './assets/duck.svg'
        },
        {
            name: 'horse',
            img: './assets/horse.svg'
        },
        {
            name: 'horse',
            img: './assets/horse.svg'
        },
        {
            name: 'ladybug',
            img: './assets/ladybug.svg'
        },
        {
            name: 'ladybug',
            img: './assets/ladybug.svg'
        },
        {
            name: 'lion',
            img: './assets/lion.svg'
        },
        {
            name: 'lion',
            img: './assets/lion.svg'
        },
        {
            name: 'panda',
            img: './assets/panda.svg'
        },
        {
            name: 'panda',
            img: './assets/panda.svg'
        },
        {
            name: 'parrot',
            img: './assets/parrot.svg'
        },
        {
            name: 'parrot',
            img: './assets/parrot.svg'
        },
        {
            name: 'pig',
            img: './assets/pig.svg'
        },
        {
            name: 'pig',
            img: './assets/pig.svg'
        },
        {
            name: 'rabbit',
            img: './assets/rabbit.svg'
        },
        {
            name: 'rabbit',
            img: './assets/rabbit.svg'
        },
        {
            name: 'sheep',
            img: './assets/sheep.svg'
        },
        {
            name: 'sheep',
            img: './assets/sheep.svg'
        },
        {
            name: 'snail',
            img: './assets/snail.svg'
        },
        {
            name: 'snail',
            img: './assets/snail.svg'
        },
        {
            name: 'turtle',
            img: './assets/turtle.svg'
        },
        {
            name: 'turtle',
            img: './assets/turtle.svg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', './assets/blank.svg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', './assets/blank.svg');
            cards[optionTwoId].setAttribute('src', './assets/blank.svg');
            /*alert('You have clicked the same image.')*/
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            /*alert('You found a match.');*/
            cards[optionOneId].setAttribute('src', './assets/white.svg');
            cards[optionTwoId].setAttribute('src', './assets/white.svg');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', './assets/blank.svg');
            cards[optionTwoId].setAttribute('src', './assets/blank.svg');
            /*alert('Try again.');*/
        }
        
        /*if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', './assets/white.svg');
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', './assets/blank.svg');
            cards[optionTwoId].setAttribute('src', './assets/blank.svg');
            alert('Sorry, try again')
        }*/
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);  
        }
    }
    createBoard();
})