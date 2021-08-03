import firestore from './'

/**
 * @info getDocumentData (06 Apr 2021) // CREATION DATE
 *
 * @comment getDocumentData - function for get data from document
 *
 * @since 06 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {string}     path      Path to collection
 * @param {string}     id        Path of document
 *
 * @return {object} object of document's data
 */

const getDocumentData = async (path, id) => {
  const data = await firestore.collection(path).doc(id).get()
  return data.data()
}
export default getDocumentData
