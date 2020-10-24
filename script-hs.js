var goback = document.querySelector("#goback");
var clear = document.querySelector("#clear");
var scores = document.querySelector("#scoresList");

function getscores(){
    

    var allscores = localStorage.length;
    var list = [];

    for(var i=0;i<localStorage.length;i++)
    {
        var key = localStorage.key(i);
        list[i] = JSON.parse(localStorage.getItem(key));

    }

    
   // list[0] = JSON.parse(localStorage.getItem(0));
   

    //sort scores
    list.sort((a, b) => (a.playertime < b.playertime) ? 1:-1);
    console.log(list);
    list.sort((a, b) => (a.overallscore < b.overallscore) ? 1:-1);
    console.log(list);
    
    //write scores

    sortlist = list.sort((a, b) => a.overallscore > b.overallscore) ? 1:-1;
    
   
   
    

    for(var j=0;j<list.length;j++)
    {
        var listadd = document.createElement("li");
        var place = document.createElement("div");
        var namep = document.createElement("div");
        var scorp= document.createElement("div");
        var timep = document.createElement("div");





        place.textContent = j+1;
        listadd.appendChild(place);
        namep.textContent = list[j].name;
        listadd.appendChild(namep);
        scorp.textContent = list[j].overallscore;
        listadd.appendChild(scorp);
        timep.textContent = list[j].playertime;
        listadd.appendChild(timep);

        listadd.classList.add("d-flex");
        listadd.classList.add("flex-row");
        listadd.classList.add("justify-content-between");
        listadd.classList.add("scoresline");
        scores.appendChild(listadd);
        
    }

    
}

clear.addEventListener("click",function()
{
    
    var title = scores.firstElementChild;
    scores.innerHTML = "";
    localStorage.clear();
    scores.appendChild(title);
    

});

goback.addEventListener("click",function(){

    open("index.html",'_self',false);
    
});

getscores();

