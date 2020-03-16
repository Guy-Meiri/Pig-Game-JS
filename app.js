/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var roundScore, activePlayer, isGameOver;
//var scores

// scores = [0, 0];
initGame()



document.querySelector('.btn-roll').addEventListener('click',
    function () {
        if (!isGameOver) {
            var dice = Math.floor(Math.random() * 6) + 1;

            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';;


            diceDOM.src = 'dice-' + dice + '.png';

            document.querySelector(`#current-${activePlayer}`).textContent = dice;

            if (dice !== 1) {
                roundScore += dice;
                document.getElementById('current-' + activePlayer).textContent = roundScore;
            }
            else {
                changePlayer();
            }
        }

    });

document.querySelector('.btn-hold').addEventListener('click',
    function () {
        if (!isGameOver) {
            var currPlayerScore = parseInt(document.getElementById('score-' + activePlayer).textContent);
            currPlayerScore += roundScore;

            document.getElementById('score-' + activePlayer).textContent = currPlayerScore;
            var input = document.querySelector('.final-score').value;

            var winningScore;
            if(input){
                winningScore = input;
            }else{
                winningScore= 100;
            }

            if (currPlayerScore >= winningScore) {
                document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                isGameOver = true;
            }
            else {
                changePlayer();
            }
        }


    });
document.querySelector('.btn-new').addEventListener('click', initGame);

function initGame() {
    isGameOver = false;
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('active'); //first remove the active class so we won't have 2 active classes at the same time
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';



}
function changePlayer() {
    document.querySelector('#current-' + activePlayer).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

function btn() {
    dice = Math.floor(Math.random() * 6) + 1;
}