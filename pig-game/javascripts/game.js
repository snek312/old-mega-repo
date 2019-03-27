
let
    scores = [0, 0],
    scoreRound = 0,
    activePlayer = 0;

const
    player0 = getElement('id-player0'),
    player1 = getElement('id-player1');


getElement('id-newGame').addEventListener('click', () => {
    newGame();
})

getElement('id-roll').addEventListener('click', () => {
    rollDice(activePlayer)
})

getElement('id-hold').addEventListener('click', () => {
    addScore(activePlayer);
    changePlayer();
})

player0.querySelector('.playerScore').innerHTML = scores[0];
player1.querySelector('.playerScore').innerHTML = scores[1];


function changePlayer() {
    if (player0.classList.contains('active')) {
        player0.classList.remove('active');
        player1.classList.add('active');
        activePlayer = 1;
    } else if (player1.classList.contains('active')) {
        player1.classList.remove('active');
        player0.classList.add('active');
        activePlayer = 0;
    }
}

function addScore(playerID) {
    const player = eval('player' + playerID);
    let value = player.querySelector('.currentScore').innerText;
    let score = scores[playerID] += Number(value);
    scoreRound = 0;
    player.querySelector('.currentScore').innerHTML = scoreRound;
    player.querySelector('.playerScore').innerHTML = score;
}

function rollDice(playerID) {
    let dice = Math.floor((Math.random() * 6) + 1);
    console.log(dice);
    const element = document.querySelector('.dice');
    const player = eval('player' + playerID);
    element.classList = `dice dice${dice}`;
    if (dice === Number(1)) {
        scoreRound = 0;
        player.querySelector('.currentScore').innerHTML = scoreRound;
        changePlayer();
    } else {
        scoreRound += dice;
        player.querySelector('.currentScore').innerHTML = scoreRound;
        return scoreRound;
    }
}

function newGame() {
    scores = [0, 0];
    scoreRound = 0;
    activePlayer = 0;
    player0.querySelector('.playerScore').innerHTML = scores[0];
    player1.querySelector('.playerScore').innerHTML = scores[1];

}

function getElement(id = "") {
    const element = document.getElementById(id);
    return element;
}
