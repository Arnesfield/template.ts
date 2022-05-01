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
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint typescript
```

If Node module type declarations are required, include:

```sh
npm install --save-dev @types/node
```

---

Scripts for `package.json` (uses `rimraf`):

```json
{
  "prebuild": "rimraf lib",
  "build": "tsc",
  "lint": "eslint . --ext .js,.ts",
  "lint:fix": "npm run lint -- --fix",
  "start": "npm run build -- -w"
}
```
