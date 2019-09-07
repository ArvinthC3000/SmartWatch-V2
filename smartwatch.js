function screen(){
    console.log("here")
    document.getElementById('initialDisplay').style.display = 'none';
    document.getElementById('iconPage').style.display = 'block';
    document.getElementById('notificationBar').style.visibility = "visible";
    document.getElementById('notificationBar').innerHTML  = "Menu";
    document.getElementById('time').style.visibility = "visible";
    document.getElementById('spotify').style.display  = "none";
    document.getElementById('goHome').style.display = 'block';
    document.getElementById("messageScreen").style.display = "none";
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

    console.log(dayInStr +" "+h+":"+m+" "+meridiem)
    // document.getElementById('date')[0].innerHTML = dayInStr +" "+h+":"+m+":"+s+" "+meridiem;
    document.getElementById("time").innerHTML = h+":"+m+" "+meridiem;
    document.getElementById("dispTime").innerHTML= "<b>"+h+":"+m+"</b>"+meridiem+"<br><p id='salutation'>"+dayInStr+", " +d+"-"+mo+"-"+"19"+"</p>";
    console.log("<b>"+h+":"+m+"</b>"+meridiem+"<br><p>"+dayInStr+", " +d+"-"+mo+"-"+y+"</p>");
    console.log(dayInStr +" "+h+":"+m+" "+meridiem)
}
function message(){
    document.getElementById('iconPage').style.display="none";
    document.getElementById("messageScreen").style.display = "flex";
    // document.getElementsByClassName("myMessageFlex").style.display = "flex";
    console.log('here');
    document.getElementById('notificationBar').innerHTML = "Messages";

}
function music(){
    document.getElementById('iconPage').style.display="none";
    document.getElementById('notificationBar').innerHTML  = "Spotify";
    document.getElementById('spotify').style.display  = "flex";
    // document.getElementById("messageScreen").style.display = "flex";
    // document.getElementsByClassName("myMessageFlex").style.display = "flex";
}
function timer(){
    document.getElementById('iconPage').style.display="none";
    document.getElementById('notificationBar').innerHTML  = "Timer";
    // document.getElementById("messageScreen").style.display = "flex";
    // document.getElementsByClassName("myMessageFlex").style.display = "flex";
}


