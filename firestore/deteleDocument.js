import firestore from './'

/**
 * @info deleteDocument (06 Apr 2021) // CREATION DATE
 *
 * @comment deleteDocument - function for deleting document from firestore.
 *
 * @since 06 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {string}     path     Path to a collection.
 * @param {string}     id     	Path to a document.
 *
 * @return {Promise<void>}
 */
const deleteDocument = (path, id) => {
  return firestore.collection(path).doc(id).delete()
}

export default deleteDocument
