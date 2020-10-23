//initialize cards

var question = ["HTML stands for?","which of the following tag is used to mark a begining of paragraph","Correct HTML tag for the largest heading is","Markup tags tell the web browser","What are Empty elements and is it valid?","Which of the following attributes of text box control allow to limit the maximum character?","Web pages starts with which ofthe following tag?","The attribute which define the relationship between current document and HREF'ed URL is","Which of the following is a container?","The tag used to create a new list item and also include a hyperlink is","Can the element <First> be replaced with <first>","The tag used to create a hypertext relationship between current document and another URL is","Which built-in method calls a function for each element in the array?","Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?","Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?","Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?","Which of the following function of Array object returns a string representing the array and its elements?","Which of the following is a valid type of function javascript supports?"];

var options = [

    ['A. Hyper Text Markup Language','B. High Text Markup Language','C. Hyper Tabular Markup Language','D. None of these'],
    ['A. <TD>','B. <br>','C. <P>','D. <TR>'],
    ['A. <head>','B. <h6>','C. <heading>','D. <h1>'],
    ['A. How to organise the page','B. How to display the page','C. How to display message box on page','D. None of these'],
    ['A. No there is no such terms as Empty Element','B. Empty elements are element with no data','C. No it is not valid to use Empty Element','D. None of these'],
    ['A. size','B. len','C. maxlength','D. all of these'],
    ['A. <Body>','B. <Title>','C. <HTML>','D. <Form>'],
    ['A. REL','B. URL','C. REV','D. all of these'],
    ['A. <SELECT>','B. <BODY>','C. <INPUT>','D. Both (a) and (b)'],
    ['A. <LI>','B. <DL>','C. <DD>','D. <UL>'],
    ['A. No they represent different elements altogether','B. Both are same','C. First is correct only','D. first is only correct'],
    ['A. <ISINDEX>','B. <A>','C. <LINK>','D. none of these'],
    ['A. while()','B.  loop()','C.  forEach() ','D.  None of the above.'],
    ['A. substr()','B.  search()','C.  lastIndexOf() ','D.  indexOf()'],
    ['A. toLocaleLowerCase()','B.  toLowerCase()','C.  toString() ','D.  substring()'],
    ['A. concat()','B.  pop()','C.  push() ','D.  some()'],
    ['A. toSource()','B.  sort()','C.  splice() ','D.  toString()'],
    ['A. named function','B.  anonymous function','C.  Both of the above. ','D.  None of the above.']

];

var solution = ["A","C","D","B","B","C","C","A","D","A","B","C","C","D","A","A","D","C"];
var totalq = question.length;
//
       

var questiontext = document.querySelector("#Question");
var start = document.querySelector("#start");
var restart = document.querySelector("#restart");
var choices = document.querySelector("#choices");
var result = document.querySelector("#result");
var timer = document.querySelector("#timer");
var player = document.querySelector("#player");
var savescore = document.querySelector("#exit");
var scorecard= document.querySelector("#score");
var answer = "";
var score = 0;
var gametime = 0;
var gameon = 0;
var current = 0;
var timeplay = 0;

//set timer
var timeron = 0;

function startTime(){
    
    timeron = setInterval(function(){
    timer.textContent = "Time : " + timeplay;
    timeplay++;
    },1000);
}


function stopTime(){
    clearInterval(timeron);
}
//create functions
function startGame()
{   
    //document.getElementById("score").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("card").style.display = "initial";
    setquestion();
    score = 0;
    gametime = 0;
    gameon = 1;
    startTime();
}

function resetGame(){
    scorecard.setAttribute("style","display: none");
    document.getElementById("instructions").style.display = "initial";

}

function setquestion()
{ 
    
    if(question.length > 0)
    {
        result.textContent = "";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("choices").style.pointerEvents = "initial";

        //choose a random question
        current = Math.floor(Math.random() * question.length);
        questiontext.textContent = question[current];
        
        //set choices
        for(var i =0;i<4;i++)
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
        //current++;
        gameon++;
        //Remove answer from list
        function curr(inx)
        {
            return current;
        }
        question.splice(current,1);
        options.splice(current,1);
        solution.splice(current,1);
        console.log(question);
        //array = array.filter(array => array.indexOf(1));
        


    }
    else
    {
        result.textContent = "Game over";
        gametime = timeplay;
        stopTime();
        document.getElementById("card").style.display = "none";
        document.getElementById("score").style.display = "initial";
        document.getElementById("finalscore").textContent = "Your final Score is "+ score+ " and your playtime is "+ gametime + " seconds";

    }

}

//create event listeners
start.addEventListener("click",startGame);
restart.addEventListener("click",resetGame);



choices.addEventListener("click",function(event)
{
    if(event.target.tagName == "BUTTON")
    {
        console.log(event.target.tagName);
        
        if(event.target.textContent.charAt(0) == answer)
        {
            result.textContent = "correct";
            document.getElementById("choices").style.pointerEvents = "none";
            setTimeout(setquestion,1000);
            score++;

        }
        else
        {
            result.textContent = "incorrect";
            document.getElementById("choices").style.pointerEvents = "none";
            setTimeout(setquestion,1000);
            
        }


    }
     

});




savescore.addEventListener("click",function(){
   
    if(player.value == "" || player.value.length > 10)
    {  
         alert("Ups name too long or empty name");
    }
    else
    {

        var playerscore =
        {
            name:player.value,
            overallscore: score,
            playertime: gametime
        };


        //var x = localStorage.getItem("mytime");
        //var data = JSON.parse(localStorage.getItem("key name"));
        var next = Object.keys(localStorage).length +1;
        localStorage["codequizScore" + next] = JSON.stringify(playerscore);
       
    }
   
   scorecard.setAttribute("style","display: none");
   open("scores.html",'_self',false);

});


