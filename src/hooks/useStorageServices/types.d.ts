import firebase from 'firebase/app'

declare function useStorageServices(): {
  storage: firebase.storage.Reference
  getStorageRef(options: {
    path?: string
    url?: string
  }): firebase.storage.Reference
  deleteFile(options: { path?: string; url?: string }): Promise<any | boolean>
  getUrl(reference: firebase.storage.Reference): Promise<string | any>
  upload(
    file: File,
    path: string
  ): Promise<string | any> | firebase.storage.UploadTaskSnapshot
}

export default useStorageServices
export { useStorageServices }
