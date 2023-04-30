setInterval(() => {

var d = new Date();

var hrs = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var day = d.getDay();
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();

var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

document.getElementById('Hrs').innerHTML=hrs
document.getElementById('Mins').innerHTML=min
document.getElementById('Sec').innerHTML=sec

if (hrs >=12) {
    document.getElementById('AM/PM').innerHTML="PM"
}
else {
    document.getElementById('AM/PM').innerHTML="AM"
}

document.getElementById('Day').innerHTML=days[day]
document.getElementById('Date').innerHTML=date
document.getElementById('Month').innerHTML=months[month]
document.getElementById('Year').innerHTML=year



}, 1000)