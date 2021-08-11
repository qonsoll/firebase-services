# Firebase services

> A set of reusable services functions for [Firebase](https://firebase.google.com/).

[![NPM](https://img.shields.io/npm/v/@qonsoll/firebase-services.svg)](https://www.npmjs.com/package/@qonsoll/firebase-services)
![npm bundle size](https://img.shields.io/bundlephobia/min/@qonsoll/firebase-services)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

@qonsoll/firebase-services requires **React 16.8.0 or later** and **Firebase v8.0.0 or later**.

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

### Documentation

- [Auth services](/src/hooks/useAuthServices)
- [Cloud Firestore services](/src/hooks/useFirestoreServices)
- [Cloud Storage services](/src/hooks/useStorageServices)
- [Realtime Database services](/src/hooks/useDatabaseServices)
