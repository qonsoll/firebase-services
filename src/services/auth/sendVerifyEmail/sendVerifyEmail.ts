import firebase from 'firebase/app'

/** @module @qonsoll/firebase-services/auth */

/**
 * @info sendVerifyEmail (29 Jun 2021) // CREATION DATE
 * @access private
 * @comment sendVerifyEmail - function that send verification email to user.
 * @since 10 Jun 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param 		auth		The Firebase Auth service interface.
 *
 * @return {Promise<void>}
 */
const sendVerifyEmail = (auth: firebase.auth.Auth) =>
  auth.currentUser!.sendEmailVerification()

export default sendVerifyEmail
