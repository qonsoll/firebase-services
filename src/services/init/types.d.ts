type config = {
  apiKey: string
  appId: string
  projectId: string
  authDomain: string
  databaseURL: string
  storageBucket: string
  messagingSenderId: string
  measurementId?: string
}
declare function initFirebaseApp(config: config): void

export { initFirebaseApp, config }
