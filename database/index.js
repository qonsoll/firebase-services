import firebase from '../init'
import 'firebase/database'

const database = firebase.database()

export default database

export { default as getReferenceChild } from './getReferenceChild'
