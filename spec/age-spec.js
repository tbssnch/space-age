import { SpaceAge, SpaceDate } from './../src/js/age.js';

describe('SpaceAge', function() {

  let newSpaceAge;
  // let newSpaceDate;

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
