import { SpaceAge, SpaceDate } from './../src/js/age.js';
// User Interface Logic:
$(function() {
  $("#age-form").submit(function(event) {
    event.preventDefault();
    let ageInput = $("#age-input").val();
    let thisSpaceAge = new SpaceAge(ageInput);
    let ageOutput = thisSpaceAge.ageCalculate();
    $("#age-output").text(ageOutput);
  });
});

$(function() {
  $("#date-form").submit(function(event) {
    event.preventDefault();
    let dateInput = $("#date-input").val();
    let thisSpaceDate = new SpaceDate(dateInput);
    let dateOutput = thisSpaceDate.dateCalculate();
    $("#date-output").text(dateOutput);
  });
});
