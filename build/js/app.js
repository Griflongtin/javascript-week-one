(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
  function User(born, date) {
    _classCallCheck(this, User);

    this.born = born;
    this.date = date;
  }

  _createClass(User, [{
    key: "youTime",
    value: function youTime() {
      var differnst = Math.abs(this.born.getTime() - this.date.getTime());
      var days = Math.ceil(differnst / (1000 * 3600 * 24));
      return days * 86400;
    }
  }]);

  return User;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _script = require('./../js/script.js');

var date1 = new Date("1/5/2017");
var date2 = new Date(moment().format('MM-DD-YYYY'));
var testOne = new _script.User(date1, date2);
alert(testOne.youTime());

},{"./../js/script.js":1}]},{},[2]);
