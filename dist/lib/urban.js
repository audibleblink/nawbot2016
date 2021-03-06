"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = undefined;

var _urban = require("urban");

var _urban2 = _interopRequireDefault(_urban);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = exports.search = function search(input) {
  return new Promise(function (resolve, reject) {
    var term = (0, _urban2.default)(input);
    term.first(function (word) {
      word ? resolve(word.definition) : resolve("Word not found");
    });
  });
};