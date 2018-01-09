import { SpaceAge, SpaceDate, PlanetAge, Planet } from './../src/js/age.js';

$(function() {
  $("#age-form").submit(function(event) {
    event.preventDefault();
    const ageInput = $("#age-input").val();
    const thisSpaceAge = new SpaceAge(ageInput);
    const ageOutput = thisSpaceAge.ageCalculate();
    $("#age-output").text(ageOutput);
  });

  $("#date-form").submit(function(event) {
    event.preventDefault();
    const dateInput = $("#date-input").val();
    const thisSpaceDate = new SpaceDate(dateInput);
    const dateOutput = thisSpaceDate.dateCalculate();
    $("#date-output").text(dateOutput);
  });

  $("#planet-form").submit(function(event) {
    event.preventDefault();
    const planetAgeInput = parseInt($("#planet-age-input").val());
    const planetInput = $("#planet-input").val();
    const userPlanetAge = new PlanetAge(planetAgeInput);
    const planetOutput = userPlanetAge.planetCalculate(planetInput);
    $("#planet-output").text(planetOutput);
  });
});
