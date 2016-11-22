/* global describe, it, expect, spyOn */

import routeResolver from 'lib/index'

describe('route-resolver', function () {
  it('can be imported', function () {
    expect(routeResolver).toBeTruthy()
  })
  it('will resolve right away if isInitial is true', function (done) {
    routeResolver({}, true)
      .then(() => {
        done()
      })
  })
  it('will call fetch on a route handler if it has one', function (done) {
    const handler = {
      fetch () {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, 1000, { test: '1234' })
        })
      }
    }
    const handler2 = {
      fetch () {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, 1000, { test: '1234' })
        })
      }
    }
    const props = {
      components: [
        handler,
        handler2
      ],
      params: {},
      location: {
        query: {}
      }
    }
    spyOn(handler, 'fetch').and.callThrough()
    routeResolver(props)
      .then((response) => {
        expect(handler.fetch).toHaveBeenCalled()
        done()
      })
  })
  it('will resolve right away if no handlers have fetch', function (done) {
    const handler = {
    }
    const props = {
      components: [
        handler
      ],
      params: {},
      location: {
        query: {}
      }
    }
    routeResolver(props)
      .then((promises) => {
        expect(promises.length).toBe(0)
        done()
      })
  })
})
