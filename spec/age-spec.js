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

  beforeEach(function () {
    newPlanetAge = new PlanetAge(28);
  });

  it('should take the age inputted by the user and divide it by .24 to output their age on Mercury', function () {
    expect(newPlanetAge.planetCalculate()).toEqual("117")
  })

});
