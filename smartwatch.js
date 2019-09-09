let messageArray =[
    {id:1, sender:'Hate',message:'Hey Batsy...WRU?'},
    {id:2, sender:'Dimples',message:'You forgotyour breakfast again?'},
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
    initialDisplay();
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
    document.getElementById('notificationBar').innerHTML  = "Timer";
    document.getElementById('timerScreen').style.display="block";
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
    console.log('her');
    document.getElementById('iconPage').style.display = 'none';
    document.getElementById('timerScreen').style.display = 'block';
}

function add() {

    let h = document.getElementsByClassName('hours')[0];
    let m = document.getElementById('minute');
    let s = document.getElementById('second');
    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let clear = document.getElementById('clear');
    let seconds = 0, minutes = 0, hours = 0;
    let t;
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h = hours ? (hours > 9 ? hours : "0" + hours) : "00";
    m = minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00";
    s = seconds > 9 ? seconds : "0" + seconds;
    console.log(s);

    timer();
    document.getElementById('clockdiv').innerHTML=h+':'+m+':'+s;
}
function timer() {
    t = setTimeout(add, 10);
}



