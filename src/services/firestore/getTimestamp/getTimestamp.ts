import firebase from 'firebase/app'

/** @module @qonsoll/firebase-services/firestore */

/**
 * @info getTimestamp (06 Apr 2021) // CREATION DATE
 *
 * @comment getTimestamp - function for get firebase Timestamp object.
 *
 * @since 06 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @returns {firebase.firestore.Timestamp}
 */

const getTimestamp = () => firebase.firestore.Timestamp

export default getTimestamp
