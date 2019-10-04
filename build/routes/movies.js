"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

var _movie = _interopRequireDefault(require("../models/movie"));

var _moviesSearch = _interopRequireDefault(require("../services/movies-search"));

var _movieFactory = _interopRequireDefault(require("../services/movie-factory"));

var _movieSerializer = _interopRequireDefault(require("../services/serializers/movie-serializer"));

var _serializer = _interopRequireDefault(require("../services/serializers/serializer"));

var _moviesRepository = _interopRequireDefault(require("../repositories/movies-repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

var movieRepository = new _moviesRepository["default"](_movie["default"]);
var movieFactory = new _movieFactory["default"](movieRepository);
/* GET movies listing. */

router.get('/',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = res;
            _context.t1 = _serializer["default"];
            _context.next = 5;
            return movieRepository.listAll();

          case 5:
            _context.t2 = _context.sent;
            _context.t3 = _movieSerializer["default"];
            _context.next = 9;
            return (0, _context.t1)(_context.t2, _context.t3);

          case 9:
            _context.t4 = _context.sent;
            return _context.abrupt("return", _context.t0.json.call(_context.t0, _context.t4));

          case 13:
            _context.prev = 13;
            _context.t5 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json(_context.t5));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/* POST search for movies */

router.post('/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var movieData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return new _moviesSearch["default"](_requestPromiseNative["default"]).search(req.body.query);

          case 3:
            movieData = _context2.sent;

            if (!movieData) {
              _context2.next = 9;
              break;
            }

            _context2.next = 7;
            return movieFactory.create(movieData);

          case 7:
            if (!_context2.sent) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(201).send());

          case 9:
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json(_context2.t0.error));

          case 14:
            return _context2.abrupt("return", res.status(409).json('The movie is already in our db'));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=movies.js.map