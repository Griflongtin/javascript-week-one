export class User {
  constructor(born, date){
    this.born = born;
    this.date = date;
    this.sDay = 31536000;
    this.ydays = 365;
    this.days = 0;
    this.merc = 0;
  }
  youTime() {
    const differnst = Math.abs(this.born.getTime() - this.date.getTime());
    const days = Math.ceil(differnst / (1000 * 3600 * 24));
    this.days = days * 86400;
    return this.days;
  }
  mercury() {
    this.merc = this.sDay / (this.ydays * 0.24);
    alert(this.marc);
    return this.merc;
  }
}
