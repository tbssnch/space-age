const yearSeconds = 31536000;


export class SpaceAge {
  constructor(age) {
    this.age = age;
  }
  ageCalculate() {
    return this.age * yearSeconds;
    console.log()
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
  constructor(planetAge) {
    this.planetAge = planetAge;

  }

  planetCalculate(planet) {
    if (planet === "Mercury") {
      return (this.planetAge / 0.24).toFixed();
    } else if (planet === "Venus") {
      return (this.planetAge / 0.62).toFixed();
    }
    else if (planet === "Mars") {
      return (this.planetAge * 1.88).toFixed();
    }
    else if (planet === "Jupiter") {
      return (this.planetAge * 11.86).toFixed();
    }
  }
}
