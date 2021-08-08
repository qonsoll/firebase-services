import { useEffect } from 'react'
import { initFirebaseApp } from '../services/init'
import FirebaseServicesContext from './context'
import { ProviderProps } from './types'

const Provider = (props: ProviderProps) => {
  const { firebase, config, ...rest } = props

  // [USE_EFFECTS]
  useEffect(() => {
    let isComponentMount = true
    const isFirebaseInit = !!firebase.apps.length
    if (isComponentMount) {
      if (!isFirebaseInit) {
        if (!config) {
          throw new Error(
            'Init firebase app using firebase.initializeApp function'
          )
        } else {
          initFirebaseApp(firebase, config)
        }
      }
    }

    return () => {
      isComponentMount = false
    }
  }, [firebase, config])

  return <FirebaseServicesContext.Provider value={firebase} {...rest} />
}

export default Provider
