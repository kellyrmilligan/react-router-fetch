/**
 * processes the props matched from react router 2
 * and calls fetch
 *
 * @param  {Object} props
 * @param  {boolean} isInitial
 * @param  {Object} options
 * @returns {Promise}
 */
function routeResovler (props, isInitial, options) {
  if (isInitial) {
    return Promise.resolve()
  }

  const promises = props.components
    .filter(component => component.fetch)
    .map(component => component.fetch(props.params, props.location.query, options))

  if (promises && promises.length > 0) {
    return Promise.all(promises)
  } else {
    return Promise.resolve(promises)
  }
}

export default routeResovler
