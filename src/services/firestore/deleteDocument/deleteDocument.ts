import firebase from 'firebase/app'

/** @module @qonsoll/firebase-services/firestore */

/**
 * @info deleteDocument (06 Apr 2021) // CREATION DATE
 *
 * @comment deleteDocument - function for deleting document from firestore.
 *
 * @since 15 Aug 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param {firebase.firestore.Firestore}  firestore   The Cloud Firestore service interface.
 * @param {string}                        path        Path to a collection.
 * @param {string}                        id     	    Path to a document.
 *
 * @return {Promise<void>}
 */

const deleteDocument = (
  firestore: firebase.firestore.Firestore,
  path: string,
  id: string
) => {
  return firestore.collection(path).doc(id).delete()
}

export default deleteDocument
