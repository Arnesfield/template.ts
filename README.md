# template.ts

TypeScript template repository.

---

Run initial setup:

```sh
npm init
```

Install dependencies:

```sh
npm install --save-dev \
  @rollup/plugin-typescript \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint rimraf rollup rollup-plugin-dts rollup-plugin-esbuild \
  rollup-plugin-terser typescript
```

If Node module type declarations are required, include:

```sh
npm install --save-dev @types/node
```

---

Example for `package.json`:

```json
{
  // "sideEffects": false,
  "exports": {
    "import": "./lib/index.mjs",
    "require": "./lib/index.cjs",
    "default": "./lib/index.mjs"
  },
  "main": "lib/index.cjs",
  "module": "lib/index.mjs",
  "browser": "lib/index.umd.js",
  "types": "lib/index.d.ts",
  "files": ["lib"],
  "scripts": {
    "prebuild": "rimraf lib",
    "build": "rollup -c",
    "lint": "eslint . --ext .js,.ts",
    "lint:fix": "npm run lint -- --fix",
    "start": "rollup -cw"
  }
}
```
