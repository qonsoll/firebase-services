import firebase from 'firebase/app'

/** @module @qonsoll/firebase-services/firestore */

/**
 * @info deleteDocument (06 Apr 2021) // CREATION DATE
 *
 * @comment deleteDocument - function for deleting document from firestore.
 *
 * @since 23 Oct 2021 ( v.0.0.3 ) // LAST-EDIT DATE
 *
 * @param {firebase.firestore.Firestore}  firestore     The Cloud Firestore service interface.
 * @param {string}                        collection    Path to a collection.
 * @param {string}                        id     	      Id of document.
 *
 * @return {Promise<void>}
 */

const deleteDocument = (
  firestore: firebase.firestore.Firestore,
  collection: string,
  id: string
) => firestore.collection(collection).doc(id).delete()

export default deleteDocument
