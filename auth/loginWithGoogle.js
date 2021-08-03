import firebase from 'firebase'
import auth from './'

const loginWithGoogle = async () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return auth.signInWithRedirect(googleProvider)
}

export default loginWithGoogle
