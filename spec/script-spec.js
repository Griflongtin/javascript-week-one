import { Test } from './../js/script.js';

describe('Test', function() {
  it('test', function() {
    var test = new Test('test')
    expect(test.testFunction()).toEqual('test test')
  });
});
