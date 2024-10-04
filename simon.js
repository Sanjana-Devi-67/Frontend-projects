let gameSeq=[];
let userSeq=[];
// let hscore=0;
let hscore=[];
let highestScore=0;
let btns=["yellow","green","red","purple"];
let started=false;//game hasnt started yet
let level=0; 
let level1=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    // console.log("game started")
    if(started==false){
        console.log("Game started");
        started=true;
        levelUp();
    }
});
function GameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function UserFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    level1=level;
    h2.innerText=`level ${level}`;
    //random button choose
    let randidx=Math.floor(Math.random()*3);
    let randColor=btns[randidx];
    let randbtn=document.querySelector(`.${randColor}`);
    //console.log(randidsx);
    //console.log(randColor);
    //console.log(randbtn);
    gameSeq.push(randColor);
    //console.log(gameSeq);
    GameFlash(randbtn);
}
function checkAns(idx){
    //console.log("curr level",level)
    // let idx=level-1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);  
        }
    }
    else{
        h2.innerHTML=` Game over! Your score was <b>${level}</b> <br> press any key to start<br>`;
        // if(level>hscore){
        //     hscore=level;
        //     h3.innerText=`Highest Score is ${hscore}`;
        // }
        hscore.push(level1);
        highestScore = Math.max(...hscore);
        h3.innerText = `Your highest score is ${highestScore}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}
let allbtn=document.querySelectorAll(".btn");
function btnpress(){
    //  console.log("button was pressed",this);
    let btn=this;
    UserFlash(btn);
    let userColor=btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
for(butn of allbtn){
     butn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}