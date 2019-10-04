"use strict";

var _sinon = _interopRequireDefault(require("sinon"));

var _moviesRepository = _interopRequireDefault(require("../../repositories/movies-repository"));

var _movie = _interopRequireDefault(require("../../models/movie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Should check MoviesRepository',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee6() {
  var repository, queryMockService;
  return regeneratorRuntime.wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          repository = new _moviesRepository["default"](_movie["default"]);
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
            where: function () {
              var _where = _asyncToGenerator(
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

              function where() {
                return _where.apply(this, arguments);
              }

              return where;
            }()
          };
          it('check calling create method',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var mock, queryMock;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    mock = _sinon["default"].mock(_movie["default"]);
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
          it('check calling listAll method',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var mock;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    mock = _sinon["default"].mock(_movie["default"]);
                    mock.expects("query").returns(queryMockService).once();
                    _context4.next = 4;
                    return repository.listAll();

                  case 4:
                    mock.verify();
                    mock.restore();

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          })));
          it('check calling existsInDb method',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var mock, queryMock;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    mock = _sinon["default"].mock(_movie["default"]);
                    queryMock = _sinon["default"].mock(queryMockService);
                    mock.expects("query").returns(queryMockService).once();
                    queryMock.expects("where").once();
                    _context5.next = 6;
                    return repository.existsInDb(null);

                  case 6:
                    mock.verify();
                    mock.restore();

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          })));

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  }, _callee6);
})));
//# sourceMappingURL=movies-repository.spec.js.map