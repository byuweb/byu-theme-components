import resolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify'

export default {
  input: 'docsEntryPoint.js',
  output: {
    file: 'lib/bundle.js',
    format: 'iife',
    name: 'DocsDependencies'
  },
  plugins: [
    resolve(),
    minify({
      'mangle': { 'exclude': [] },
      'comments': false
    })
  ]
}
