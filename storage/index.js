import Firebase from '../init'

const storage = Firebase.storage

export default storage

export { default as deleteFile } from './deleteFile'
export { default as getURL } from './getURL'
export { default as storageRef } from './storageRef'
export { default as upload } from './upload'
