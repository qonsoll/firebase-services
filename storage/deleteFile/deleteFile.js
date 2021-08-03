import storage from '../'

/**
 * @info deleteURL (15 Apr 2021) // CREATION DATE
 *
 * @since 15 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {firebase.storage.Reference|string} reference       The reference to the given path.
 * @param {Object}                            [options]       An object to configure the method behavior.
 * @param {boolean}                           [options.url]   Set true if want to delete file using url not reference.
 *
 * @returns {Promise<any>} - A Promise that resolves if the deletion succeeded and rejects if it failed, including if the object didn't exist.
 */

const deleteFile = async (reference, options = {}) => {
  const { url = true } = options
  if (url) {
    return storage?.refFromURL(reference).delete()
  }
  return reference.delete()
}

export default deleteFile
