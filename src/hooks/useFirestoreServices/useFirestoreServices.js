import 'firebase/firestore'
import { useMemo, useCallback } from 'react'
import useFirebase from '../useFirebase'

import { getCollectionRef as getCollectionRefService } from '../../services/firestore'

const useFirestoreServices = () => {
  const firebase = useFirebase()
  const firestore = firebase.firestore()

  /**
   * @info getCollectionRef (06 Apr 2021) // CREATION DATE
   *
   * @comment getCollectionRef - function for get collection reference.
   *
   * @since 05 Aug 2021 ( v.0.0.2 ) // LAST-EDIT DATE
   *
   * @param {string}    	path     		Path to collection.
   *
   * @return {CollectionReference} object of document's data
   */

  const getCollectionRef = useCallback(
    (path) => getCollectionRefService(firestore, path),
    [firestore]
  )

  return useMemo(
    () => ({
      getCollectionRef
    }),
    [getCollectionRef]
  )
}

export default useFirestoreServices
