import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import bundleSize from 'rollup-plugin-bundle-size'
import terser from '@rollup/plugin-terser'
import multiEntry from '@rollup/plugin-multi-entry'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import path from 'path'
import * as sass from 'sass'

function sassInlinePlugin() {
  return {
    name: 'sass-inline',
    resolveId(source, importer) {
      if (!source.endsWith('.sass') || !importer) return null
      return path.resolve(path.dirname(importer), source)
    },
    async load(id) {
      if (!id.endsWith('.sass')) return null

      const result = sass.compile(id, {
        loadPaths: [path.resolve('components'), path.dirname(id)],
        style: 'expanded'
      })

      if (Array.isArray(result.loadedUrls)) {
        result.loadedUrls.forEach((url) => {
          if (url.protocol === 'file:') {
            this.addWatchFile(url.pathname)
          }
        })
      }

      const processed = await postcss([autoprefixer, cssnano]).process(result.css, { from: id })
      return `export default ${JSON.stringify(processed.css)};`
    }
  }
}

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
    'components/byu-user-info/*.js',
    'components/byu-privacy.js'
  ],
  output: {
    file: 'dist/components.min.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    multiEntry(),
    sassInlinePlugin(),
    terser(),
    bundleSize()
  ]
}
