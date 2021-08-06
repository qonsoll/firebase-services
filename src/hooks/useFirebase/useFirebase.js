import { useContext } from 'react'
import FirebaseServicesContext from '../../Provider/context'

const useFirebase = () => useContext(FirebaseServicesContext)

export default useFirebase
