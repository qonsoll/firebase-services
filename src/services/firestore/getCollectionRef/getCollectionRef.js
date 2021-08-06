/**
 * @info getCollectionRef (06 Apr 2021) // CREATION DATE
 *
 * @comment getCollectionRef - function for get collection reference.
 *
 * @since 05 Aug 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param {firebase.firestore.Firestore} 		firestore		The Cloud Firestore service interface.
 * @param {string}     											path     		Path to collection.
 *
 * @return {CollectionReference} object of document's data
 */

const getCollectionRef = (firestore, path) => firestore.collection(path)

export default getCollectionRef
