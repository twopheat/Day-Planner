
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var mode = "dark";
// Set current time (h) in the first column, to be looped by row.
function setTime() {
    var d = new Date();
    var n = d.getHours();
    var t
    
    if (n > 12) {
        t = n-12;
      } 
    else t = n;
    document.getElementById("time-text1").innerHTML = t + ":00";
  }
  setTime();
  //_______________________________________________________________
var timeList = [
    " 7:00am",
    " 8:00am",
    " 9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    " 1:00pm",
    " 2:00pm",
    " 3:00pm",
    " 4:00pm"
    ];

function tiMe() {
moment('11 PM', 'hh a').format("time-slot");
document.textContent(".time-slot");
}

var row = document.getElementById("row");
var timeSlot = document.getElementById("time-text");

for (var i = 0; i < timeList.length; i++) {
  var timeStamp = document.getElementbyId("time-slot");
  timeStamp.textContent = timeList[i];
  timeSlot.appendChild(timeStamp);
}






//theme switcher, becuase it looks so good.


themeSwitcher.addEventListener("click", function() {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});