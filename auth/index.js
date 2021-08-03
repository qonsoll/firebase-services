import firebase from '../init'
import 'firebase/auth'

const auth = firebase.auth()

export default auth

export { default as loginWithGoogle } from './loginWithGoogle'
export { default as loginWithFacebook } from './loginWithFacebook'
export { default as sendVerifyEmail } from './sendVerifyEmail'
