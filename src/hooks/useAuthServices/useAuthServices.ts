import 'firebase/auth'
import { useCallback } from 'react'
import useFirebase from '../useFirebase'
import * as services from '../../services/auth'

const useAuthServices = () => {
  const firebase = useFirebase()
  const auth = firebase!.auth()

  const loginWithGoogle = useCallback(
    () => services.loginWithGoogle(auth),
    [auth]
  )

  return { loginWithGoogle }
}

export default useAuthServices
