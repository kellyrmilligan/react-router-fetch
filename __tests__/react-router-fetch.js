'use strict';

var _index = require('lib/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('route-resolver', function () {
  it('can be imported', function () {
    expect(_index2.default).toBeTruthy();
  });
  it('will resolve right away if isInitial is true', function (done) {
    (0, _index2.default)({}, true).then(function () {
      done();
    });
  });
  it('will call fetch on a route handler if it has one', function (done) {
    var handler = {
      fetch: function fetch() {
        return new Promise(function (resolve, reject) {
          setTimeout(resolve, 1000, { test: '1234' });
        });
      }
    };
    var handler2 = {
      fetch: function fetch() {
        return new Promise(function (resolve, reject) {
          setTimeout(resolve, 1000, { test: '1234' });
        });
      }
    };
    var props = {
      components: [handler, handler2],
      params: {},
      location: {
        query: {}
      }
    };
    spyOn(handler, 'fetch').and.callThrough();
    (0, _index2.default)(props).then(function (response) {
      expect(handler.fetch).toHaveBeenCalled();
      done();
    });
  });
  it('will resolve right away if no handlers have fetch', function (done) {
    var handler = {};
    var props = {
      components: [handler],
      params: {},
      location: {
        query: {}
      }
    };
    (0, _index2.default)(props).then(function (promises) {
      expect(promises.length).toBe(0);
      done();
    });
  });
}); /* global describe, it, expect, spyOn */
//# sourceMappingURL=react-router-fetch.js.map