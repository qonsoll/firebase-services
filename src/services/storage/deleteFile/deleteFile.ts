import firebase from 'firebase/app'
import getStorageRef from '../getStorageRef'

type Options = {
  path?: string
  url?: string
}

/** @module @qonsoll/firebase-services/storage */

/**
 * @info deleteURL (15 Apr 2021) // CREATION DATE
 *
 * @since 15 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {firebase.storage.Storage}      storage           The reference to the given path.
 * @param {Object}                        [options]         An object to configure the method behavior.
 * @param {string}                        [options.path]    File path in storage.
 * @param {string}                        [options.url]     URL file path.
 *
 * @returns {Promise<any | boolean>} - A Promise that resolves if the deletion succeeded and rejects if it failed,
 * including if the object didn't exist.
 */
const deleteFile = (storage: firebase.storage.Storage, options: Options) => {
  const { path, url } = options
  if (url) {
    return storage.refFromURL(url).delete()
  }

  return getStorageRef(storage, { path }).delete()
}

export default deleteFile
