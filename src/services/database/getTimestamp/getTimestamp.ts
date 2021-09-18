// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import firebase from 'firebase/app'

/** @module @qonsoll/firebase-services/database */

/**
 * @info getTimestamp (16 Aug 2021) // CREATION DATE
 *
 * @comment getTimestamp - function for get realtime database Timestamp object.
 *
 * @since 16 Aug 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {firebase} firebase
 *
 * @returns {firebase.database.ServerValue.TIMESTAMP}
 */

//@ts-ignore
const getTimestamp = (firebase: typeof firebase) =>
  firebase.database.ServerValue.TIMESTAMP

export default getTimestamp
