import FirebaseServicesContext from './context'
import { ProviderProps } from './types'

const Provider = (props: ProviderProps) => {
  const { firebase, ...rest } = props

  return <FirebaseServicesContext.Provider value={firebase} {...rest} />
}

export default Provider
