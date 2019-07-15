import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'
import multiEntry from 'rollup-plugin-multi-entry'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

export default {
  // If using any exports from a symlinked project, uncomment the following:
  // preserveSymlinks: true,
  input: ['components/**/*.js'],
  output: {
    file: 'dist/byu-theme-components.min.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel(),
    multiEntry(),
    postcss({
      plugins: [
        autoprefixer,
        cssnano
      ]
    }),
    minify({
      'mangle': { 'exclude': [] },
      'comments': false
    })
  ]
}
