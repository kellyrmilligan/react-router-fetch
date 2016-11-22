# React Router Fetch

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
