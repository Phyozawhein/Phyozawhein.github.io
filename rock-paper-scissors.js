let RPS = ['Rock', 'Paper', 'Scissors'];
let playerChoice;
let computerChoice;
let playerscore=0;
let computerscore=0;
let winner;
function computerplay(){
    let select= Math.floor(Math.random()*3);
    return select;
}
function game(){
    for(let i=0; i< 5; i++)
    {
        playerChoice= parseInt(prompt("Rock, paper, scissors ? (0- Rock, 1- Paper, 2- Scissors)"));
        computerChoice=computerplay();
        console.log(RPS[playerChoice]+" VS "+RPS[computerChoice]+"\n");
        if(playerChoice=== 0 && computerChoice ===3)
        {
            console.log("Player Wins !\n");
            playerscore+=1;
        }
        else if ( playerChoice === 1 && computerChoice ===0)
        {
            console.log("Player Wins !\n");
            playerscore+=1;
        }
        else if ( playerChoice=== 2 && computerChoice === 1)
        {
            console.log("Player Wins !\n");
            playerscore+=1;
        }
        else if(playerChoice=== 0 && computerChoice ===2)
        {
            console.log("Computer Wins !\n");
            computerscore+=1;
        }
        else if ( playerChoice === 1 && computerChoice ===3)
        {
            console.log("Computer Wins !\n");
            computerscore+=1;
        }
        else if ( playerChoice=== 2 && computerChoice === 0)
        {
            console.log("Computer Wins !\n");
            computerscore+=1;
        }
        else{
            console.log("A tie due to same selection !\n");
        }
    }
    if(playerscore>computerscore)
    {
        winner= "Player";
    }
    else if (computerscore>playerscore)
    {
        winner ="Computer";
    }
    else
    { 
        winner= "Both (A tie) "
    }
    
    console.log("Winner of Rock Paper Scissors :"+winner+"!")
}
