// import { resolve as pathResolve } from 'path'
// Importing plugins for rollup.
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import typescript from 'rollup-plugin-typescript2'

import dts from 'rollup-plugin-dts'

// Importing all package.json to create correct package build.
import mainPkg from './package.json'
// import fbPkg from './src/hooks/useFirebase/package.json'
// import authPkg from './src/hooks/useAuthServices/package.json'
// import databasePkg from './src/hooks/useDatabaseServices/package.json'
// import firestorePkg from './src/hooks/useFirestoreServices/package.json'
// import storagePkg from './src/hooks/useStorageServices/package.json'

// // Creating map with information about every subpackage getting from their package.json.
// const pkgsByName = {
//   firebase: fbPkg,
//   auth: authPkg,
//   database: databasePkg,
//   firestore: firestorePkg,
//   storage: storagePkg
// }

// Creating reference map between subpackage name and it folder name in hooks folder.
const components = [
  { path: 'useFirebase', name: 'firebase' },
  { path: 'useAuthServices', name: 'auth' },
  { path: 'useDatabaseServices', name: 'database' },
  { path: 'useFirestoreServices', name: 'firestore' },
  { path: 'useStorageServices', name: 'storage' }
]

// Declaring peer dependencies for package. Get some from main package.json and add additional dependencies.
const peerDependencies = mainPkg.peerDependencies || {}
const external = [
  ...Object.keys(peerDependencies),
  'react-dom',
  'firebase/auth',
  'firebase/database',
  'firebase/firestore',
  'firebase/storage'
]

// Configure additional plugins for build
const plugins = [
  // This package doing magic with dependencies and package size reduce twice.
  peerDepsExternal(),
  // babel({
  //   plugins: ['@babel/plugin-syntax-jsx'],
  //   exclude: 'node_modules/**',
  //   presets: ['@babel/preset-react']
  // }),
  commonjs(),
  resolve(),
  typescript({
    typescript: require('typescript'),
    useTsconfigDeclarationDir: true
  })
]

// Going throw reference map and generating one array of bundles.
export default components
  .map(() => {
    // // Get package.json information for current subpackage.
    // const pkg = pkgsByName[name]
    //
    // // There is path to source in
    // const sourceInputPath = `src/hooks/${path}`

    return [
      // /*
      //  *
      //  */
      // {
      //   input: `${sourceInputPath}/index.ts`,
      //   output: [
      //     {
      //       file: pathResolve(name, pkg.main),
      //       format: 'cjs',
      //       hoistTransitiveImports: false
      //     },
      //     {
      //       file: pathResolve(name, pkg.module),
      //       format: 'es',
      //       hoistTransitiveImports: false
      //     }
      //   ],
      //   plugins: [
      //     ...plugins,
      //     /*
      //      *  Copy package.json files to be able import functions like subpackage.
      //      *  e.g. import useFirestoreServices from "@qonsoll/firebase-services/firestore"
      //      *       to import only useFirestoreServices hook.
      //      */
      //     copy({
      //       targets: [
      //         {
      //           src: `${sourceInputPath}/package.json`,
      //           dest: name
      //         }
      //       ]
      //     })
      //   ],
      //   external
      // }
      // /*
      //  *  TODO: Need to research about 'iife' format of package and document this part of build script.
      //  */
      // {
      //   input: `${sourceInputPath}/index.ts`,
      //   output: [
      //     {
      //       file: `dist/qonsoll-firebase-sevices-${name}.js`,
      //       format: 'iife',
      //       sourcemap: true,
      //       extend: true,
      //       name: '@qonsoll/firebase-service',
      //       globals: {
      //         firebase: 'firebase',
      //         react: 'React'
      //       }
      //     }
      //   ],
      //   plugins,
      //   external
      // }
    ]
  })
  .reduce(
    (a, b) => a.concat(b),
    [
      /*
       *  Build main index to be able import all hooks or components you want from one place.
       */
      {
        input: {
          'dist/index.esm': 'src/index.ts',
          'firebase/dist/index.esm': 'src/hooks/useFirebase/index.ts',
          'firestore/dist/index.esm': 'src/hooks/useFirestoreServices/index.ts'
        },
        output: {
          dir: './',
          format: 'es',
          chunkFileNames: 'dist/[name]-[hash].js'
        },
        // Adding minification(using terser plugin) for this files reduce size of bundle twice.
        plugins: [
          ...plugins,
          // flatDts(),
          terser(),
          copy({
            targets: [
              {
                src: `src/hooks/useFirebase/package.json`,
                dest: 'firebase'
              }
            ]
          }),
          copy({
            targets: [
              {
                src: `src/hooks/useFirestoreServices/package.json`,
                dest: 'firestore'
              }
            ]
          })
        ],
        external
      },
      {
        // path to your declaration files root
        input: {
          'dist/index': 'src/index.d.ts',
          'firebase/dist/index': 'src/hooks/useFirebase/types.d.ts',
          'firestore/dist/index': 'src/hooks/useFirestoreServices/types.d.ts'
        },
        output: [{ dir: './', format: 'es' }],
        plugins: [dts()]
      }
    ]
  )
