import firebase from 'firebase'

declare function useAuthServices(): {
  auth: firebase.auth.Auth
  /**
   * @info loginWithFacebook (23 Jun 2021) // CREATION DATE
   * @access public
   * @comment loginWithFacebook - function which trigger auth with facebook provider.
   * @since 10 Jun 2021 ( v.0.0.1 ) // LAST-EDIT DATE
   *
   * @return {Promise<void>}
   */
  loginWithFacebook(): Promise<void>

  /**
   * @info loginWithGoogle (23 Jun 2021) // CREATION DATE
   * @access public
   * @comment loginWithGoogle - function which trigger auth with google provider.
   * @since 10 Jun 2021 ( v.0.0.1 ) // LAST-EDIT DATE
   *
   * @return {Promise<void>}
   */
  loginWithGoogle(): Promise<void>

  /**
   * @info sendVerifyEmail (29 Jun 2021) // CREATION DATE
   * @access public
   * @comment sendVerifyEmail - function that send verification email to user.
   * @since 10 Jun 2021 ( v.0.0.1 ) // LAST-EDIT DATE
   *
   * @return {Promise<void>}
   */
  sendVerifyEmail(): Promise<void>
}

export default useAuthServices

export { useAuthServices }
