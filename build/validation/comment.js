"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _movie = _interopRequireDefault(require("../models/movie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = [(0, _expressValidator.check)('email').isEmail().isLength({
  min: 1,
  max: 255
}), (0, _expressValidator.check)('author').isString().isLength({
  min: 1,
  max: 255
}), (0, _expressValidator.check)('comment').isString().isLength({
  min: 1
}), (0, _expressValidator.check)('movie_id').isNumeric(), (0, _expressValidator.body)('movie_id').custom(
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(id) {
    var movie;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (id) {
              _context.next = 2;
              break;
            }

            throw 'movie_id must not be empty';

          case 2:
            _context.next = 4;
            return _movie["default"].query().findById(id);

          case 4:
            movie = _context.sent;

            if (movie) {
              _context.next = 7;
              break;
            }

            throw 'Movie not found in DB';

          case 7:
            return _context.abrupt("return", movie);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())];
exports["default"] = _default;
//# sourceMappingURL=comment.js.map