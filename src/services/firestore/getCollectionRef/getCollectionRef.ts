import firebase from 'firebase/app'

/** @module @qonsoll/firebase-services/firestore */

/**
 * @info getCollectionRef (06 Apr 2021) // CREATION DATE
 *
 * @comment getCollectionRef - function for get collection reference.
 * @access private
 * @since 05 Aug 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param 		firestore		The Cloud Firestore service interface.
 * @param    	path     		Path to collection.
 *
 * @return {CollectionReference} The CollectionReference instance.
 */

const getCollectionRef = (
  firestore: firebase.firestore.Firestore,
  path: string
) => firestore.collection(path)

export default getCollectionRef
