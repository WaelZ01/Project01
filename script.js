// Set the initial click count
let cardFlipCount = 1;
let flippedCard;
 
 //attach a flip event to the cards
        const cards = document.querySelectorAll('.card');
    
// get the front face of the clicked card
         function flipCard() { 
        this.querySelector('.frontFace').classList.add('flip') 
        
// If first flip


//once clicked the card the card flip 


        // Add one to card flip count

        // Set the flippedCard

 // else
//second click on another card  for check matching




        //if the two card matched they stay appeard

                // Get the src of the card clicked on
                const card2src = this.querySelector('.frontFace').getAttribute('src');

                // Get the src of the previously flipped card
                flippedCard

                // If the two src's are equal


                // Else

                        //(display none for both)
                
                        //if the two card is not matched they flip on there back again



        // set the card flip count to 1
        // Empty the flippedCard

        }

cards.forEach(card => card.addEventListener('click', flipCard));
