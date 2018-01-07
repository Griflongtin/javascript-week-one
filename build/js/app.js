(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
  function User(born, today) {
    _classCallCheck(this, User);

    this.born = born;
    this.today = today;
    this.days = 0;
    this.merc = 0;
    this.ven = 0;
    this.mar = 0;
    this.jup = 0;
    this.smallLeft = 0;
    this.marLeft = 0;
    this.jupLeft = 0;
    this.dead = 'died';
  }

  _createClass(User, [{
    key: 'youTime',
    value: function youTime() {
      var born = new Date(this.born);
      var today = new Date(this.today);
      var differnst = Math.abs(born.getTime(born) - today.getTime(today));
      var days = Math.ceil(differnst / (1000 * 3600 * 24));
      this.days = days * 86400;
      return this.days;
    }
  }, {
    key: 'mercury',
    value: function mercury() {
      this.merc = this.days / 0.24;
      return this.merc;
    }
  }, {
    key: 'venus',
    value: function venus() {
      this.ven = this.days / 0.62;
      return this.ven;
    }
  }, {
    key: 'mars',
    value: function mars() {
      this.mar = this.days / 1.88;
      return this.mar;
    }
  }, {
    key: 'jupiter',
    value: function jupiter() {
      this.jup = this.days / 11.86;
      return this.jup;
    }
  }, {
    key: 'smallerLifeLeft',
    value: function smallerLifeLeft() {
      this.smallLeft = 2996000000 - (this.days + 240);
      if (this.smallLeft <= 0) {
        return this.dead;
      } else {
        return this.smallLeft;
      }
    }
  }, {
    key: 'marsLifeLeft',
    value: function marsLifeLeft() {
      this.marLeft = 3469000000 - this.days;
      if (this.marLeft <= 0) {
        return this.dead;
      } else {
        return this.marLeft;
      }
    }
  }, {
    key: 'jupiterLifeLeft',
    value: function jupiterLifeLeft() {
      this.jupLeft = 1577000000 - (this.days - 240);
      if (this.jupLeft <= 0) {
        return this.dead;
      } else {
        return this.jupLeft;
      }
    }
  }]);

  return User;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _script = require("./../js/script.js");

$(function () {
  $("#input-date").submit(function () {
    event.preventDefault();
    var born = $("#date-input-born").val();
    var user1 = new _script.User(born, '01-06-2018');
    $("#you-time").append(user1.youTime());
    $("#mercury").append(user1.mercury());
    $("#venus").append(user1.venus());
    $("#mars").append(user1.mars());
    $("#jupiter").append(user1.jupiter());
    $('#venus-time').append(user1.smallerLifeLeft());
    $("#mercury-time").append(user1.smallerLifeLeft());
    $("#mars-time").append(user1.marsLifeLeft());
    $("#jupiter-time").append(user1.jupiterLifeLeft());
  });
});

},{"./../js/script.js":1}]},{},[2]);
