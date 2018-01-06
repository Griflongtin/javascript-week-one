import { User } from './../js/script.js';
const date1 = new Date("1/4/2017");
const date2 = new Date("1/4/2018");
const date3 = new Date("1/4/2017");
const date4 = new Date("1/4/3018");
const user1 = new User(date1, date2);
const userDead = new User(date3, date4);
const number = 1;
userDead.youTime();
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
  it('time left on merc and ven', function() {
    expect(user1.smallerLifeLeft()).toBeGreaterThan(number);
  });
  it('dead test for merc and ven', function() {
    expect(userDead.smallerLifeLeft()).toEqual('died');
  });
  it('time left on mars', function() {
    expect(user1.marsLifeLeft()).toBeGreaterThan(number);
  });
  it('dead test for mars', function() {
    expect(userDead.marsLifeLeft()).toEqual('died');
  });
  it('time left on mars', function() {
    expect(user1.jupiterLifeLeft()).toBeGreaterThan(number);
  });
  it('dead test for jupiter', function() {
    expect(userDead.jupiterLifeLeft()).toEqual('died');
  });
});
