import { storageRef, getURL } from '../'

/**
 * @info upload (15 Apr 2021) // CREATION DATE
 *
 * @since 15 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {Blob | Uint8Array | ArrayBuffer}   file     Selected files.
 * @param {string}                            [path]   Upload path.
 *
 * @returns {Promise<firebase.storage.UploadTask> | Promise<string | any>}
 */

async function upload(file, path) {
  const ref = storageRef({ path: path ? `${path}${file.name}` : file.name })
  const res = await ref.put(file)
  if (path) {
    return getURL(ref)
  }
  return res
}

export default upload
