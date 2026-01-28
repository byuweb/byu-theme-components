import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'docsEntryPoint.js',
  output: {
    file: 'lib/bundle.js',
    format: 'iife',
    name: 'DocsDependencies'
  },
  plugins: [
    resolve(),
    terser()
  ]
}
