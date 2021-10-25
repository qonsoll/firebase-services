import { useCallback, useMemo } from 'react'
import useFirebase from '../useFirebase'
import * as services from '../../services/firestore'
import { getCollectionDataArgs } from './types'
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

  const getTimestamp = useCallback(
    () => services.getTimestamp(firebase),
    [firebase]
  )

  const getCollectionData = useCallback(
    (reference: getCollectionDataArgs) =>
      services.getCollectionData(firestore, reference),
    [firestore]
  )
  const getDocumentData = useCallback(
    (path: string, id: string) => services.getDocumentData(firestore, path, id),
    [firestore]
  )

  const deleteDocument = useCallback(
    (path: string, id: string) => services.deleteDocument(firestore, path, id),
    [firestore]
  )

  const updateDocument = useCallback(
    (path: string, id: string, data: object, option: object | undefined) =>
      services.updateDocument(firestore, path, id, data, option),
    [firestore]
  )
  const createDocument = useCallback(
    (path: string, data: object, options: object | undefined) =>
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
    createDocument,
    deleteDocument
  }
}

export default useFirestoreServices
