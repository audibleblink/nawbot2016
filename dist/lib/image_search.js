"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (queryString) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var url = buildUrl(queryString, options);

  return new Promise(function (resolve, reject) {
    request.get(url, function (err, resp, body) {
      if (err) {
        reject(err);
      } else {
        try {
          var imageUrl = JSON.parse(body).items[0].pagemap.cse_image[0].src;
          resolve(imageUrl);
        } catch (e) {
          resolve("No images found");
        }
      }
    });
  });
};

var _request = require("request");

var request = _interopRequireWildcard(_request);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var auth = encodeURIComponent(process.env.GOOGLE_TOKEN);
var cx = encodeURIComponent(process.env.GOOGLE_CX);
var baseUri = "https://www.googleapis.com/customsearch/v1";

var buildUrl = function buildUrl(query, options) {
  var defaults = { fileType: "jpg, png" };
  var settings = Object.assign({}, defaults, options);
  return baseUri + "?key=" + auth + "&cx=" + cx + "&q=" + query + "&fileType=" + settings.fileType;
};