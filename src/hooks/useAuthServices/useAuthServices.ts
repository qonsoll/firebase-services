import { useCallback, useMemo } from 'react'
import useFirebase from '../useFirebase'
import * as services from '../../services/auth'

const useAuthServices = () => {
  // [ADDITIONAL_HOOKS]
  const firebase = useFirebase()

  // [COMPUTED_PROPERTIES]
  const auth = useMemo(() => firebase!.auth(), [firebase])

  // [CLEAN_FUNCTIONS]
  const loginWithGoogle = useCallback(
    () => services.loginWithGoogle(firebase, auth),
    [firebase, auth]
  )
  const loginWithFacebook = useCallback(
    () => services.loginWithFacebook(firebase, auth),
    [firebase, auth]
  )
  const sendVerifyEmail = useCallback(
    () => services.sendVerifyEmail(auth),
    [auth]
  )

  return { auth, loginWithGoogle, loginWithFacebook, sendVerifyEmail }
}

export default useAuthServices
export { useAuthServices }
