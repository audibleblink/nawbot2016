"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bot = require("./bot");

var bot = _interopRequireWildcard(_bot);

var _bodyParser = require("body-parser");

var bodyParser = _interopRequireWildcard(_bodyParser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/:anything", function (req, res) {
  res.send("Hi! I'm Nawbot");
});

app.post("/:anything", bot.respond);

var server = app.listen(5000);