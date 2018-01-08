import { SpaceAge, SpaceDate, PlanetAge, Planet } from './../src/js/age.js';

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

$(function() {
  $("#planet-form").submit(function(event) {
    event.preventDefault();
    let planetAgeInput = $("#planet-age-input").val();
    let planetInput = $("#planet-input").val();
    let thisPlanetAge = new PlanetAge(planetAgeInput);
    let thisPlanet = new Planet(planetInput);
    let planetOutput = thisPlanetAge.planetCalculate();
    $("#planet-output").text(planetOutput);
  });
});
