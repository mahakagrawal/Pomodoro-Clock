var start= document.getElementById('start-btn');
var reset= document.getElementById('reset-btn');
var sessionAdd = document.getElementById('sessionAdd');
var sessionSubtract = document.getElementById('sessionSubtract');
var breakAdd = document.getElementById('breakAdd');
var breakSubtract = document.getElementById('breakSubtract');
var interval;
// function to handle Timer
function setTimer(){
        interval = setInterval(function(){
            var breakTime = document.getElementById('breakTime');
            breaktimes= parseInt(breakTime.innerText);
        time--;
        var hh = parseInt(time/60/60);
        var mm = parseInt(time/60);
        var ss = parseInt(time%60);
        if(hh==0 && mm<breaktimes){
            document.getElementById('showTime').style="color:orange";
        }
        if(hh==0){
            document.getElementById('showTime').innerHTML=mm+':'+ss;
        }
        else{
            document.getElementById('showTime').innerHTML=hh+':'+mm+':'+ss;}
        if(hh==0 && mm==0 && ss==0){
            stopTimer();
            enableButtons();
            start.innerText="Start";
        }
    },1000);
}
//function to stop timer
function stopTimer(){
    clearInterval(interval);
}
// function to handle start pause event
start.addEventListener("click",function(event){
    if(start.innerText=="Pause"){
        start.innerText="Start";
        stopTimer();
        enableButtons();
    }
    else{
        start.innerText="Pause";
        var sessionTime = document.getElementById('sessionTime');
        time= parseInt(sessionTime.innerText)*60;
        setTimer();
        disableButtons();
        document.getElementById('session').innerText="Session 1";
    }
});

// function to handle reset event
reset.addEventListener("click",function(event){
    document.getElementById('session').innerText="Pomodoro";
    start.innerText="Start";
    stopTimer();
    enableButtons();
});

// function to disable buttons
function disableButtons(){
    var btn = document.getElementsByClassName('adjust-btn');
    for(var i=0;i<btn.length;i++){
        btn[i].disabled=true;
    }
}
// function to enable buttons
function enableButtons(){
    var btn = document.getElementsByClassName('adjust-btn');
    for(var i=0;i<btn.length;i++){
        btn[i].disabled=false;
        console.log(btn[i]);
    }
}

//function to increment session time by 1 min
sessionAdd.addEventListener("click",function(event){
    var sessionTime = document.getElementById('sessionTime');
    sessionTime.innerText= parseInt(sessionTime.innerText)+1;
});

//function to decrement session time by 1 min
sessionSubtract.addEventListener("click",function(event){
    var sessionTime = document.getElementById('sessionTime');
    if(parseInt(sessionTime.innerText)>1){
        sessionTime.innerText= parseInt(sessionTime.innerText)-1;
    }
});

//function to increment break time by 1 min
breakAdd.addEventListener("click",function(event){
    var breakTime = document.getElementById('breakTime');
    breakTime.innerText= parseInt(breakTime.innerText)+1;
});

//function to decrement break time by 1 min
breakSubtract.addEventListener("click",function(event){
    var breakTime = document.getElementById('breakTime');
    if(parseInt(breakTime.innerText)>1){
        breakTime.innerText= parseInt(breakTime.innerText)-1;
    }
});

var time=20*60;
setTimer();
disableButtons();
