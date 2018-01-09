import { SpaceAge, SpaceDate, PlanetAge } from './../src/js/age.js';

describe('SpaceAge', function() {

  let newSpaceAge;
  let newPlanetAge;

  beforeEach(function() {
    newSpaceAge = new SpaceAge(28);
    newPlanetAge = new PlanetAge(28);
    // newSpaceDate = new SpaceDate();

  });

  it('should take the age inputted by the user and convert it into seconds', function() {
    expect(newSpaceAge.ageCalculate()).toEqual(883008000)
  });

  // it('should take the date inputted by the user and output their age in seconds', function () {
  //   expect(newSpaceDate.dateCalculate()).toEqual()
  // });


  it('should take the age inputted by the user and divide it by .24 to output their age on Mercury', function () {
    expect(newPlanetAge.planetCalculate('Mercury')).toEqual("117")
  })

  it('should take the age inputted by the user and divide it by .62 to output their age on Venus', function () {
    expect(newPlanetAge.planetCalculate('Venus')).toEqual("45")
  })

  it('should take the age inputted by the user and multiply it by 1.88 to output their age on Mars',
  function () {
    expect(newPlanetAge.planetCalculate('Mars')).toEqual("53")
  })

  it('should take the age inputted by the user and multiply it by 11.86 to output their age on Jupiter',
  function () {
    expect(newPlanetAge.planetCalculate('Jupiter')).toEqual("332")
  })
});
