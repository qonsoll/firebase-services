import { useCallback, useMemo } from 'react'
import useFirebase from '../useFirebase'
import * as services from '../../services/storage'

const useStorageServices = () => {
  const firebase = useFirebase()
  const storage = useMemo(() => firebase!.storage(), [firebase])

  const getURL = useCallback((reference) => services.getURL(reference), [])
  const getStorageRef = useCallback(
    (options) => services.getStorageRef(storage, options),
    [storage]
  )
  const upload = useCallback(
    (file, path) => services.upload(storage, file, path),
    [storage]
  )

  return { storage, getURL, getStorageRef, upload }
}

export default useStorageServices
