import { SpaceAge } from './../src/js/age.js';

// User Interface Logic:
$(function() {
  $("#date-input").submit(function(event) {
    event.preventDefault();
    let input = $("#user-input").val();
    let thisSpaceAge = new SpaceAge(input);
    let output = thisSpaceAge.ageCalculate();
    $("#age-output").text(output);
  });
});
