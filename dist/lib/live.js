"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareResponse = exports.getPresence = exports.getXuid = undefined;

var _nodeXbox = require("node-xbox");

var _nodeXbox2 = _interopRequireDefault(_nodeXbox);

var _liveViews = require("./live-views");

var Views = _interopRequireWildcard(_liveViews);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = (0, _nodeXbox2.default)(process.env.XBOX_API);

var getXuid = function getXuid(gamertag) {
  return new Promise(function (resolve, reject) {
    client.profile.xuid(gamertag, function (err, data) {
      err ? reject(new Error(err)) : resolve(data);
    });
  });
};

var getPresence = function getPresence(xuid) {
  return new Promise(function (resolve, reject) {
    client.profile.presence(xuid, function (err, data) {
      err ? reject(new Error(err)) : resolve(data);
    });
  });
};

var prepareResponse = function prepareResponse(presenceJson, gamertag) {
  var presence = JSON.parse(presenceJson),
      reply = gamertag + " is " + presence.state + "\\n";

  if (presence.state === "Offline") {
    reply = Views.formatForOffline(reply, presence);
  } else if (presence.state === "Online") {
    reply = Views.formatForOnline(reply, presence);
  }

  return reply;
};

exports.getXuid = getXuid;
exports.getPresence = getPresence;
exports.prepareResponse = prepareResponse;