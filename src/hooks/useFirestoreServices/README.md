# Firebase Firestore services

Firebase Firestore services provides by hook.

Hook can be imported from `@qonsoll/firebase-services/firestore` using named import e.g.

```js
import { useFirestoreServices } from 'qonsoll/firebase-services/firestore'
```

or using default import to name it as you want e.g.

```js
import useFirebaseFirestoreServices from '@qonsoll/firebase-services/firestore'
```

or use named import from `@qonsoll/firebase-services` e.g.

```js
import { useFirestoreServices } from '@qonsoll/firebase-services'
```

------

List of services functions provided by this hook:

- [getCollectionRef](#getcollectionref)
- [getDocumentRef](#getdocumentref)
- [getTimestamp](#gettimestamp)
- [getCollectionData](#getcollectionref)
- [getDocumentData](#getdocumentref)
- [updateDocument](#updatedocument)
- [createDocument](#createdocument)
- [deleteDocument](#deleteddocument)

Additionally, this hook provides:

- Draft [firestore](https://firebase.google.com/docs/reference/js/v8/firebase.firestore.Firestore)
object, so you can use it in your needs.

------

### getCollectionRef

```js
const collectionRef = getCollectionRef(path)
```

The `getCollectionRef` function  takes the following parameters: 

- `path`: path to collection. 
 
Returns: 

- `collectionRef`: a `firebase.firestore.CollectionReference`

#### Examples

### getDocumentRef

```js
const documentRef = getDocumentRef(path)
```

The `getDocumentRef` function  takes the following parameters:

- `path`: path to document.

Returns:

- `documentRef`: a `firebase.firestore.DocumentReference`

#### Examples

### getTimestamp

```js
const timestamp = getTimestamp()
```

Returns:

- `timestamp`: a `firebase.firestore.Timestamp`

#### Examples

### getCollectionData

### getDocumentData

### updateDocument

### createDocument

### deleteDocument

```js
await deleteDocument(path, id)
```

The `deleteDocument` function  takes the following parameters:

- `path`: path to document.
- `id`: id of document.

Returns:

- `Promise<void>`

#### Full example

```js
import { useFirebaseServices } from '@qonsoll/firebase-services'

const UsersList = (props) => {
  const { users } = props
  
  // [HELPER_FUNCTIONS]
  const deleteUser = async (id) => {
    await deleteDocument('users', id)
  }
	
  return (
    users?.map(({name, id}) => (
      <div>
        <span>{name}</span>
        <button onClick={() => deleteUser(id)}>
          delete user
        </button>
      </div>
    ))
  )
}
```
