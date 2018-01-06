import { SpaceAge } from './../src/js/age.js';

describe('SpaceAge', function() {

  let newSpaceAge;

  beforeEach(function() {
    newSpaceAge = new SpaceAge(28);
  });

  it('should take the age inputted by the user and convert it into seconds', function() {
    expect(newSpaceAge.ageCalculate()).toEqual(883008000)
  })
});
