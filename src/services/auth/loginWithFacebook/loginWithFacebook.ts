import firebase from 'firebase/app'

/** @module @qonsoll/firebase-services/auth */

/**
 * @info loginWithFacebook (23 Jun 2021) // CREATION DATE
 * @access private
 * @comment loginWithFacebook - function which trigger auth with facebook provider.
 * @since 10 Jun 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param {firebase}		          firebase		The Firebase Auth service interface.
 * @param {firebase.auth.Auth}		auth		    The Firebase Auth service interface.
 *
 * @return {Promise<void>}
 */

const loginWithFacebook = (
  // @ts-ignore
  firebase: typeof firebase,
  auth: firebase.auth.Auth
): Promise<void> => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider()
  return auth.signInWithRedirect(facebookProvider)
}

export default loginWithFacebook
