react-router-fetch
=====================
module to loop through matched react router handler to call fetch methods for specifying data needs at the handler level

[![Dependency Status](https://david-dm.org/kellyrmilligan/react-router-fetch.svg)](https://david-dm.org/kellyrmilligan/react-router-fetch)
[![Build Status](https://travis-ci.org/kellyrmilligan/react-router-fetch.svg?branch=master)](https://travis-ci.org/kellyrmilligan/react-router-fetch)
[![Coverage Status](https://coveralls.io/repos/github/kellyrmilligan/react-router-fetch/badge.svg?branch=master)](https://coveralls.io/github/kellyrmilligan/react-router-fetch?branch=master)

## Why?
I wanted a nice and contained module to be able to initiate requests for route handlers in an app, so that the data would be loaded before the route handler was rendered. This module doesn't accomplish that on it's own, but can be used as a part of a solution to that problem.

it is currently used in
[react-redux-transition-manager](https://github.com/kellyrmilligan/react-redux-transition-manager) to facilitate requesting page level data needs and rendering a loading indicator while the route transition is occurring.


## Usage
react router fetch understands the structure of render props for the `match` function in react router.
```js
match({ routes, location: url }, (err, redirect, props) => {
  reactRouterFetch(props, false, { key: '1234' })
    .then(
      () => console.log('done'),
      (err) => console.log(err)
    )
})
```

## Specifying route data needs
This allows you to specify at the route handler level what data that route needs via a static fetch method. The fetching itself should be wired up to redux via thunks, or whatever way you want to handle that. the only requirement is that the static method returns a promise.

```js
import React, { Component } from 'react'

class Page extends Component {

  static fetch(params, query, options) {
    //return a promise to be resolved later, superagent as an example
    return request('GET', '/search')
    //you could also use redux and dispatch an action, then map a component to the state to use in render
  }

  render() {
    //your stuff
  }
}

```


This module is intended to be a building block for other modules or as a low level part of your application. I wanted something simple that was promise based.
