let yourScore=0;
let compScose=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const userScore=document.querySelector("#yourScore");
const comScore=document.querySelector("#copmScore");


//featching all three image of rock,paper,scissors
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const usrchoice=choice.getAttribute("id");
        playGame(usrchoice);
    });

});

//display result
const scoreDisplay=(userWin)=>{
    if(userWin)
        {
            yourScore++;
            userScore.innerText=yourScore;
             msg.innerText="congratulations!!!\n YOU WON!!!"
            
        }
        else
        { compScose++;
            comScore.innerText=compScose;
            msg.innerText="SORRY!!!!\n YOU LOSE!!!"
        }

}

//main game play logic
const playGame=(usrchoice)=>{
    let cc=compchoice();
    let userWin=true;
    console.log(cc);
    if(usrchoice===cc)
    {//Game Draw condition
        console.log("Draw");
        msg.innerText="Game Draw"
    }
    else
    {
        let userWin=true;
        if(usrchoice==="rock")
        {
            //paper ,scissors
          userWin = cc==="paper"? false:true;
        }else if(usrchoice==="paper")
        {
            //rock,scissors
            userWin=cc==="scissors"? false:true;
        }else if(usrchoice==="scissors")
        {
            //rock,paper
            userWin=cc==="rock"?false:true;
        }

       scoreDisplay(userWin);
    }

    
    };

    //computer play calculation
    const compchoice=()=>{
        const option=["rock","paper","scissors"];
        //Generate random number
        let index=Math.floor(Math.random()*3);
    return option[index]};
