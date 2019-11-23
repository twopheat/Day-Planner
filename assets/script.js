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
  $("#data1").get(0).contentEditable = "true";

});

$("#save2").on("click", function(save) {
  save.preventDefault();
  
  // This line grabs the input from the data field
  var getData = $("#data2").val().trim();
  // Adding data from the data field to local storage
  localStorage.setItem('#data2', JSON.stringify(getData));
  $("#data2").get(0).contentEditable = "true";

});

$("#save3").on("click", function(save) {
  save.preventDefault();
  
  // This line grabs the input from the data field
  var getData = $("#data3").val().trim();
  // Adding data from the data field to local storage
  localStorage.setItem('#data3', JSON.stringify(getData));
  $("#data3").get(0).contentEditable = "true";

});

$("#save4").on("click", function(save) {
  save.preventDefault();
  
  // This line grabs the input from the data field
  var getData = $("#data4").val().trim();
  // Adding data from the data field to local storage
  localStorage.setItem('#data4', JSON.stringify(getData));
  $("#data4").get(0).contentEditable = "true";

});

$("#save5").on("click", function(save) {
  save.preventDefault();
  
  // This line grabs the input from the data field
  var getData = $("#data5").val().trim();
  // Adding data from the data field to local storage
  localStorage.setItem('#data5', JSON.stringify(getData));
  $("#data5").get(0).contentEditable = "true";

});

$("#save6").on("click", function(save) {
  save.preventDefault();
  
  // This line grabs the input from the data field
  var getData = $("#data6").val().trim();
  // Adding data from the data field to local storage
  localStorage.setItem('#data6', JSON.stringify(getData));
  $("#data6").get(0).contentEditable = "true";

});

$("#save7").on("click", function(save) {
  save.preventDefault();
  
  // This line grabs the input from the data field
  var getData = $("#data7").val().trim();
  // Adding data from the data field to local storage
  localStorage.setItem('#data7', JSON.stringify(getData));
  $("#data7").get(0).contentEditable = "true";

});

$("#save8").on("click", function(save) {
  save.preventDefault();
  
  // This line grabs the input from the data field
  var getData = $("#data8").val().trim();
  // Adding data from the data field to local storage
  localStorage.setItem('#data8', JSON.stringify(getData));
  $("#data8").get(0).contentEditable = "true";

});

$("#save9").on("click", function(save) {
  save.preventDefault();
  
  // This line grabs the input from the data field
  var getData = $("#data9").val().trim();
  // Adding data from the data field to local storage
  localStorage.setItem('#data9', JSON.stringify(getData));
  $("#data9").get(0).contentEditable = "true";

});
//Below is experimental loop element creation hopefully
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
