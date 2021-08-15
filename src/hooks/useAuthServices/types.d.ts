import firebase from 'firebase/app'

declare function useAuthServices(): {
  auth: firebase.auth.Auth
  /**
   * @function loginWithFacebook
   * @comment loginWithFacebook - function which trigger auth with facebook provider.
   * @access public
   * @info loginWithFacebook (23 Jun 2021) // CREATION DATE
   * @since 10 Jun 2021 // LAST-EDIT DATE
   * @version 0.0.1
   *
   * @return {Promise<void>}
   */
  loginWithFacebook(): Promise<void>

  /**
   * @function loginWithGoogle
   * @comment loginWithGoogle - function which trigger auth with google provider.
   * @access public
   * @info loginWithFacebook (23 Jun 2021) // CREATION DATE
   * @since 10 Jun 2021 // LAST-EDIT DATE
   * @version 0.0.1
   *
   * @return {Promise<void>}
   */
  loginWithGoogle(): Promise<void>

  /**
   * @function sendVerifyEmail
   * @comment sendVerifyEmail - function that send verification email to user.
   * @access public
   * @info loginWithFacebook (23 Jun 2021) // CREATION DATE
   * @since 10 Jun 2021 // LAST-EDIT DATE
   * @version 0.0.1
   *
   * @return {Promise<void>}
   */
  sendVerifyEmail(): Promise<void>
}

export default useAuthServices

export { useAuthServices }
