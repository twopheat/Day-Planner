
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var mode = "dark";
// Set current time (h) in the first column, to be looped by row.
function setTime() {
    var d = new Date();
    var n = d.getHours();
    var t
    var h = n/2;
    

    if (n <= 12) {
        t = n;
      }
    else {t = n - 12;
    }

    document.getElementById("time-text1").innerHTML = "9:00";
    document.getElementById("time-text2").innerHTML = "10:00";
    document.getElementById("time-text3").innerHTML = "11:00";
    document.getElementById("time-text4").innerHTML = "12:00";
    document.getElementById("time-text5").innerHTML = " 1:00";
    document.getElementById("time-text6").innerHTML = " 2:00";
    document.getElementById("time-text7").innerHTML = " 3:00";
    document.getElementById("time-text8").innerHTML = " 4:00";
    document.getElementById("time-text9").innerHTML = " 5:00";
    
    
  }
  setTime();
  /*_______________________________________________________________
var timeList = [
    " 9:00am",
    "10:00am",
    "11:00am",
    "12:00am",
    " 1:00am",
    " 2:00pm",
    " 3:00pm",
    " 4:00pm",
    " 5:00pm"
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

*/