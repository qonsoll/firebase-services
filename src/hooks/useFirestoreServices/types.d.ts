import firebase from 'firebase/app'

/**
 * {@link useFirestoreServices}
 */
declare function useFirestoreServices(): {
  /**
   * @function getCollectionRef
   * @comment getCollectionRef - function for get firestore collection reference.
   * @access public
   * @info getCollectionRef (06 Apr 2021) // CREATION DATE
   * @since 06 Apr 2021 // LAST-EDIT DATE
   * @version 0.0.1
   *
   *
   * ##Examples
   * @description Basic usage of getCollectionRef function.
   * @example
   * // Return firestore instance of 'users' collection.
   * getCollectionRef('users').get()
   *
   *
   *
   * @description Using with [react-firebase-hooks]{@link https://github.com/csfrequency/react-firebase-hooks/tree/1d1ca28241ece8f4662aa2aeadff132cd880c32b/firestore#usecollectiondata} as a query.
   * @example
   * const [users, loading] = useCollectionData(getCollectionRef('users').where('role', '==', 'ADMIN'))
   *
   *
   *
   * @param  	path  	Path to collection.
   *
   * @return - The CollectionReference instance.
   */
  getCollectionRef(
    path: string
  ): firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
}

export default useFirestoreServices

export { useFirestoreServices }
