(function () {
    console.log('v5')

    let
        scores = [0, 0],
        scoreRound = 0,
        activePlayer = 0;

    const
        player0 = getElement('#id-player0'),
        player1 = getElement('#id-player1');

    newGame();

    getElement('.id-newGame').addEventListener('click', () => {
        newGame();
    })

    getElement('#id-roll').addEventListener('click', () => {
        rollDice(activePlayer)
    })

    getElement('#id-hold').addEventListener('click', () => {
        addScore(activePlayer);
        changePlayer();
        checkWinner();
    })

    ////////////

    function checkWinner() {
        if (scores[0] > 10) {
            showWinner('Player 1')
        } else if (scores[1] > 10) {
            showWinner('Player 2')
        }
    }

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
        const winnerElement = document.querySelector('.winner');

        scores = [0, 0];
        scoreRound = 0;
        activePlayer = 0;
        player0.querySelector('.playerScore').innerHTML = scores[0];
        player1.querySelector('.playerScore').innerHTML = scores[1];

        winnerElement ? winnerElement.remove() : null

    }

    function getElement(id = "") {
        const element = document.querySelector(id);
        return element;
    }

    function showWinner(player) {
        const
            element = document.createElement('div'),
            button = document.createElement('button'),
            tplWrapper = `
                    <div>
                        <span>${player} wins!</span>
                    </div>
            `,
            tplButton = `
                <div>
                    <ion-icon name="add"></ion-icon>
                    New game
                </div>
                
            `

        element.classList.add('winner')
        button.classList.add('winnerItem')
        button.innerHTML = tplButton;
        element.innerHTML = tplWrapper;
        element.appendChild(button)
        document.body.appendChild(element)

        button.addEventListener('click', () => {
            newGame();
        })
    }

})()
