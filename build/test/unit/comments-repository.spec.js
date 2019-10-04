"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

var _commentsRepository = _interopRequireDefault(require("../../repositories/comments-repository"));

var _comment = _interopRequireDefault(require("../../models/comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Should check CommentsRepository',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee5() {
  var repository, queryMockService;
  return regeneratorRuntime.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          repository = new _commentsRepository["default"](_comment["default"]);
          queryMockService = {
            insert: function () {
              var _insert = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              function insert() {
                return _insert.apply(this, arguments);
              }

              return insert;
            }(),
            joinRelation: function () {
              var _joinRelation = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              function joinRelation() {
                return _joinRelation.apply(this, arguments);
              }

              return joinRelation;
            }()
          };
          it('check calling create function',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var mock, queryMock;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    mock = _sinon["default"].mock(_comment["default"]);
                    queryMock = _sinon["default"].mock(queryMockService);
                    mock.expects("query").returns(queryMockService).once();
                    queryMock.expects("insert").once();
                    _context3.next = 6;
                    return repository.create();

                  case 6:
                    mock.verify();
                    mock.restore();
                    queryMock.restore();

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          })));
          it('check calling list function',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var mock, queryMock;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    mock = _sinon["default"].mock(_comment["default"]);
                    queryMock = _sinon["default"].mock(queryMockService);
                    mock.expects("query").returns(queryMockService).once();
                    queryMock.expects("joinRelation").withArgs('movie').once();
                    _context4.next = 6;
                    return repository.listAll();

                  case 6:
                    mock.verify();
                    mock.restore();
                    queryMock.restore();

                  case 9:
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
//# sourceMappingURL=comments-repository.spec.js.map