export class User {
  constructor(born, date){
    this.born = born;
    this.date = date;
    this.days = 0;
    this.merc = 0;
    this.ven = 0;
    this.mar = 0;
    this.jup = 0;
    this.smallLeft = 0;
    this.marLeft = 0;
    this.jupLeft = 0;
    this.dead = 'died'
  }
  youTime() {
    const differnst = Math.abs(this.born.getTime() - this.date.getTime());
    const days = Math.ceil(differnst / (1000 * 3600 * 24));
    this.days = days * 86400;
    return this.days;
  }
  mercury() {
    this.merc = this.days / 0.24;
    return this.merc;
  }
  venus() {
    this.ven = this.days / 0.62;
    return this.ven;
  }
  mars() {
    this.mar = this.days / 1.88;
    return this.mar;
  }
  jupiter() {
    this.jup = this.days / 11.86;
    return this.jup;
  }
  smallerLifeLeft() {
    this.smallLeft = 2996000000 - (this.days + 240);
    if (this.smallLeft <= 0) {
      return this.dead;
    } else {
      return this.smallLeft;
    }
  }
  marsLifeLeft() {
    this.marLeft = 3469000000 - this.days;
    if (this.marLeft <= 0) {
      return this.dead;
    } else {
      return this.marLeft;
    }
  }
  jupiterLifeLeft() {
    this.jupLeft = 1577000000 - (this.days - 240);
    if (this.jupLeft <= 0) {
      return this.dead;
    } else {
      return this.jupLeft;
    }
  }
}
