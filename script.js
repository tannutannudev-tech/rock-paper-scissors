let choices = document.querySelectorAll(".choices");
let userchoice = document.querySelector(".userchoice");
let compchoice = document.querySelector(".compchoice");
let result = document.querySelector(".result");
let userScorepara =  document.querySelector(".score-user");
let computerScorepara = document.querySelector(".score-computer");
let userScore = 0;
let computerScore = 0;
let options = ["rock", "paper", "scissors"];
choices.forEach((choice) => {
    choice.addEventListener("click" ,() =>{
    let computerchoice =  Math.floor(Math.random() * options.length);
    let compMove = options[computerchoice];
    let userMove = choice.textContent;
     compchoice.textContent = "Computer choice: " + compMove;
     userchoice.textContent = "User choice: " + userMove;
    if(compMove === userMove){
    result.textContent = "It is a draw!";
    }
    else if(compMove === "paper"){
        if(userMove === "rock"){
            result.textContent = "Computer Won!";
            computerScore++;
            computerScorepara.textContent = "Computer Score : " + computerScore;
        }
        else{
             result.textContent = "User Won!";
             userScore++;
             userScorepara.textContent = "User Score : " + userScore;
        }
    }
    else if(compMove === "scissors"){
        if(userMove === "rock"){
        result.textContent = "User Won!";
         userScore++;
             userScorepara.textContent = "User Score : " + userScore;
       }
       else{
        result.textContent = "Computer Won!"
        computerScore++;
            computerScorepara.textContent = "Computer Score : " + computerScore;
       }
    }
    else if(compMove === "rock"){
        if(userMove === "paper"){
            result.textContent = "User Won!";
             userScore++;
             userScorepara.textContent = "User Score : " + userScore;
        }
        else{
            result.textContent = "Computer Won!";
            computerScore++;
            computerScorepara.textContent = "Computer Score : " + computerScore;
        }
    }
    console.log("computer choose : " + options[computerchoice]);
    console.log("choice of the user : " + choice.textContent);
     });
    
    });