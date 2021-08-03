import storage from '../'

/**
 * @info storageRef (15 Apr 2021) // CREATION DATE
 *
 * @since 15 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {Object}    options
 * @param {string}    [options.path]    File path in storage.
 * @param {string}    [options.url]     URL file path.
 *
 * @returns {firebase.storage.Reference} - The reference to the given path.
 */

const storageRef = (options) => {
  const { path, url } = options
  if (url) {
    return storage.refFromURL(url)
  }
  return storage.ref().child(path)
}

export default storageRef
