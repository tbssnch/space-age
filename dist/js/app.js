(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var yearSeconds = 31536000;

var SpaceAge = exports.SpaceAge = function () {
  function SpaceAge(age) {
    _classCallCheck(this, SpaceAge);

    this.age = age;
  }

  _createClass(SpaceAge, [{
    key: "ageCalculate",
    value: function ageCalculate() {
      return this.age * yearSeconds;
    }
  }]);

  return SpaceAge;
}();

var SpaceDates = exports.SpaceDates = function SpaceDates(dates) {
  _classCallCheck(this, SpaceDates);
};

},{}],2:[function(require,module,exports){
"use strict";

var _age = require("./../src/js/age.js");

// User Interface Logic:
$(function () {
  $("#date-input").submit(function (event) {
    event.preventDefault();
    var input = $("#user-input").val();
    var thisSpaceAge = new _age.SpaceAge(input);
    var output = thisSpaceAge.ageCalculate();
    $("#age-output").text(output);
  });
});

},{"./../src/js/age.js":1}]},{},[2]);