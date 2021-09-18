//@ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import firebase from 'firebase/app'

/** @module @qonsoll/firebase-services/firestore */

/**
 * @info getTimestamp (06 Apr 2021) // CREATION DATE
 *
 * @comment getTimestamp - function for get firebase Timestamp object.
 *
 * @since 06 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {firebase} firebase
 *
 * @returns {firebase.firestore.Timestamp}
 */

//@ts-ignore
const getTimestamp = (firebase: typeof firebase) => firebase.firestore.Timestamp

export default getTimestamp
