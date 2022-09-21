import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from "rollup-plugin-re"

const patchStr = `
  const libPath = app.vault.adapter.getFullPath(app.vault.configDir)
  addon = DEFAULT_ADDON || (DEFAULT_ADDON = require(path.resolve(libPath, "better_sqlite3.node")));
`

export default {
  input: './src/main.ts',
  output: {
    dir: 'D:/Project/Obsidian/obsidian-develop/.obsidian/plugins/obsidian-database',
    sourcemap: 'inline',
    format: 'cjs',
    exports: 'default',
  },
  external: ['obsidian'],
  plugins: [
    typescript(),
    nodeResolve({browser: true}),
    commonjs(),
    replace({
      patterns: [
        {
          match: /.*/,
          test: /addon\s=\sDEFAULT_ADDON\s\|\|\s\(DEFAULT_ADDON\s=\srequire.*\;/,
          replace: patchStr
        }
      ]
    })
  ]
};