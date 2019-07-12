import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import multiEntry from 'rollup-plugin-multi-entry'
import postcss from 'rollup-plugin-postcss'

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
    babel(),
    serve('.'),
    livereload(),
    multiEntry(),
    postcss({
      plugins: []
    }),
    minify({
      'mangle': { "exclude": [] },
      "comments": false,
    }),
  ]
};
