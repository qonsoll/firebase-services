import 'firebase/storage'
import { useCallback, useMemo } from 'react'
import useFirebase from '../useFirebase'
import * as services from '../../services/storage'

const useStorageServices = () => {
  // [ADDITIONAL_HOOKS]
  const firebase = useFirebase()

  // [COMPUTED_PROPERTIES]
  const storage = useMemo(() => firebase!.storage(), [firebase])

  // [CLEAN_FUNCTIONS]
  const getURL = useCallback((reference) => services.getURL(reference), [])
  const getStorageRef = useCallback(
    (options) => services.getStorageRef(storage, options),
    [storage]
  )
  const upload = useCallback(
    (file, path) => services.upload(storage, file, path),
    [storage]
  )
  const deleteFile = useCallback(
    (options) => services.deleteFile(storage, options),
    [storage]
  )

  return { storage, getURL, getStorageRef, upload, deleteFile }
}

export default useStorageServices
