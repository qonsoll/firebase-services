import firebase from 'firebase/app'
declare type ProviderProps = {
  firebase: typeof firebase
}

// @ts-ignore
declare const Provider: (props: ProviderProps) => JSX.Element

export default Provider
export { Provider, ProviderProps }
