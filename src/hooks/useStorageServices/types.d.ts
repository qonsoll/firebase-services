import firebase from 'firebase'

declare function useStorageServices(): {
  storage: firebase.storage.Reference
  getStorageRef(options: {
    path?: string
    url?: string
  }): firebase.storage.Reference
  getUrl(reference: firebase.storage.Reference): Promise<string | any>
  upload(
    file: File,
    path: string
  ): Promise<string | any> | firebase.storage.UploadTaskSnapshot
}

export default useStorageServices
export { useStorageServices }
