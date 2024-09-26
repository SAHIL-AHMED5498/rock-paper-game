

let User = '';

let computerScore = 0;
let userScore = 0;

const button = document.querySelector('.button');
const result = document.querySelector('.result');
const resetButton = document.querySelector('.reset-button');

const options = document.querySelector('.options');
const score = document.querySelector('.score');
const heading = document.querySelector('.heading');

const Rock = document.querySelector('.rock');
const Paper = document.querySelector('.paper');
const Scissor = document.querySelector('.scissor');

const UserScoreBoard = document.querySelector('.user-score-board');
const ComputerScoreBoard = document.querySelector('.computer-score-board');

const wonMsg = document.querySelector('.won-msg');
const LostMsg = document.querySelector('.Lost-msg');




const userOptionImg = document.querySelector('#user-choice');
const computerOptionImg = document.querySelector('#computer-choice');

const youPara=document.querySelector('#You-para');
const compPara=document.querySelector('#Computer-para');

let n = 0;



  


function check() {

    if (n === 5) {




        result.style.display = 'block';
        options.style.display = 'none';
        score.style.display = 'none';
        
        heading.style.display = 'none';

        

        if (userScore < computerScore) {
            wonMsg.style.display = "none";
            LostMsg.style.display = "block"; // Show lost message
        } else if (userScore > computerScore) {
            wonMsg.style.display = "block"; // Show won message
            LostMsg.style.display = "none";
        } else {
            wonMsg.style.display = "none";
            LostMsg.style.display = "none";
        }
        

        UserScoreBoard.innerHTML = `User: ${userScore}`;
        ComputerScoreBoard.innerHTML = `Computer: ${computerScore}`;

        computerScore = 0;
        userScore = 0;


    }


}

resetButton.addEventListener('click', () => {

    result.style.display = 'none';

    options.style.display = 'flex';
    score.style.display = 'flex';
    
    heading.style.display = 'block';

    computerOptionImg.src =`./img/sword-cross.png`;
    userOptionImg.src =`./img/sword-cross.png`;

    youPara.innerHTML=`You`;
    compPara.innerHTML=`Computer`;

    n = 0;


})

function generateComputerMove() {
    let num = Math.floor((Math.random() * 10) / 3);

    if (num === 0) {
        return 'rock'
    }
    else if (num === 1) {
        return 'paper'
    }
    else {
        return 'scissor'
    }


}







Rock.addEventListener('click', () => {


    User = 'rock';

    userOptionImg.src =`./img/${User}-up.png`;

    
    n++;
    play();
    check();
}

);
Paper.addEventListener('click', () => {


    User = 'paper';

    userOptionImg.src =`./img/${User}-up.png`;

    
    n++;
    play();
    check();
}

);
Scissor.addEventListener('click', () => {


    User = 'scissor';
    userOptionImg.src =`./img/${User}-up.png`;

    n++;
    play();
    check();
}

);

//let Computer = generateComputerMove();


function play() {
    Computer = generateComputerMove();
    
    computerOptionImg.src =`./img/${Computer}-up.png`;

    if (User === 'rock') {

        if (Computer === 'rock') {
            

        }
        if (Computer === 'paper') {
            
            computerScore++;


        }
        if (Computer === 'scissor') {
            
            userScore++;

        }





    }

    else if (User === 'paper') {


        if (Computer === 'rock') {
            
            userScore++;

        }
        if (Computer === 'paper') {
            

        }
        if (Computer === 'scissor') {
            
            computerScore++;

        }


    }
    else if (User === 'scissor') {

        if (Computer === 'rock') {
            
            computerScore++;

        }
        if (Computer === 'paper') {
            
            userScore++;

        }
        if (Computer === 'scissor') {
        


        }


    }
    youPara.innerHTML=`You: ${userScore}`;
    compPara.innerHTML=`Computer: ${computerScore}`;
    console.log("round :" +(n));
    

}










