import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import bundleSize from 'rollup-plugin-bundle-size'
import minify from 'rollup-plugin-babel-minify'
import multiEntry from 'rollup-plugin-multi-entry'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

export default {
  input: [
    'components/byu-breadcrumbs/*.js',
    'components/byu-footer/*.js',
    'components/byu-footer-action-button/*.js',
    'components/byu-footer-column/*.js',
    'components/byu-header/*.js',
    'components/byu-menu/*.js',
    'components/byu-search/*.js',
    'components/byu-social-media-links/*.js',
    'components/byu-user-info/*.js'
  ],
  output: {
    file: 'dist/components.min.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
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
    }),
    bundleSize()
  ]
}
