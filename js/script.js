function Test(test) {
  this.test = test;
}
Test.prototype.testFunction = function () {
  return this.test + " test";
};
exports.TestModule = test;
