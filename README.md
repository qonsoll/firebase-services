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
const firebaseConfig = {
	apiKey: "AIza....",                             // Auth / General Use
	appId: "1:27992087142:web:ce....",              // General Use
	projectId: "my-firebase-project",               // General Use
	authDomain: "YOUR_APP.firebaseapp.com",         // Auth with popup/redirect
	databaseURL: "https://YOUR_APP.firebaseio.com", // Realtime Database
	storageBucket: "YOUR_APP.appspot.com",          // Storage
	messagingSenderId: "123456789",                 // Cloud Messaging
	measurementId: "G-12345"                        // Analytics
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
