const yearSeconds = 31536000;


export class SpaceAge {
  constructor(age) {
    this.age = age;
  }
  ageCalculate() {
    return this.age * yearSeconds;
    }
}

export class SpaceDate {
  constructor(date) {
    this.date = date;
  }
  dateCalculate() {
    return moment().diff(this.date, "s");
  }
}

export class PlanetAge {
  constructor(planet) {
    this.planet = planet;
  }
  planetCalculate() {

    if (this.planet === "mercury") {

      return (28 / 0.24).toFixed();
    } else if (this.planet === "venus") {
      return (28 / 0.62).toFixed();
    }

  }
}
