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
