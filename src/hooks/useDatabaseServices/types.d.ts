import firebase from 'firebase'

declare function useDatabaseServices(): {
  /**
   * @info getReferenceChild (11 May 2021) // CREATION DATE
   *
   * @comment getReferenceChild - function for get path to child from realtime database
   *
   * @since 10 Aug 2021 ( v.0.0.1 ) // LAST-EDIT DATE
   *
   * @param    path        Path to child from realtime database
   *
   * @return {firebase.database.Reference} Database Reference.
   */
  getReferenceChild(path: string): firebase.database.Reference
}

export default useDatabaseServices

export { useDatabaseServices }
