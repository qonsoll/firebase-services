import _ from 'lodash'
import firebase from 'firebase/app'
import getDocumentRef from '../getDocumentRef'

type option = {
  idField?: string
  withoutUndef?: boolean
}

/** @module @qonsoll/firebase-services/firestore */

/**
 * @info createDocument (06 Apr 2021) // CREATION DATE
 * @access private
 * @comment
 *    createDocument - function for creating document in firestore with option to delete all undefined|null fields
 *    inside data argument and possibility to called field wich contain id of document.
 * @since 15 Aug 2021 ( v.0.0.3 ) // LAST-EDIT DATE
 *
 * @param {firebase.firestore.Firestore}  firestore                  The Cloud Firestore service interface.
 * @param {string}                        path                       Path to a collection.
 * @param {object}                        data                       An Object containing the data for the new document.
 * @param {object}                        [options]                  An object to configure the method behavior.
 * @param {object}                        [options.idField]          Name of field with document id.
 * @param {object}                        [options.withoutUndef]     se to remove undefined field in data object.
 *
 * @return {Promise<DocumentReference<DocumentData>> | object}
 */

const createDocument = async (
  firestore: firebase.firestore.Firestore,
  path: string,
  data = {},
  options: option = {}
) => {
  const { idField = 'id', withoutUndef = true } = options
  if (idField) {
    const docId = getDocumentRef(firestore, path).id
    const buf = withoutUndef
      ? _.pickBy({ ...data, [idField]: docId }, _.identity)
      : { ...data, [idField]: docId }
    await firestore.collection(path).doc(docId).set(buf)
    return buf
  } else {
    return firestore
      .collection(path)
      .add(withoutUndef ? _.omitBy(data, _.isNil) : data)
  }
}

export default createDocument
