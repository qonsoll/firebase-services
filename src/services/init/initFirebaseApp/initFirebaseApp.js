const initFirebaseApp = (firebase, config) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  } else {
    firebase.app()
  }
}

export default initFirebaseApp
