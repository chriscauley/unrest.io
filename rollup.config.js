import riot  from 'rollup-plugin-riot'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import minify from 'rollup-plugin-babel-minify';
import sourcemaps from 'rollup-plugin-sourcemaps';

const riot_options = {
  include: "**/*tag",
}

const plugins = [
  riot(riot_options),
  resolve(),
  babel(),
  sourcemaps({ comments: false, }),
]

const output = {
  file: "dist/unrest.js",
  format: 'umd',
  name: 'uR',
  globals: {
    riot: 'riot',
    'date-fns': 'date-fns',
    'object-hash': 'object-hash',
    lodash: 'lodash',
    cookie: 'cookie',
    querystring: 'querystring',
  }
}

if (process.env.UR_MIN) {
  output.file = "dist/unrest.min.js"
  plugins.push(minify())
}

export default {
  input: 'src/main.js',
  output,
  plugins,
  external: ['riot', 'date-fns', 'object-hash', 'lodash', 'querystring','cookie'],
};