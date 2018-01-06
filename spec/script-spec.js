import { User } from './../js/script.js';
const date1 = new Date("1/5/2017");
const date2 = new Date(moment().format('MM-DD-YYYY'));
describe('user1', function() {
  it('on year  = 31,536,000', function() {
    const user1 = new User(date1, date2);
    alert('cool');
    expect(user1.youTime()).toEqual('31536000');
  });
});
