// This function handles events where a movie button is clicked
$("#nineData").on("click", function(save) {
  save.preventDefault();
  // This line grabs the input from the textbox
  var nineData = $("#nineData").val().trim();

  // Adding movie from the textbox to our array
  movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});