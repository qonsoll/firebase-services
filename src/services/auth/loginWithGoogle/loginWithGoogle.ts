import firebase from 'firebase/app'

/** @module @qonsoll/firebase-services/auth */

/**
 * @info loginWithGoogle (23 Jun 2021) // CREATION DATE
 * @access private
 * @comment loginWithGoogle - function which trigger auth with google provider.
 * @since 10 Jun 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param 		auth		The Firebase Auth service interface.
 *
 * @return {Promise<void>}
 */
const loginWithGoogle = (auth: firebase.auth.Auth) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return auth.signInWithRedirect(googleProvider)
}

export default loginWithGoogle
