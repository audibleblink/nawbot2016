"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var formatForOffline = function formatForOffline(reply, presence) {
  if (presence.lastSeen) {
    var date = formatDate(new Date(Date.parse(presence.lastSeen.timestamp)));
    reply += "Last seen: " + date + "\\nPlaying: " + presence.lastSeen.titleName;
  }
  return reply;
};

var formatForOnline = function formatForOnline(reply, presence) {
  var consoles = presence.devices;
  consoles.forEach(function (console) {
    reply += "Playing: ";
    if (console.type === "Xbox360") {
      reply += console.titles[0].name;
    } else if (console.type === "XboxOne") {
      var game = console.titles.filter(function (app) {
        return app.placement === "Full";
      })[0];
      reply += game.name;
    }
    reply += " on " + console.type;
  });
  return reply;
};

var formatDate = function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ":" + minutes;
  return strTime + " on " + (date.getMonth() + 1) + "." + date.getDate() + "." + date.getFullYear();
};

exports.formatForOnline = formatForOnline;
exports.formatForOffline = formatForOffline;