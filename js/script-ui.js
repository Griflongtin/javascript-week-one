import { User } from './../js/script.js';
const date1 = new Date("1/5/2017");
const date2 = new Date(moment().format('MM-DD-YYYY'));
const testOne = new User(date1, date2);
alert(testOne.youTime());
