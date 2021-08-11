import 'firebase/auth'
import { useCallback, useMemo } from 'react'
import useFirebase from '../useFirebase'
import * as services from '../../services/auth'

const useAuthServices = () => {
  const firebase = useFirebase()
  const auth = useMemo(() => firebase!.auth(), [firebase])

  const loginWithGoogle = useCallback(
    () => services.loginWithGoogle(auth),
    [auth]
  )
  const loginWithFacebook = useCallback(
    () => services.loginWithFacebook(auth),
    [auth]
  )
  const sendVerifyEmail = useCallback(
    () => services.sendVerifyEmail(auth),
    [auth]
  )

  return { auth, loginWithGoogle, loginWithFacebook, sendVerifyEmail }
}

export default useAuthServices
export { useAuthServices }
