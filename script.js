//initialize cards

var question = ["1+1","1+2","1+3","1+4","1+5","1+6","1+7","1+8","1+9","1+10"];
var options = [
    ["4","5","2","1","3"],
    ["4","5","2","1","3"],
    ["4","5","2","1","3"],
    ["4","5","2","1","3"],
    ["4","5","2","1","3"],
    ["4","5","2","1","3"],
    ["4","5","2","1","3"],
    ["4","5","2","1","3"],
    ["4","5","2","1","3"],
    ["4","5","2","1","3"],
]
var solution = ["2","1","3","4","4","4","5","2","1","3"]

var questiontext = document.querySelector("#Question");
var start = document.querySelector("#start");
var choices = document.querySelector("#choices");
var result = document.querySelector("#result");
var timer = document.querySelector("#timer");
var answer = "";
var score = 0;
var gametime = 0;
var gameon = 0;
var current = 0;
var timeplay = 0;


//create event listeners
start.addEventListener("click",function()
{   
    document.getElementById("instructions").style.display = "none";
    document.getElementById("card").style.display = "initial";
    setquestion();
    score = 0;
    gametime = 0;
    gameon = 1;
    startTime();
});

choices.addEventListener("click",function(event)
{
    if(event.target.tagName == "BUTTON")
    {
        console.log(event.target.tagName);
        
        if(event.target.textContent == answer)
        {
            result.textContent = "correct";
            document.getElementById("choices").style.pointerEvents = "none";
            setTimeout(setquestion,3000);
            score++;
            
            
        }
        else
        {
            result.textContent = "incorrect";
            document.getElementById("choices").style.pointerEvents = "none";
            setTimeout(setquestion,3000);
            
        }


    }
     

});

//create functions
function setquestion()
{ 
    if(gameon !== 3)
    {
        result.textContent = "";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("choices").style.pointerEvents = "initial";

        questiontext.textContent = question[current];
        
        //set choices
        for(var i =0;i<5;i++)
        {   var setchoices = document.createElement("li");
            var newbutton = document.createElement("button");
            newbutton.classList.add("btn-info");
            newbutton.classList.add("rounded-pill");
            newbutton.textContent = options[current][i];
            setchoices.appendChild(newbutton);
            choices.appendChild(setchoices);
        }
        //set answer
        answer = solution[current];
        current++;
        gameon++;

    }
    else
    {
        result.textContent = "Game over";
        stopTime;
        
    }
    


}
function startTime(){

    var timeron = setInterval(function(){
        timer.textContent = "Tiempo: " + timeplay;
        timeplay++;

    },1000);
}
function stopTime(){
    clearInterval(timeron);
}




