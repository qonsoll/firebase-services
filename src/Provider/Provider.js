import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { initFirebaseApp } from '../services/init'
import FirebaseServicesContext from './context'

const Provider = (props) => {
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

Provider.propTypes = {
  firebase: PropTypes.object.isRequired,
  config: PropTypes.shape({
    apiKey: PropTypes.string,
    authDomain: PropTypes.string,
    databaseURL: PropTypes.string,
    projectId: PropTypes.string,
    storageBucket: PropTypes.string,
    messagingSenderId: PropTypes.string,
    appId: PropTypes.string
  })
}

export default Provider
