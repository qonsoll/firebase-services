import firebase from 'firebase/app'
declare type ProviderProps = {
  firebase: typeof firebase
  config?: {
    apiKey: string
    authDomain: string
    databaseURL: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
  }
}
// @ts-ignore
declare const Provider: (props: ProviderProps) => JSX.Element

export default Provider
export { Provider, ProviderProps }
