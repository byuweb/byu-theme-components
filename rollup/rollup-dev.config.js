import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import serve from 'rollup-plugin-serve'
import multiEntry from '@rollup/plugin-multi-entry'
import bundleSize from 'rollup-plugin-bundle-size'

export default {
  input: [
    'components/byu-theme-components.js'
  ],
  output: {
    file: 'dist/byu-theme-components.min.js',
    format: 'iife',
    sourcemap: true,
    compact: true
  },
  plugins: [
    resolve(),
    json({
      include: 'package.json',
      compact: true
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    serve('.'),
    multiEntry(),
    terser(),
    bundleSize()
  ]
}
