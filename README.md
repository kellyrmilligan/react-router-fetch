# React Router Fetch
[![Dependency Status](https://david-dm.org/kellyrmilligan/react-router-fetch.svg)](https://david-dm.org/kellyrmilligan/react-router-fetch)
[![Build Status](https://travis-ci.org/kellyrmilligan/react-router-fetch.svg?branch=master)](https://travis-ci.org/kellyrmilligan/react-router-fetch)
[![Coverage Status](https://coveralls.io/repos/github/kellyrmilligan/react-router-fetch/badge.svg?branch=master)](https://coveralls.io/github/kellyrmilligan/react-router-fetch?branch=master)

Loops through matched routes from react router and calls a static fetch function on each handler.  The static fetch function should return a promise. This will return a promise that will resolve/reject when all other promises are finished.

### usage

react router fetch understands the structure of render props for the `match` function in react router.

```js
match({ routes, location: url }, (err, redirect, props) => {
  routeResovler(props, isInitial, [options])
    .then(() => {
      //do something when it's all done
    })
```
