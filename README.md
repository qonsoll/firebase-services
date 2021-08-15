# Firebase services

> A set of reusable services functions for [Firebase](https://firebase.google.com/).

[![NPM](https://img.shields.io/npm/v/@qonsoll/firebase-services.svg)](https://www.npmjs.com/package/@qonsoll/firebase-services)
![npm bundle size](https://img.shields.io/bundlephobia/min/@qonsoll/firebase-services)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

@qonsoll/firebase-services requires **React 16.8.0 or later** and **Firebase v8.8.0 or later**.

### Install dependencies

```bash
# with npm
npm install --save firebase lodash

# with yarn
yarn add firebase lodash
```

### Install library

```bash
# with npm
npm install @qonsoll/firebase-services

# with yarn
yarn add @qonsoll/firebase-services
```


## Usage

1. First you need to init firebase app in your project

```js
import { initFirebaseApp } from '@qonsoll/firebase-servcies'
export const firebaseConfig = {		
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}

initFirebaseApp(firebaseConfig)
```

2. After you initialized firebase app, you should add component which will provide firebase object for library.

```js
// Previusly you need to init your firebase app and add necessary imports.
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'
// Use default import to name it as you want.
import FBSProvider from '@qonsoll/firebase-services'
// or use named import.
// import { FirebaseServicesProvider } from '@qonsoll/firebase-services'


const App = () => ( 
  <FBSProvider firebase={firebase}>
	{/* Components */}
  </FBSProvider>
)
```

Next step is read documentation about functions you needs.

### Documentation

- [Auth services](/src/hooks/useAuthServices)
- [Cloud Firestore services](/src/hooks/useFirestoreServices)
- [Cloud Storage services](/src/hooks/useStorageServices)
- [Realtime Database services](/src/hooks/useDatabaseServices)
