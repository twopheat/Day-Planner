$(document).ready(function() {
var dataString
var getData
// This function handles events where a movie button is clicked
$("#saveBtn").on("click", function(save) {
  save.preventDefault();
  // This line grabs the input from the textbox
  var getData = $("#dailyData").val().trim();

  // Adding data from the textbox to console log
  localStorage.setItem('#dailyData', JSON.stringify(getData));
  

  // Calling renderButtons which handles the processing of our movie array
  
});
});
