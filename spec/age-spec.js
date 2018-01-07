import { SpaceAge, SpaceDate, PlanetAge } from './../src/js/age.js';

describe('SpaceAge', function() {

  let newSpaceAge;
  // let PlanetAge;

  beforeEach(function() {
    newSpaceAge = new SpaceAge(28);
    // newSpaceDate = new SpaceDate();

  });

  it('should take the age inputted by the user and convert it into seconds', function() {
    expect(newSpaceAge.ageCalculate()).toEqual(883008000)
  })

  // it('should take the date inputted by the user and output their age in seconds', function () {
  //   expect(newSpaceDate.dateCalculate()).toEqual()
  // })


});

describe('PlanetAge', function () {
  let newPlanetAge;


  it('should take the age inputted by the user and divide it by .24 to output their age on Mercury', function () {
    newPlanetAge = new PlanetAge('Mercury');
    expect(newPlanetAge.planetCalculate()).toEqual("117")
  })

  it('should take the age inputted by the user and divide it by .62 to output their age on Venus', function () {
    newPlanetAge = new PlanetAge('Venus');
    expect(newPlanetAge.planetCalculate()).toEqual("45")
  })

  it('should take the age inputted by the user and multiply it by 1.88 to output their age on Mars',
  function () {
    newPlanetAge = new PlanetAge('Mars');
    expect(newPlanetAge.planetCalculate()).toEqual("53")
  })

  it('should take the age inputted by the user and multiply it by 11.86 to output their age on Jupiter',
  function () {
    newPlanetAge = new PlanetAge('Jupiter');
    expect(newPlanetAge.planetCalculate()).toEqual("332")
  })
});
