import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import minify from 'rollup-plugin-babel-minify'
import multiEntry from 'rollup-plugin-multi-entry'
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
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    multiEntry(),
    minify({
      'mangle': { 'exclude': [] },
      'comments': false
    }),
    bundleSize()
  ],
}
