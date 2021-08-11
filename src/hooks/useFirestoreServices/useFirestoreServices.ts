import 'firebase/firestore'
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
  const firebase = useFirebase()
  const firestore = useMemo(() => firebase!.firestore(), [firebase])

  const getCollectionRef = useCallback(
    (path: string) => services.getCollectionRef(firestore, path),
    [firestore]
  )
  const getDocumentRef = useCallback(
    (path: string) => services.getDocumentRef(firestore, path),
    [firestore]
  )

  return {
    firestore,
    getCollectionRef,
    getDocumentRef
  }
}

export default useFirestoreServices
