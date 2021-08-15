import firebase from 'firebase/app'
import { getStorageRef, getURL } from '../'

/** @module @qonsoll/firebase-services/storage */

/**
 * @info upload (15 Apr 2021) // CREATION DATE
 * @access private
 * @since 11 Aug 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param    storage  The Firebase Storage service interface.
 * @param    file     Selected files.
 * @param    [path]   Upload path.
 *
 * @returns {Promise<string|any> | firebase.storage.UploadTaskSnapshot}
 */
const upload = async (
  storage: firebase.storage.Storage,
  file: File,
  path?: string
) => {
  const ref = getStorageRef(storage, {
    path: path ? `${path}${file.name}` : file.name
  })
  const res = await ref.put(file)
  if (path) {
    return getURL(ref)
  }
  return res
}

export default upload
