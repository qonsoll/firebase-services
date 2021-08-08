import { createContext } from 'react'
import firebase from 'firebase/app'

const FirebaseServicesContext = createContext<typeof firebase | null>(null)

export default FirebaseServicesContext
