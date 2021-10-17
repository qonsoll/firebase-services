import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
require('dotenv').config()

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  appId: process.env.FIREBASE_APP_ID
})

firebase.firestore().useEmulator('localhost', 5000)

export default firebaseApp
