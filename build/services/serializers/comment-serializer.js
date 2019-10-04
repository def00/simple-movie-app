"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _movieSerializer = _interopRequireDefault(require("./movie-serializer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(_x) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(comment) {
    var deep,
        movie,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            deep = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;

            if (!(deep && (typeof comment.movie !== 'function' || !comment.id))) {
              _context.next = 3;
              break;
            }

            throw new Error('Wrong input data for serializer');

          case 3:
            if (!deep) {
              _context.next = 12;
              break;
            }

            _context.t0 = _movieSerializer["default"];
            _context.next = 7;
            return comment.movie();

          case 7:
            _context.t1 = _context.sent;
            _context.next = 10;
            return (0, _context.t0)(_context.t1, false);

          case 10:
            movie = _context.sent;
            return _context.abrupt("return", {
              id: comment.id,
              author: comment.name,
              comment: comment.comment,
              movie: movie || null
            });

          case 12:
            return _context.abrupt("return", {
              author: comment.name,
              comment: comment.comment
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}
//# sourceMappingURL=comment-serializer.js.map