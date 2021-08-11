import firebase from 'firebase'

type Options = {
  path?: string
  url?: string
}

/** @module @qonsoll/firebase-services/storage */

/**
 * @info getStorageRef (15 Apr 2021) // CREATION DATE
 * @access private
 * @comment getStorageRef - function that return storage reference depending on provided option.
 * @since 10 Aug 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param {firebase.storage.Storage}    storage           The Firebase Storage service interface.
 * @param {Object}                      options           Object that configure function behaviour.
 * @param {string}                      [options.path]    File path in storage.
 * @param {string}                      [options.url]     URL file path.
 *
 * @returns {firebase.storage.Reference} - The reference to the given path.
 */

const getStorageRef = (storage: firebase.storage.Storage, options: Options) => {
  const { path, url } = options
  if (url) {
    return storage.refFromURL(url)
  }

  return storage.ref().child(<string>path)
}

export default getStorageRef
