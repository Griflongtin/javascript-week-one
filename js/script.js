export class User {
  constructor(born, date){
    this.born = born;
    this.date = date;
    this.days = 0;
    this.merc = 0;
    this.ven = 0;
  }
  youTime() {
    const differnst = Math.abs(this.born.getTime() - this.date.getTime());
    const days = Math.ceil(differnst / (1000 * 3600 * 24));
    this.days = days * 86400;
    return this.days;
  }
  mercury() {
    this.merc = this.days * 0.24;
    return this.merc;
  }
  venus() {
    this.ven = this.days * 0.62;
    return this.ven;
  }
}
