/**
 * @info getURL (15 Apr 2021) // CREATION DATE
 *
 * @since 15 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {firebase.storage.Reference}    reference    The reference to the given path.
 *
 * @returns {Promise<string|any>}
 */

const getURL = (reference) => reference.getDownloadURL()

export default getURL
