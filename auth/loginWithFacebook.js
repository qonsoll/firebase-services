import firebase from 'firebase'
import auth from './'

const loginWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider()
  auth.signInWithRedirect(facebookProvider)
}

export default loginWithFacebook
