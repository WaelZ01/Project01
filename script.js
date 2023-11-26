const cards = document.querySelectorAll('.card');
const  restathButton = document.querySelectorAll('.button');
let flippedCard = false;
let card1 , card2;
let count = 0;
let currentPlayer = 'player01';
let playerOneScore = 0;
let playerTwoScore = 0;


//flip card action
function flipCard(){
        count++;
        
if(count > 2){
        return;
}

//toggle means if the class is there add it if not remove it same as on and off
        this.classList.toggle('flip');
        
//first click 
        if(!flippedCard){
        flippedCard = true;
        card1 = this;//(this) it will call the object 
        }

//seconed click
        else{
        flippedCard = false;
        card2 = this;
//check if it match ther card:
        checkMatching();
        // change player
        if(currentPlayer === 'player01'){
                currentPlayer = 'player02';
        }else{
                currentPlayer = 'player01';
        }
        }
        }
        // if we check matching never swich
        function checkMatching(){
                if(card1.dataset.cards === card2.dataset.cards && card1.id !== card2.id){//to get the data type from html
                        // if player 1, add to player 1 score
                        if(currentPlayer == 'player01'){
                                playerOneScore++;
                        
                        }
                        // else
                                // add to player 2 score
                        else{
                                playerTwoScore++;
                        }
                        if(playerOneScore + playerTwoScore == 7){
                                checkForWinner();
                        }

                //if the card match each other
                card1.removeEventListener('click',flipCard);
                card2.removeEventListener('click',flipCard);
                count = 0;
                } 
                //if the card not matched flip the cards
                else(
                setTimeout(()=>{
                card1.classList.remove('flip');
                card2.classList.remove('flip');
                count = 0;
                        },1000)
                                );
                document.querySelector('#player01').innerHTML = playerOneScore;
                document.querySelector('#player02').innerHTML = playerTwoScore;     
     

                                      }                               
//when the user prsses on the restart button 
        function restart(){
        cards.forEach(function(card){
        card.classList.remove('flip')
        })
        setTimeout(shuffle, 1750);
        }

// shuffling the cards order 
        function shuffle() {         
//to not get the same order in every time         
        let randomOrder = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        cards.forEach(function(card){
//give a random index order for random array
        let index = Math.floor(Math.random() * randomOrder.length - 1);
        card.style.order = randomOrder[index];
                        })
                                };


// when the user clicks on the RESTART button the page will reload  
//once clicked on restart button the page refreshs and shuffles the cards
        restathButton.forEach(button => {
        button.addEventListener('click', function() {
        location.reload();
                        });
                                });

//the check for winner function 

function checkForWinner(){
       if(playerOneScore > playerTwoScore){
                setTimeout(function(){alert("PLAYER 1 WINS!!")},1000);
        }else if(playerOneScore < playerTwoScore){
                setTimeout(function(){alert("PLAYER 2 WINS!!")},1000);
         }
         else{
                setTimeout(function(){alert("DRAW")},1000);

         }

}
                        
//to reload the page once the user press on the restart button                
        Window.onload = (shuffle());
//to select the class and applay on it the event listner (restart)
        document.querySelector('.button').addEventListener('click',restart);
//to add the click event to my function ( flipCard )
        cards.forEach(card => card.addEventListener('click', flipCard));
        const scoreElement = document.querySelector('player01');


