let score = JSON.parse(localStorage.getItem('score'));
            if(score === null){
                score = {
                    wins: 0,
                    losses: 0,
                    ties: 0,
                    result: '',
                    pmove: '',
                    cmove: '',
                    moves: ''
                };
            }

let auto = false;
let intervalID = null;
            updateScore();     

            function play(move){
                score.pmove = move;
                score.cmove = pickmove();
                if(move === 'rock'){
                    if(score.cmove === 'rock'){
                        score.ties = score.ties+1;
                        score.result = 'Its a tie';
                        //alert(`You picked ${move}, Cmoputer picked ${cmove} It's a tie
                        //wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}` );
                    }else if(score.cmove === 'paper'){
                        score.losses = score.losses+1;
                        score.result = 'You lose';
                        //alert(`You picked ${move}, Cmoputer picked ${cmove} You lose
                        //wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}` );
                    }else if(score.cmove === 'scissors'){
                        score.wins = score.wins+1;
                        score.result = 'You win';
                        //alert(`You picked ${move}, Cmoputer picked ${cmove} You Win
                        //wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}` );
                    }
                 } 
                 else if(move === 'paper'){
                    if(score.cmove === 'rock'){
                        score.wins = score.wins+1;
                        score.result = 'You win';
                        //alert(`You picked ${move}, Cmoputer picked ${cmove} You Win
                        //wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}` );
                    }else if(score.cmove === 'paper'){
                        score.ties = score.ties+1;
                        score.result = 'Its a tie';
                        //alert(`You picked ${move}, Cmoputer picked ${cmove} It's a tie
                        //wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}` );
                    }else if(score.cmove === 'scissors'){
                        score.losses = score.losses+1;
                        score.result = 'You lose';
                        //alert(`You picked ${move}, Cmoputer picked ${cmove} You lose
                        //wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}` );;
                    }
                }
                else if(move === 'scissors'){
                    if(score.cmove === 'rock'){
                        score.losses = score.losses+1;
                        score.result = 'You lose';
                        //alert(`You picked ${move}, Cmoputer picked ${cmove} You lose
                        //wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}` );
                    }else if(score.cmove === 'paper'){
                        score.wins = score.wins+1;
                        score.result = 'You win';
                        //alert(`You picked ${move}, Cmoputer picked ${cmove} You Win
                        //wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}` );
                    }else if(score.cmove === 'scissors'){
                        score.ties = score.ties+1;
                        score.result = 'Its a tie';
                        //alert(`You picked ${move}, Cmoputer picked ${cmove} It's a tie
                        //wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}` );
                    }
                }
                score.moves = `You: <img src="/RPS/assets/${score.pmove}-emoji.png" class="icon"> X <img src="/RPS/assets/${score.cmove}-emoji.png" class="icon"> :Computer`;
                updateScore();
                localStorage.setItem('score',JSON.stringify(score))
            }
            function pickmove(){
                let num1 = Math.random();
                let move = '';
                if(num1 >=0 && num1 <1/3){
                    move = 'rock';
                }else if(num1 >=1/3 && num1 <2/3){
                    move = 'paper';
                }else if(num1 >=2/3 && num1 <1){
                    move = 'scissors';
                }
                return move;
            }
            function updateScore(){
                document.querySelector('.js-score').innerHTML = `wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}`;
                document.querySelector('.js-result').innerHTML = score.result;
                document.querySelector('.js-moves').innerHTML =  score.moves;     
            }
            function autoplay(){
                auto = !auto;
                if(auto){
                     intervalID = setInterval(function() {
                     play(pickmove());
                    //console.log('played once');
                    }, 1000);
                    document.querySelector('.js-autoplay').innerHTML = 'Stop';
                }else {
                    clearInterval(intervalID);
                    intervalID = null;
                    document.querySelector('.js-autoplay').innerHTML = 'Auto Play';
                }     
            }