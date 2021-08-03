import firestore from './'

/**
 * @info getDocumentRef (06 Apr 2021) // CREATION DATE
 *
 * @comment getDocumentRef - function for get document reference.
 *
 * @since 06 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {string}     path      Path to collection
 *
 * @return {DocumentReference<DocumentData>} object of document's data
 */

const getDocumentRef = (path) => firestore.collection(path).doc()

export default getDocumentRef
