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

export class Planet {
  constructor(planet) {
    this.planet = planet;
  }
}

export class PlanetAge {
  constructor(planetAge) {
    this.planetAge = planetAge;
  }

  planetCalculate() {
    if (this.planet === "Mercury") {
      return (this.planetAge / 0.24).toFixed();
    } else if (this.planet === "Venus") {
      return (this.planetAge / 0.62).toFixed();
    }
    else if (this.planet === "Mars") {
      return (this.planetAge * 1.88).toFixed();
    }
    else if (this.planet === "Jupiter") {
      return (this.planetAge * 11.86).toFixed();
    }
  }
}
