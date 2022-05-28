import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const plugins = [typescript()];

function output(...formats) {
  return formats.map(format => {
    return {
      dir: `lib/${format}`,
      format,
      preserveModules: true,
      sourcemap: true,
      exports: 'named'
    };
  });
}

export default [
  {
    input: 'src/index.umd.ts',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: pkg.name.slice(pkg.name.lastIndexOf('/') + 1),
      sourcemap: true,
      exports: 'default'
    },
    plugins
  },
  { input: 'src/index.ts', output: output('cjs', 'esm'), plugins }
];
