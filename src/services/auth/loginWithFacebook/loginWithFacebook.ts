import firebase from 'firebase'

/** @module @qonsoll/firebase-services/auth */

/**
 * @info loginWithFacebook (23 Jun 2021) // CREATION DATE
 * @access private
 * @comment loginWithFacebook - function which trigger auth with facebook provider.
 * @since 10 Jun 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param 		auth		The Firebase Auth service interface.
 *
 * @return {Promise<void>}
 */
const loginWithFacebook = (auth: firebase.auth.Auth) => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider()
  return auth.signInWithRedirect(facebookProvider)
}

export default loginWithFacebook
