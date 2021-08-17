import firebase from 'firebase/app'

declare function useDatabaseServices(): {
  database: firebase.database.Database
  /**
   * @function getReferenceChild
   * @comment getReferenceChild - function for get path to child from realtime database.
   * @access public
   * @info getReferenceChild (11 May 2021) // CREATION DATE
   * @since 10 Aug 2021 // LAST-EDIT DATE
   * @version 0.0.1
   *
   * @description Using with [react-firebase-hooks]{@link https://github.com/csfrequency/react-firebase-hooks/tree/1d1ca28241ece8f4662aa2aeadff132cd880c32b/database#useobject} as a query.
   * @example
   * const [data, loading] = useObjectVal(getReferenceChild('pathToCollection'))
   *
   *
   * @param    path        Path to child from realtime database
   *
   * @return {firebase.database.Reference} Database Reference.
   */
  getReferenceChild(path: string): firebase.database.Reference

  getTimestamp(): typeof firebase.database.ServerValue.TIMESTAMP
}

export default useDatabaseServices

export { useDatabaseServices }
