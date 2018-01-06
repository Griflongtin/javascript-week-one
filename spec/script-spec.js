import { User } from './../js/script.js';
const date1 = new Date("1/4/2017");
const date2 = new Date("1/4/2018");
const user1 = new User(date1, date2);
const number = 1;
describe('user1', function() {
  it('one year  = 31536000 seconds', function() {
    expect(user1.youTime()).toEqual(31536000);
  });
  it('one year on earth = 131400000 seconds on mercury', function() {
    expect(user1.mercury()).toEqual(131400000);
  });
  it('one year on earth = 50864516.12903226 seconds on venus', function() {
    expect(user1.venus()).toEqual(50864516.12903226);
  });
  it('one year on earth = 16774468.085106384 seconds on mars', function() {
    expect(user1.mars()).toEqual(16774468.085106384);
  });
  it('one year on earth = 2659021.922428331 seconds on jupiter', function() {
    expect(user1.jupiter()).toEqual(2659021.922428331);
  });
  it('time left on merc', function() {
    if (user1.smallerLifeLeft() >= number) {
      alert(user1.smallerLifeLeft());
      expect(user1.smallerLifeLeft()).toBeGreaterThan(number);
    } else if (user1.smallerLifeLeft() === 'deid') {
      expect(user1.smallerLifeLeft()).toEqual('deid');
    } else {
      expect(number).toEqual(0);
    }
  });
});
