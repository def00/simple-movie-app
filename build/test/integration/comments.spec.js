"use strict";

var _app = _interopRequireDefault(require("../../app"));

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

process.env.NODE_ENV = 'test';

_chai["default"].use(_chaiHttp["default"]);

describe('Should check comments routes',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee5() {
  return regeneratorRuntime.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          it('check GET /comments reponse',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var request, response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    request = _chai["default"].request(_app["default"]);
                    _context.next = 3;
                    return request.get('/comments');

                  case 3:
                    response = _context.sent;

                    _chai["default"].expect(response.status).to.be.eq(200);

                    _chai["default"].expect(response.body).to.an('array');

                    _chai["default"].expect(response.body).to.length(4);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })));
          it('check POST /comments response with wrong post data',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var request, response;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    request = _chai["default"].request(_app["default"]);
                    _context2.next = 3;
                    return request.post('/comments').send({
                      movie_id: 1,
                      email: 'test',
                      author: 'Test',
                      comment: 'test'
                    });

                  case 3:
                    response = _context2.sent;

                    _chai["default"].expect(response.status).to.be.eq(422);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })));
          it('check POST /comments response',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var request, response;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    request = _chai["default"].request(_app["default"]);
                    _context3.next = 3;
                    return request.post('/comments').send({
                      movie_id: 1,
                      email: 'test@example.org',
                      author: 'Test',
                      comment: 'test'
                    });

                  case 3:
                    response = _context3.sent;

                    _chai["default"].expect(response.status).to.be.eq(201);

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          })));
          it('check GET /comments reponse after saving comment',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var request, response;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    request = _chai["default"].request(_app["default"]);
                    _context4.next = 3;
                    return request.get('/comments');

                  case 3:
                    response = _context4.sent;

                    _chai["default"].expect(response.status).to.be.eq(200);

                    _chai["default"].expect(response.body).to.an('array');

                    _chai["default"].expect(response.body).to.length(5);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          })));

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  }, _callee5);
})));
//# sourceMappingURL=comments.spec.js.map