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
  @rollup/plugin-eslint @rollup/plugin-typescript \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  concurrently esbuild eslint rimraf rollup \
  rollup-plugin-bundle-size rollup-plugin-dts rollup-plugin-esbuild \
  typescript
```

Install testing dependencies:

```sh
npm install --save-dev \
  @types/chai @types/mocha @types/sinon \
  chai esbuild-runner mocha sinon
```

If Node module type declarations are required, include:

```sh
npm install --save-dev @types/node
```

Finally, sort `package.json` with [sort-package-json](https://www.npmjs.com/package/sort-package-json):

```sh
sort-package-json
```
