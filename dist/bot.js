"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.respond = undefined;

var _live = require("./lib/live");

var XBL = _interopRequireWildcard(_live);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var respond = exports.respond = function respond(req, res) {

  var request = req.body,
      keyword = request.trigger_word,
      sourceUser = request.user_name,
      message = request.text;

  if (keyword == "!live") {
    (function () {
      var gamertag = message.replace(RegExp(keyword + " "), "");
      XBL.getXuid(gamertag).then(XBL.getPresence).then(function (presence) {
        return XBL.prepareResponse(presence, gamertag);
      }).then(function (response) {
        replyWith(response, res);
      }).catch(function (err) {
        replyWith(new Error(err), res);
      });
    })();
  }
};

var replyWith = function replyWith(body, res) {
  console.log("Replying with " + body);
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end("{\"text\": \"" + body + "\", \"unfurl_links\": true}");
};