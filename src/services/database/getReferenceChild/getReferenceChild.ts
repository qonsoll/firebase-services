import firebase from 'firebase'

/**
 * @info getReferenceChild (11 May 2021) // CREATION DATE
 *
 * @comment getReferenceChild - function for get path to child from realtime database
 *
 * @since 10 Aug 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param    database    The Firebase Database service interface.
 * @param    path        Path to child from realtime database
 *
 * @return {firebase.database.Reference} Database Reference.
 */
const getReferenceChild = (
  database: firebase.database.Database,
  path: string
) => database.ref(path)

export default getReferenceChild
