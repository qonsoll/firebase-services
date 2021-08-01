import { resolve } from 'path'
import { terser } from 'rollup-plugin-terser'

import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

import pkg from './package.json'
import authPkg from './auth/package.json'
import databasePkg from './database/package.json'
import firestorePkg from './firestore/package.json'
import storagePkg from './storage/package.json'
import initPkg from './init/package.json'

const pkgsByName = {
  auth: authPkg,
  database: databasePkg,
  firestore: firestorePkg,
  storage: storagePkg,
  init: initPkg
}

const components = ['auth', 'database', 'firestore', 'storage', 'init']

const peerDependencies = pkg.peerDependencies || {}
const external = [
  ...Object.keys(peerDependencies),
  'firebase/auth',
  'firebase/database',
  'firebase/firestore',
  'firebase/storage'
]

const plugins = [peerDepsExternal(), commonjs(), nodeResolve()]

export default components
  .map((component) => {
    const pkg = pkgsByName[component]
    return [
      {
        input: `${component}/index.js`,
        output: [
          { file: resolve(component, pkg.main), format: 'cjs' },
          { file: resolve(component, pkg.module), format: 'es' }
        ],
        plugins,
        external
      },
      {
        input: `${component}/index.js`,
        output: [
          {
            file: `dist/qonsoll-firebase-sevices-${component}.js`,
            format: 'iife',
            sourcemap: true,
            extend: true,
            name: '@qonsoll/firebase-service',
            globals: {
              firebase: 'firebase'
            }
          }
        ],
        plugins: [...plugins, terser()],
        external
      }
    ]
  })
  .reduce((a, b) => a.concat(b), [])
