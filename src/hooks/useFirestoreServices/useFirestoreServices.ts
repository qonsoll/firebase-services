import 'firebase/firestore'
import { useCallback } from 'react'
import useFirebase from '../useFirebase'
import { getCollectionRef as getCollectionRefService } from '../../services/firestore'

/**
 * @typedef {object} firestoreServices
 * @property {function} getCollectionRef - {@link getCollectionRef documentation}
 *
 *
 */

/**
 * @function useFirestoreServices
 * @access public
 * @info getCollectionRef (06 Apr 2021) // CREATION DATE
 * @since 08 Aug 2021 // LAST-EDIT DATE
 * @version 0.0.1
 *
 *
 * @return firestoreServices
 */
const useFirestoreServices = () => {
  const firebase = useFirebase()
  const firestore = firebase!.firestore()

  const getCollectionRef = useCallback(
    (path: string) => getCollectionRefService(firestore, path),
    [firestore]
  )

  return {
    getCollectionRef
  }
}

export default useFirestoreServices
