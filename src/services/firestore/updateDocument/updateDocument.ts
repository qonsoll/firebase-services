import firebase from 'firebase/app'
import _ from 'lodash'
import getDocumentRef from '../getDocumentRef'

type option = {
  merge?: boolean
  withoutUndef?: boolean
}

/** @module @qonsoll/firebase-services/firestore */

/**
 * @info updateDocument (06 Apr 2021) // CREATION DATE
 *
 * @since 15 Apr 2021 ( v.0.0.4 ) // LAST-EDIT DATE
 *
 * @param {firebase.firestore.Firestore}  firestore                 The Cloud Firestore service interface.
 * @param {string}                        collection                Path to a collection.
 * @param {string}                        id     	                  Id of document.
 * @param {object}                        data                      Data for the document.
 * @param {Object}                        [options]                 An object to configure the method behavior.
 * @param {boolean}                       [options.merge]           Use to update document instead of overwrite.
 * @param {boolean}                       [options.withoutUndef]    Use to remove undefined field in data object.
 *
 * @return {Promise<void>}
 */

const updateDocument = (
  firestore: firebase.firestore.Firestore,
  collection: string,
  id: string,
  data: object,
  options: option = {}
) => {
  const { merge = true, withoutUndef = true } = options
  const docRef = getDocumentRef(firestore, collection, id)
  const buf = withoutUndef ? _.omitBy(data, _.isNil) : data
  if (merge) {
    return docRef.set(buf, {
      merge
    })
  }
  return docRef.update(buf)
}

export default updateDocument
