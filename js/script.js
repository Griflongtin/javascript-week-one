export class User {
  constructor(born, date){
    this.born = born;
    this.date = date;
  }
  youTime() {
    const differnst = Math.abs(this.born.getTime() - this.date.getTime());
    const days = Math.ceil(differnst / (1000 * 3600 * 24));
    return days * 86400;
  }
}
