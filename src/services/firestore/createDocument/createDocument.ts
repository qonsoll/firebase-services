import _ from 'lodash'
import firebase from 'firebase/app'
import getDocumentRef from '../getDocumentRef'

type option = {
  idField?: string | undefined | null | boolean
  withoutUndef?: boolean
  id?: string
}

/** @module @qonsoll/firebase-services/firestore */

/**
 * @info createDocument (06 Apr 2021) // CREATION DATE
 * @access private
 * @comment
 *    createDocument - function for creating document in firestore with option to delete all undefined|null fields
 *    inside data argument and possibility to called field wich contain id of document.
 * @since 17 Oct 2021 ( v.0.0.4 ) // LAST-EDIT DATE
 *
 * @param {firebase.firestore.Firestore}          firestore                  The Cloud Firestore service interface.
 * @param {string}                                path                       Path to a collection.
 * @param {object}                                data                       An Object containing the data for the new document.
 * @param {object}                                [options]                  An object to configure the method behavior.
 * @param {string | undefined | null | boolean}   [options.idField]          Name of field with document id.
 * @param {boolean}                               [options.withoutUndef]     se to remove undefined field in data object.
 * @param {string}                                [options.id]               se to remove undefined field in data object.
 *
 * @return {object}
 */

const createDocument = async (
  firestore: firebase.firestore.Firestore,
  path: string,
  data = {},
  options: option = {}
) => {
  const { idField = 'id', withoutUndef = true, id } = options

  if (!['string', 'undefined', 'null'].includes(typeof idField)) {
    if (idField) {
      throw new Error('idField must be a string | undefined | null | false')
    }
  }

  const normalizeData = (data) =>
    withoutUndef ? _.omitBy(data, _.isNil) : data

  if (idField) {
    const docId = id || getDocumentRef(firestore, path).id
    const docData = { ...data, [<any>idField]: docId }
    const buf = normalizeData(docData)
    await firestore.collection(path).doc(docId).set(buf)
    return buf
  }

  const buf = normalizeData(data)
  const snapshot = await firestore.collection(path).add(buf)
  return { ...buf, id: snapshot.id }
}

export default createDocument
