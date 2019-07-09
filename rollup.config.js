import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import multiEntry from 'rollup-plugin-multi-entry';
import style from 'rollup-plugin-lit-html-style';

const esmodules = true;
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
    style({ esmodules }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.scss']
    }),
    multiEntry(),
    minify({
      'mangle': { "exclude": [] },
      "comments": false,
    }),
  ]
};
