import firebase from 'firebase'

/** @module @qonsoll/firebase-services/storage */

/**
 * @info getURL (15 Apr 2021) // CREATION DATE
 * @access private
 * @comment getURL - function that return storage reference depending on provided option.
 * @since 15 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {firebase.storage.Reference}    reference    The reference to the given path.
 *
 * @return {Promise<string|any>}   Url to file in firebase storage.
 */

const getURL = async (reference: firebase.storage.Reference) =>
  reference.getDownloadURL()

export default getURL
