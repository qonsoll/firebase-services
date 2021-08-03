import firebase from 'firebase'

/**
 * @info getCollectionRef (06 Apr 2021) // CREATION DATE
 *
 * @comment getCollectionRef - function for get collection reference.
 *
 * @since 06 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {string}     path      Path to collection
 *
 * @return {CollectionReference} object of document's data
 */

const getCollectionRef = (path) => firebase.firestore().collection(path)

export default getCollectionRef
