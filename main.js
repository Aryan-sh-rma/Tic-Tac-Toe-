let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset-btn");
let playAgainButton=document.querySelector("#new-game-btn");
let winMessageContainer=document.querySelector(".win-message-container");
let message=document.querySelector("#msg");



let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


//reset button code
const resetBtn=()=>{
    turnO=true;
    enableBoxes();
    winMessageContainer.classList.add("hide");
    

}



//  Adding events 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{console.log("box click");
    
    // player swap
    if (turnO){
        box.innerText="O";
        
        turnO = false;

    }
    else{
        box.innerText="X";
        
        turnO = true;

    }
    box.disabled=true;
    checkWinner();
});
    
});


// disabling all the buttons
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

// enable buttons
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


// displaying winner
const showWinner = (winner)=>{
    message.innerText=`Congratulations,Winner is ${winner}`;
    winMessageContainer.classList.remove("hide");
    disableBoxes();
}



// who is winner
const checkWinner =()=>{
    for(let pattern of winPatterns){

        // just for learning
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText,
        //     );

             let pos1Val=boxes[pattern[0]].innerText;
             let pos2Val=boxes[pattern[1]].innerText;
             let pos3Val=boxes[pattern[2]].innerText;

             if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
                if(pos1Val==pos2Val && pos2Val==pos3Val){
                    console.log("winner",pos1Val);
                    showWinner(pos1Val);

             }
    }


}}

playAgainButton.addEventListener("click",resetBtn);
resetButton.addEventListener("click",resetBtn);


