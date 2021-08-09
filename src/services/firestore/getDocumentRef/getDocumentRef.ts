import firebase from 'firebase/app'

/** @module @qonsoll/firebase-services/firestore */

/**
 * @info getDocumentRef (06 Apr 2021) // CREATION DATE
 * @access private
 * @comment getDocumentRef - function for get document reference.*
 * @since 08 Aug 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param 		firestore		The Cloud Firestore service interface.
 * @param     path      Path to collection
 *
 * @return {DocumentReference<DocumentData>} object of document's data
 */

const getDocumentRef = (
  firestore: firebase.firestore.Firestore,
  path: string
) => firestore.collection(path).doc()

export default getDocumentRef
