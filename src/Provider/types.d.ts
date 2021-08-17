import firebase from 'firebase/app'
declare type ProviderProps = {
  firebase: typeof firebase
}

// @ts-ignore
declare const FirebaseServicesProvider: (props: ProviderProps) => JSX.Element

export default FirebaseServicesProvider
export { FirebaseServicesProvider, ProviderProps }
