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
  $('#data1').val(localStorage.getItem('#data1').replace(/"/g, ''));
  
  $("#save2").on("click", function(save) {
    save.preventDefault();
    
    // This line grabs the input from the data field
    var getData = $("#data2").val().trim();
    // Adding data from the data field to local storage
    localStorage.setItem('#data2', JSON.stringify(getData));
    $("#data2").get(0).contentEditable = "true";
  
  });
  $('#data2').val(localStorage.getItem('#data2').replace(/"/g, ''));
  
  $("#save3").on("click", function(save) {
    save.preventDefault();
    
    // This line grabs the input from the data field
    var getData = $("#data3").val().trim();
    // Adding data from the data field to local storage
    localStorage.setItem('#data3', JSON.stringify(getData));
    $("#data3").get(0).contentEditable = "true";
  
  });
  $('#data3').val(localStorage.getItem('#data3').replace(/"/g, ''));
  
  $("#save4").on("click", function(save) {
    save.preventDefault();
    
    // This line grabs the input from the data field
    var getData = $("#data4").val().trim();
    // Adding data from the data field to local storage
    localStorage.setItem('#data4', JSON.stringify(getData));
    $("#data4").get(0).contentEditable = "true";
  
  });
  $('#data4').val(localStorage.getItem('#data4').replace(/"/g, ''));
  
  $("#save5").on("click", function(save) {
    save.preventDefault();
    
    // This line grabs the input from the data field
    var getData = $("#data5").val().trim();
    // Adding data from the data field to local storage
    localStorage.setItem('#data5', JSON.stringify(getData));
    $("#data5").get(0).contentEditable = "true";
  
  });
  $('#data5').val(localStorage.getItem('#data5').replace(/"/g, ''));
  
  $("#save6").on("click", function(save) {
    save.preventDefault();
    
    // This line grabs the input from the data field
    var getData = $("#data6").val().trim();
    // Adding data from the data field to local storage
    localStorage.setItem('#data6', JSON.stringify(getData));
    $("#data6").get(0).contentEditable = "true";
  
  });
  $('#data6').val(localStorage.getItem('#data6').replace(/"/g, ''));
  
  $("#save7").on("click", function(save) {
    save.preventDefault();
    
    // This line grabs the input from the data field
    var getData = $("#data7").val().trim();
    // Adding data from the data field to local storage
    localStorage.setItem('#data7', JSON.stringify(getData));
    $("#data7").get(0).contentEditable = "true";
  
  });
  $('#data7').val(localStorage.getItem('#data7').replace(/"/g, ''));
  
  $("#save8").on("click", function(save) {
    save.preventDefault();
    
    // This line grabs the input from the data field
    var getData = $("#data8").val().trim();
    // Adding data from the data field to local storage
    localStorage.setItem('#data8', JSON.stringify(getData));
    $("#data8").get(0).contentEditable = "true";
  
  });
  $('#data8').val(localStorage.getItem('#data8').replace(/"/g, ''));
  
  $("#save9").on("click", function(save) {
    save.preventDefault();
    
    // This line grabs the input from the data field
    var getData = $("#data9").val().trim();
    // Adding data from the data field to local storage
    localStorage.setItem('#data9', JSON.stringify(getData));
    $("#data9").get(0).contentEditable = "true";
  
  });
  $('#data9').val(localStorage.getItem('#data9').replace(/"/g, ''));
  
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