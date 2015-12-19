'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (queryString) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var defaults = {
    cx: cx,
    auth: auth,
    fileType: "jpg, png",
    q: queryString
  };

  var settings = Object.assign({}, defaults, options);

  return new Promise(function (resolve, reject) {
    customsearch.cse.list(settings, function (err, resp) {
      if (err) {
        resolve(err);
      } else {
        var imageUrl = resp.items[0].pagemap.cse_image[0].src;
        resolve(imageUrl);
      }
    });
  });
};

var _googleapis = require('googleapis');

var google = _interopRequireWildcard(_googleapis);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var customsearch = new google.customsearch('v1');

var auth = process.env.GOOGLE_TOKEN;
var cx = process.env.GOOGLE_CX;