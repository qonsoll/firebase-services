import database from './'

/**
 * @info getReferenceChild (11 May 2021) // CREATION DATE
 *
 * @comment getReferenceChild - function for get path to child from realtime database
 *
 * @since 11 May 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {String}                 path          Path to child from realtime database
 *
 * @return {Object}
 */

const getReferenceChild = (path) => {
  if (path) {
    return database.ref(path)
  }
}
export default getReferenceChild
