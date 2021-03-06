/* eslint-disable */
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import inject from 'rollup-plugin-inject';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

const processShim = '\0process-shim';

const prod = process.env.PRODUCTION;
const env = prod ? 'production' : 'development';

console.log(`Creating ${env} bundle...`);

const targets = prod
  ? [{ dest: 'dist/hedron-glamorous.min.js', format: 'umd' }]
  : [
      { dest: 'dist/hedron-glamorous.js', format: 'umd' },
      { dest: 'dist/hedron-glamorous.es.js', format: 'es' },
    ];

const plugins = [
  {
    resolveId(importee) {
      if (importee === processShim) return importee;
      return null;
    },
    load(id) {
      if (id === processShim) return 'export default { argv: [], env: {} }';
      return null;
    },
  },
  babel({
    exclude: 'node_modules/**',
    babelrc: false,
    presets: ['es2015-rollup', 'react', 'stage-2'],
    plugins: ['array-includes', 'external-helpers', 'flow-react-proptypes'],
  }),
  commonjs(),
  inject({
    process: processShim,
  }),
  json(),
  nodeResolve(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development'),
  }),
];

if (prod) plugins.push(uglify());

export default {
  entry: 'src/index.js',
  exports: 'named',
  external: ['react', 'glamorous', 'glamor'],
  globals: { react: 'React', glamorous: 'glamorous', glamor: 'Glamor' },
  moduleName: 'hedronGlamorous',
  plugins,
  targets,
};
