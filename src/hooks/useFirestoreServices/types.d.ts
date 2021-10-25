import firebase from 'firebase/app'

/**
 * @typedef updateDocumentOption
 * @type {object}
 * @property {boolean}     [options.merge]           Use to update document instead of overwrite.
 * @property {boolean}     [options.withoutUndef]    Use to remove undefined field in data object.
 */
type updateDocumentOption = {
  merge?: boolean
  withoutUndef?: boolean
}

/**
 * @typedef createDocumentOption
 * @type {object}
 * @param {string | undefined | null | boolean}   [options.idField]          Name of field with document id.
 * @param {boolean}                               [options.withoutUndef]     use to remove undefined field in data object.
 * @param {string}                                [options.id]               use to set specific id for document on create.
 */
type createDocumentOption = {
  idField?: string | undefined | null | boolean
  withoutUndef?: boolean
  id?: string
}

/**
 * @typedef getCollectionDataArgs
 * @type {object}
 * @property {string}                                                                     [path]
 * @property {firebase.firestore.CollectionReference<firebase.firestore.DocumentData>}    [ref]
 */
export type getCollectionDataArgs = {
  path?: string
  ref?: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
}
declare function useFirestoreServices(): {
  /**
   * The Cloud Firestore service interface.
   */
  firestore: firebase.firestore.Firestore

  /**
   * @function getCollectionRef
   * @comment getCollectionRef - function for get firestore collection reference.
   * @access public
   * @info getCollectionRef (06 Apr 2021) // CREATION DATE
   * @since 06 Apr 2021 // LAST-EDIT DATE
   * @version 0.0.1
   *
   * ##Examples
   * @description Basic usage of getCollectionRef function.
   * @example
   * // Return firestore instance of 'users' collection.
   * getCollectionRef('users').get()
   *
   * @description Using with [react-firebase-hooks]{@link https://github.com/csfrequency/react-firebase-hooks/tree/1d1ca28241ece8f4662aa2aeadff132cd880c32b/firestore#usecollectiondata} as a query.
   * @example
   * const [users, loading] = useCollectionData(getCollectionRef('users').where('role', '==', 'ADMIN'))
   *
   *
   * @param  	collection  	Path to collection.
   *
   * @return {firebase.firestore.CollectionReference<firebase.firestore.DocumentData>} The CollectionReference instance.
   */
  getCollectionRef(
    collection: string
  ): firebase.firestore.CollectionReference<firebase.firestore.DocumentData>

  /**
   * @function getDocumentRef
   * @comment getDocumentRef - function for get firestore document reference.
   * @access public
   * @info getDocumentRef (06 Apr 2021) // CREATION DATE
   * @since 23 Oct 2021 // LAST-EDIT DATE
   * @version 0.0.2
   *
   *
   * ##Examples
   * @description Using in special cases where you need document **id** before write it to firestore.
   * @example
   * // Create document instance, get id, and use it to write in firestore document using this id.
   * const docId = getDocumentRef('users').id
   * const data = { id: docId }
   * await createDocument('users', data, { id: docId })
   *
   * @description But [createDocument]{@link createDocument} function doing this under the hood.
   *
   *
   * @param  	collection  	Path to collection.
   * @param  	id  	        Id of document.
   *
   * @return {firebase.firestore.DocumentReference<firebase.firestore.DocumentData>} The DocumentReference instance.
   */
  getDocumentRef(
    collection: string,
    id?: string
  ): firebase.firestore.DocumentReference<firebase.firestore.DocumentData>

  /**
   * @function getTimestamp
   * @comment getTimestamp - Using to set timestamp datatype in firestore.
   * @access public
   * @info getTimestamp (06 Apr 2021) // CREATION DATE
   * @since 06 Apr 2021 // LAST-EDIT DATE
   * @version 0.0.1
   *
   * ##Examples
   * @description 1) Will create timestamp for this date.
   * @example
   * // Fri Nov 17 2000 12:00:10 GMT+0200 (Eastern European Standard Time)
   * const createdAt = getTimestamp().fromDate(new Date('11 17 2000 12:00:10'))
   *
   *
   * @description 2) Will convert timestamp object to Data.
   * @example
   * // Look at previous example.
   * moment(createdAt.toDate()).format('LT') // 12:00
   * @description Find "Multiple Locale Support" title at [moment]{@link https://momentjs.com/} site to see more
   *              format examples.
   *
   *
   * @description 3) Will create timestamp for current time and date.
   * @example
   * const createdAt = getTimestamp().now()
   *
   *
   * @returns {firebase.firestore.Timestamp}
   */
  getTimestamp(): firebase.firestore.Timestamp

  /**
   * @function getCollectionData
   * @comment getCollectionData - function for get array of documents data from collection.
   * @access public
   * @info getCollectionData (06 Apr 2021) // CREATION DATE
   * @since 06 Apr 2021 // LAST-EDIT DATE
   * @version 0.0.1
   *
   *
   * @param {object}                                                                      args             An object to configure the method behavior.
   * @param {string}                                                                      [args.path]      Path to collection.
   * @param {firebase.firestore.CollectionReference<firebase.firestore.DocumentData>}     [args.ref]
   *
   * @return {Object[]} Array of document's data
   */
  getCollectionData(args: getCollectionDataArgs): Object[]

  /**
   * @function getDocumentData
   * @comment getDocumentData - Using to fetch document data from firestore.
   * @access public
   * @info getDocumentData (06 Apr 2021) // CREATION DATE
   * @since 06 Apr 2021 // LAST-EDIT DATE
   * @version 0.0.1
   *
   * ##Examples
   * @description Basic data fetch in useEffect.
   * @example
   * // ...
   *   const data = await getDocumentData('collection', 'id')
   *   setData(data)
   * // ...
   *
   * @param {string}      collection    Path to collection
   * @param {string}      id            Id of document
   *
   * @return {object}  Object of document's data
   */
  getDocumentData(collection: string, id: string): object

  /**
   * @function updateDocument
   * @comment updateDocument - function for updating document in firestore with option to delete all undefined|null fields inside data argument and possibility to merge document data with new provided fields and creation document if it doesn't exist.
   * @access public
   * @info updateDocument (06 Apr 2021) // CREATION DATE
   * @since 15 Apr 2021 // LAST-EDIT DATE
   * @version 0.0.3
   *
   * @param {string}    collection                Path to a collection.
   * @param {string}    id     	                  Id of document.
   * @param {object}    data                      Data for the document.
   * @param {object}    [options]                 An object to configure the method behavior.
   * @param {boolean}   [options.merge=true]           Use to update document instead of overwrite.
   * @param {boolean}   [options.withoutUndef=true]    Use to remove undefined field in data object.
   *
   * @return {Promise<void>}
   */
  updateDocument(
    collection: string,
    id: string,
    data: object,
    options?: updateDocumentOption
  ): Promise<void>

  /**
   * @function createDocument
   * @comment createDocument - function for creating document in firestore with option to delete all undefined|null fields inside data argument and possibility to called field which contain id of document.
   * @access public
   * @info createDocument (06 Apr 2021) // CREATION DATE
   * @since 17 Oct 2021 // LAST-EDIT DATE
   * @version 0.0.4
   *
   * @param {string}                                collection                    Path to a collection.
   * @param {object}                                data                          An Object containing the data for the new document.
   * @param {object}                                [options]                     An object to configure the method behavior.
   * @param {string | undefined | null | boolean}   [options.idField=id]          Name of field with document id.
   * @param {boolean}                               [options.withoutUndef=true]   Use to remove undefined field in data object.
   * @param {string}                                [options.id]                  Use to set specific id for document on create.
   *
   * @return {Promise<object>}
   */
  createDocument<T>(
    collection: string,
    data: object,
    options?: createDocumentOption
  ):
    | Promise<T & { id: string | undefined }>
    | Promise<
        firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
      >
    | Promise<object>

  /**
   * @function deleteDocument
   * @comment deleteDocument - function for deleting document from firestore.
   * @access public
   * @info deleteDocument (06 Apr 2021) // CREATION DATE
   * @since 15 Aug 2021 // LAST-EDIT DATE
   * @version 0.0.2
   *
   * @param {string}       collection  Path to collection.
   * @param {string}       id     	   Id of document.
   *
   * @return {Promise<void>}
   */
  deleteDocument(collection: string, id: string): Promise<void>
}

export default useFirestoreServices

export { useFirestoreServices }
