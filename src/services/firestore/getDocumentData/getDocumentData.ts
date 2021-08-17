import firebase from 'firebase/app'

/** @module @qonsoll/firebase-services/firestore */

/**
 * @info getDocumentData (06 Apr 2021) // CREATION DATE
 *
 * @comment getDocumentData - function for get data from document.
 *
 * @since 06 Apr 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param {firebase.firestore.Firestore}  firestore   The Cloud Firestore service interface.
 * @param {string}                        path        Path to collection
 * @param {string}                        id          Path of document
 *
 * @return {object} object of document's data
 */

const getDocumentData = async (
  firestore: firebase.firestore.Firestore,
  path: string,
  id: string
) => {
  const data = await firestore.collection(path).doc(id).get()
  return data.data()
}
export default getDocumentData
