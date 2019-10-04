"use strict";

var _commentSerializer = _interopRequireDefault(require("../../services/serializers/comment-serializer"));

var _chai = _interopRequireDefault(require("chai"));

var _chaiAsPromised = _interopRequireDefault(require("chai-as-promised"));

var _createComment = _interopRequireDefault(require("./data-providers/create-comment"));

var _comment = _interopRequireDefault(require("./data-providers/comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_chai["default"].use(_chaiAsPromised["default"]);

describe('Should test commentSerailizer',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee4() {
  var comment;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          comment = (0, _createComment["default"])(_comment["default"]);
          it('check throwing error when from arguments provided',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var wrongInput;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    wrongInput = {};
                    _context.next = 3;
                    return _chai["default"].expect((0, _commentSerializer["default"])(wrongInput)).to.be.rejectedWith(Error);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })));
          it('check returning value when proper arguments provided',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return (0, _commentSerializer["default"])(comment);

                  case 2:
                    data = _context2.sent;

                    _chai["default"].expect(data.id).to.be.eq(_comment["default"].id);

                    _chai["default"].expect(data.author).to.be.eq(_comment["default"].name);

                    _chai["default"].expect(data.comment).to.be.eq(_comment["default"].comment);

                    _chai["default"].expect(data.name).to.be.an('undefined');

                    _chai["default"].expect(data.email).to.be.an('undefined');

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })));
          it('check returning value when proper arguments provided with deep = false',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return (0, _commentSerializer["default"])(comment, false);

                  case 2:
                    data = _context3.sent;

                    _chai["default"].expect(data.author).to.be.eq(_comment["default"].name);

                    _chai["default"].expect(data.comment).to.be.eq(_comment["default"].comment);

                    _chai["default"].expect(data.name).to.be.an('undefined');

                    _chai["default"].expect(data.email).to.be.an('undefined');

                    _chai["default"].expect(data.id).to.be.an('undefined');

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          })));

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
})));
//# sourceMappingURL=comment-serializer.spec.js.map