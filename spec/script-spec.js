import { User } from './../js/script.js';
const date1 = new Date("1/6/2017");
const date2 = new Date("1/6/2018");
const user1 = new User(date1, date2);
describe('user1', function() {
  it('one year  = 31,536,000 seconds', function() {
    expect(user1.youTime()).toEqual(31536000);
  });
  it('one year on earth = 7589376 seconds on mercury ', function() {
    expect(user1.mercury()).toEqual(7568640);
  });
  it('one year on earth = 19552320 seconds on venus ', function() {
    alert(user1.venus());
    expect(user1.venus()).toEqual(19552320);
  });
});
