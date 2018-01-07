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
    if (this.planet === "Mercury") {
      return (28 / 0.24).toFixed();
    } else if (this.planet === "Venus") {
      return (28 / 0.62).toFixed();
    }
    else if (this.planet === "Mars") {
      return (28 * 1.88).toFixed();
    }

  }
}
