$(document).ready(function() {
// Declare array for time of day 
//var timeFrame = [9,10,11,12,1,2,3,4,5,];

// This function handles save button events
$("#save1").on("click", function(save) {
  save.preventDefault();
  // This line grabs the input from the data field

  var getData = $("#data1").val().trim();

  // Adding data from the data field to local storage
  localStorage.setItem('#data1', JSON.stringify(getData));
  $(".data1").get(0).contentEditable = "true";
});

/*buildElements();



function buildElements() {

  var time = "<button></button>";
  
  var data = "<input></input>";
  var save = "<input></input>";     
  
  var text = "";
  var i;

  $(".spacer").after(time);
  $("form").after(data, save);


  
  };
  for (i = 0; i <timeFrame ; i++) {
    text += timeFrame[i] + "<br>";
    buildElements(i);
    //println(timeFrame[i]);
  };*/
});
