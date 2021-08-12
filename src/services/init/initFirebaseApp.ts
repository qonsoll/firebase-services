import firebase from 'firebase/app'
import { config } from './types'

const initFirebaseApp = (config: config) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  } else {
    firebase.app()
  }
}

export default initFirebaseApp
