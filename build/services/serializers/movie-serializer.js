"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _commentSerializer = _interopRequireDefault(require("./comment-serializer"));

var _serializer = _interopRequireDefault(require("./serializer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(_x) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(movie) {
    var deep,
        comments,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            deep = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;

            if (!(deep && (typeof movie.comments !== 'function' || !movie.id))) {
              _context.next = 3;
              break;
            }

            throw new Error('Wrong input data for serializer');

          case 3:
            if (!deep) {
              _context.next = 13;
              break;
            }

            _context.t0 = _serializer["default"];
            _context.next = 7;
            return movie.comments();

          case 7:
            _context.t1 = _context.sent;

            _context.t2 = function (comment) {
              return (0, _commentSerializer["default"])(comment, false);
            };

            _context.next = 11;
            return (0, _context.t0)(_context.t1, _context.t2);

          case 11:
            comments = _context.sent;
            return _context.abrupt("return", {
              id: movie.id,
              title: movie.title,
              year: movie.year,
              genre: movie.genre,
              country: movie.country,
              plot: movie.plot,
              comments: comments || []
            });

          case 13:
            return _context.abrupt("return", {
              title: movie.title,
              year: movie.year
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}
//# sourceMappingURL=movie-serializer.js.map