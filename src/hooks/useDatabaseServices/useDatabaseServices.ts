import 'firebase/database'
import { useCallback, useMemo } from 'react'
import useFirebase from '../useFirebase'
import * as services from '../../services/database'

const useDatabaseServices = () => {
  const firebase = useFirebase()
  const database = useMemo(() => firebase!.database(), [firebase])

  const getReferenceChild = useCallback(
    (path: string) => services.getReferenceChild(database, path),
    [database]
  )

  return { database, getReferenceChild }
}

export default useDatabaseServices
export { useDatabaseServices }
