const score = JSON.parse(localStorage.getItem("score")) ||

        {

            wins: 0,
            losses: 0,
            ties: 0,

        };

        updateScore();


        function playGame(playerMove) {


            const computerGuess = pickComputerMove();

            let result = '';

            if (playerMove === 'scissors') {

                if (computerGuess === 'rock') {

                    result = 'Computer Won';

                } else if (computerGuess === 'paper') {

                    result = 'You Won';

                } else if (computerGuess === 'scissors') {

                    result = 'Tie';

                }


            } else if (playerMove === 'paper') {


                if (computerGuess === 'rock') {

                    result = 'You Won';

                } else if (computerGuess === 'paper') {

                    result = 'Tie';

                } else if (computerGuess === 'scissors') {

                    result = 'Computer Won';

                }


            } else if (playerMove === 'rock') {

                if (computerGuess === 'rock') {

                    result = 'Tie';

                } else if (computerGuess === 'paper') {

                    result = 'Computer Won';

                } else if (computerGuess === 'scissors') {

                    result = 'You Won';

                }


            }


            if (result === 'Tie') {

                score.ties++;

            } else if (result === 'You Won') {

                score.wins++;

            } else if (result === 'Computer Won') {

                score.losses++;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScore();

            document.querySelector(".js-result").innerHTML = `${result}`;

            document.querySelector(".js-moves").innerHTML = `You <img class="move-img" src="images/${playerMove}-emoji.png"> Computer <img class="move-img" src="images/${computerGuess}-emoji.png">`;



        }

        function updateScore() {

            document.querySelector('.js-score').innerHTML = `Wins:${score.wins}.Ties:${score.ties}.Losses:${score.losses}`;

        }


        function pickComputerMove() {

            const randomNumber = Math.random();

            let computerGuess = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {

                computerGuess = 'rock';

            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {

                computerGuess = 'paper';

            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {

                computerGuess = 'scissors';

            }

            return computerGuess;


        }
