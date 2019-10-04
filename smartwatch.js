let messageArray =[
    {id:1, sender:'Hate',message:'Hlo sir...WRU?'},
    {id:2, sender:'Dimples',message:'You forgot your breakfast again?'},
    {id:3, sender:'Natpu',message:'Da...Tmrw I\'ll be leaving Chennai'},
    {id:4, sender:'Stranger',message:'You getting him redhanded was lit AF'},
    {id:5, sender:'Chella',message:'Dei butter-u,I\'ll call u tmrw da'}
]

function screen(){
    document.getElementById('initialDisplay').style.display = 'none';
    document.getElementById('iconPage').style.display = 'block';
    document.getElementById('notificationBar').style.visibility = "visible";
    document.getElementById('notificationBar').innerHTML  = "Menu";
    document.getElementById('time').style.visibility = "visible";
    document.getElementById('spotify').style.display  = "none";
    document.getElementById('goHome').style.display = 'block';
    document.getElementById("messageScreen").style.display = "none";
    document.getElementById('mes1').style.display = 'none';
    document.getElementById('mes2').style.display = 'none';
    document.getElementById('mes3').style.display = 'none';
    document.getElementById('timerScreen').style.display = 'none';
    // initialDisplay();
}
function initialDisplay(){
    
    let date1= new Date();
    let dayInNum = date1.getDay();
    let dayArray =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayInStr = dayArray[dayInNum];
    let h = date1.getHours();
    let y = date1.getFullYear();
    let mo = date1.getMonth();
    let d = date1.getDate();
    mo+=1;
    let meridiem = 'am'
    if(h >= 13)
        {
            h -= 12;
            meridiem = 'pm';
        }
    let m = date1.getMinutes();
    let s = date1.getSeconds();
    m = digit(m);
    s = digit(s);
    function digit(i){

    if (i < 10) {i = "0" + i };
    return i;
    }    

    document.getElementById("time").innerHTML = h+":"+m+" "+meridiem;
    document.getElementById("dispTime").innerHTML= "<b>"+h+":"+m+"</b>"+meridiem+"<br><p id='salutation'>"+dayInStr+", " +d+"-"+mo+"-"+"19"+"</p>";
    
}
function message(){
    document.getElementById('iconPage').style.display="none";
    document.getElementById("messageScreen").style.display = "flex";
    document.getElementById('notificationBar').innerHTML = "Messages";


}
function music(){
    document.getElementById('iconPage').style.display="none";
    document.getElementById('notificationBar').innerHTML  = "Spotify";
    document.getElementById('spotify').style.display  = "flex";
}
function timer(){
    document.getElementById('iconPage').style.display="none";
    
    t = setTimeout(add, 10);
}
function chat1(){
    screen();
    let n=0;
    console.log(messageArray[0].message);
    document.getElementById('iconPage').style.display = 'none';
    document.getElementById('messageScreen').style.display = 'none';
    document.getElementById('mes1').style.display = 'block';
    document.getElementById('mes1').innerHTML = messageArray[0].sender+':'+messageArray[0].message;
    
}
function chat2(){
    screen();
    let n=1;
    console.log(messageArray[1].message);
    document.getElementById('iconPage').style.display = 'none';
    document.getElementById('messageScreen').style.display = 'none';
    document.getElementById('mes2').style.display = 'block';
    document.getElementById('mes2').innerHTML = messageArray[n].sender+':'+messageArray[n].message;
    
}
function chat3(){
    screen();
    let n=2;
    console.log(messageArray[2].message);
    document.getElementById('iconPage').style.display = 'none';
    document.getElementById('messageScreen').style.display = 'none';
    document.getElementById('mes3').style.display = 'block';
    document.getElementById('mes3').innerHTML = messageArray[n].sender+':'+messageArray[n].message;
    
}
function timerScr(){
    screen();
    document.getElementById('notificationBar').innerHTML  = "Timer";
    document.getElementById('iconPage').style.display = 'none';
    document.getElementById('timerScreen').style.display = 'flex';
}



let h = 0;
let m = 0;
let s = 0;
let seconds = 0, minutes = 0, hours = 0;
let t;
function add() {
    document.getElementById('startButton').style.pointerEvents = 'none';
    document.getElementById('pauseButton').style.pointerEvents = 'all';
seconds++;
if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

}
timer();
h = hours ? (hours > 9 ? hours : "0" + hours) : "00";
m = minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00";
s = seconds > 9 ? seconds : "0" + seconds;


document.getElementById('hours').innerHTML=h+":";
document.getElementById('minute').innerHTML=m+":";
document.getElementById('second').innerHTML=s;

let reset =  document.getElementById('resetButton');

reset.onclick = function(){
    hours = 0;
    minutes = 0;
    seconds = 0;
    h = "00";
    m = "00";
    s = "00";
    document.getElementById('hours').innerText = "00:";
    document.getElementById('minute').innerText = "00:";
    document.getElementById('second').innerText = "00";
}

let lap =  document.getElementById('lap');
let laps =  document.getElementById('laps'); 

lap.onclick = function() {
    laps.innerHTML += "<li>" + h + ":"+  m +":"+  s + "</li>";
  }
}

function stopTimer(){
    document.getElementById('pauseButton').style.pointerEvents = 'none';
    document.getElementById('startButton').style.pointerEvents = 'all';
    clearTimeout(t);
}
