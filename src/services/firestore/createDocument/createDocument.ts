import firebase from 'firebase/app'
import { removeUndef } from 'helpers'
import getDocumentRef from '../getDocumentRef'

type option<T extends string> = {
  idField?: string | undefined | null | boolean
  withoutUndef?: boolean
  id?: T
}
type dataType<P extends {}, T extends string> = Record<
  T | keyof P | string,
  string
>
/** @module @qonsoll/firebase-services/firestore */

/**
 * @info createDocument (06 Apr 2021) // CREATION DATE
 * @access private
 * @comment
 *    createDocument - function for creating document in firestore with option to delete all undefined|null fields
 *    inside data argument and possibility to called field which contain id of document.
 * @since 17 Oct 2021 ( v.0.0.4 ) // LAST-EDIT DATE
 *
 * @param {firebase.firestore.Firestore}          firestore                  The Cloud Firestore service interface.
 * @param {string}                                collection                 Path to a collection.
 * @param {object}                                data                       An Object containing the data for the new document.
 * @param {object}                                [options]                  An object to configure the method behavior.
 * @param {string | undefined | null | boolean}   [options.idField]          Name of field with document id.
 * @param {boolean}                               [options.withoutUndef]     use to remove undefined field in data object.
 * @param {string}                                [options.id]               use to set specific id for document on create.
 *
 * @return {Promise<object>}
 */
const createDocument = async <P extends {}, T extends string>(
  firestore: firebase.firestore.Firestore,
  collection: string,
  data = <P>{},
  options: option<T> = {}
) => {
  const { idField = 'id', withoutUndef = true, id } = options

  if (!['string', 'undefined'].includes(typeof idField) && idField) {
    throw new Error('idField must be a string | undefined | null | false')
  }

  const docId = id || getDocumentRef(firestore, collection).id
  const docData = idField ? { ...data, [<string>idField]: docId } : data
  const normalizedData = removeUndef(withoutUndef, docData)
  await firestore.collection(collection).doc(docId).set(normalizedData)
  return <dataType<P, T>>normalizedData
}

export default createDocument
