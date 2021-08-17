import firebase from 'firebase/app'

/** @module @qonsoll/firebase-services/database */

/**
 * @info getTimestamp (16 Aug 2021) // CREATION DATE
 *
 * @comment getTimestamp - function for get realtime database Timestamp object.
 *
 * @since 16 Aug 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @returns {firebase.database.ServerValue.TIMESTAMP}
 */

const getTimestamp = () => firebase.database.ServerValue.TIMESTAMP

export default getTimestamp
