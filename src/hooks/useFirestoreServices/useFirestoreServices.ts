import { useCallback, useMemo } from 'react'
import useFirebase from '../useFirebase'
import * as services from '../../services/firestore'

/**
 * @typedef {object} firestoreServices
 * @property {function} getCollectionRef - {@link getCollectionRef documentation}
 * @property {function} getDocumentRef   - {@link getDocumentRef documentation}
 *
 *
 */

/**
 * @function useFirestoreServices
 * @access public
 * @info useFirestoreServices (01 Aug 2021) // CREATION DATE
 * @since 08 Aug 2021 // LAST-EDIT DATE
 * @version 0.0.1
 *
 *
 * @return firestoreServices
 */
const useFirestoreServices = () => {
  // [ADDITIONAL_HOOKS]
  const firebase = useFirebase()

  // [COMPUTED_PROPERTIES]
  const firestore = useMemo(() => firebase!.firestore(), [firebase])

  // [CLEAN_FUNCTIONS]
  const getCollectionRef = useCallback(
    (path: string) => services.getCollectionRef(firestore, path),
    [firestore]
  )
  const getDocumentRef = useCallback(
    (path: string) => services.getDocumentRef(firestore, path),
    [firestore]
  )

  const getTimestamp = useCallback(() => services.getTimestamp(), [])

  const getCollectionData = useCallback(
    (reference) => services.getCollectionData(firestore, reference),
    [firestore]
  )
  const getDocumentData = useCallback(
    (path, id) => services.getDocumentData(firestore, path, id),
    [firestore]
  )

  const updateDocument = useCallback(
    (path, id, data, option) =>
      services.updateDocument(firestore, path, id, data, option),
    [firestore]
  )
  const createDocument = useCallback(
    (path, data, options) =>
      services.createDocument(firestore, path, data, options),
    [firestore]
  )

  return {
    firestore,
    getCollectionRef,
    getDocumentRef,
    getTimestamp,
    getCollectionData,
    getDocumentData,
    updateDocument,
    createDocument
  }
}

export default useFirestoreServices
