
$(document).ready(function() {
  // This function handles all save button and enter key events
  $(".save").on("click", function(save) {
    save.preventDefault();
    
    // This line grabs the input from the data fields
    var getData1 = $("#data1").val().trim();
    var getData2 = $("#data2").val().trim();
    var getData3 = $("#data3").val().trim();
    var getData4 = $("#data4").val().trim();
    var getData5 = $("#data5").val().trim();
    var getData6 = $("#data6").val().trim();
    var getData7 = $("#data7").val().trim();
    var getData8 = $("#data8").val().trim();
    var getData9 = $("#data9").val().trim();

    // Adding data from the data fields to local storage
    localStorage.setItem('#data1', JSON.stringify(getData1));
    localStorage.setItem('#data2', JSON.stringify(getData2));
    localStorage.setItem('#data3', JSON.stringify(getData3));
    localStorage.setItem('#data4', JSON.stringify(getData4));
    localStorage.setItem('#data5', JSON.stringify(getData5));
    localStorage.setItem('#data6', JSON.stringify(getData6));
    localStorage.setItem('#data7', JSON.stringify(getData7));
    localStorage.setItem('#data8', JSON.stringify(getData8));
    localStorage.setItem('#data9', JSON.stringify(getData9));
    
    // Refill the fields with the entered data and keep it editable
    $("#data1").get(0).contentEditable = "true";
    $("#data2").get(0).contentEditable = "true";
    $("#data3").get(0).contentEditable = "true";
    $("#data4").get(0).contentEditable = "true";
    $("#data5").get(0).contentEditable = "true";
    $("#data6").get(0).contentEditable = "true";
    $("#data7").get(0).contentEditable = "true";
    $("#data8").get(0).contentEditable = "true";
    $("#data9").get(0).contentEditable = "true";

  });
  $('#data1').val(localStorage.getItem('#data1').replace(/"/g, ''));
  $('#data2').val(localStorage.getItem('#data2').replace(/"/g, ''));
  $('#data3').val(localStorage.getItem('#data3').replace(/"/g, ''));
  $('#data4').val(localStorage.getItem('#data4').replace(/"/g, ''));
  $('#data5').val(localStorage.getItem('#data5').replace(/"/g, ''));
  $('#data6').val(localStorage.getItem('#data6').replace(/"/g, ''));
  $('#data7').val(localStorage.getItem('#data7').replace(/"/g, ''));
  $('#data8').val(localStorage.getItem('#data8').replace(/"/g, ''));
  $('#data9').val(localStorage.getItem('#data9').replace(/"/g, ''));
  
  $('#timeDate').innerHTML = moment().format('DD-MM-YYYY');
  });
