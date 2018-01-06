import { User } from './../js/script.js';
const date1 = new Date("1/6/2017");
const date2 = new Date("1/6/2018");
describe('user1', function() {
  it('one year  = 31,536,000 seconds', function() {
    const user1 = new User(date1, date2);
    expect(user1.youTime()).toEqual(31536000);
  });
  it('one year on earth = 7589376 seconds on mercury ', function() {
    const user1 = new User(date1, date2);
    user1.youTime();
    expect(user1.mercury()).toEqual(7568640);
  });
});
