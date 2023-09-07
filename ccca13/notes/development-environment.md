# Development environment

## has **node** instaled?
`node -v`
- version 16 is LTS
### nvm
- node version manager
> offers an easy way to switch between different node versions
---
`npm init -y`
- creates a **package.json** 
- a place that defines
    - project dependencies
    - the author
    - version
---
# Recommended to use yarn instead of npm
---
# We are going to use TypeScript, so...
`yarn add typescript jest @types/jest ts-node ts-jest`
- Now we need to initialize a project with typescript
`npx tsc --init`
- or, add this code at package.json
```json
"scripts": {
    ...
    "init": "tsc --init"
},
```
- an run
`npm run init`
---
# What is TypeScript?
- superset or a language? both.
## Transpilação
> TypeScript é compilado para JavaScript

# At tsconfig.json
- remove comment from
`"incremental": true,`
- make compilation faster

- remove comment from
`"outDir": "./dist"`
- defines where builds shouw be saved

- add at the very bottom
` "include": [
    "src",
    "test"
]`
- to make "typescript" look at these folders
---
# ways to run
- `node src/main.ts`
- `npx ts-node`
- `"main": "tsc && node ./dist/main"`
    - then, `npm run main`
---
# how to run tests
- create a npm script to run the tests
`"test": "tsc && jest ./dist/test"`
- create your tests under ./dist/test
- ex: ./dist/test
```js
import { sum } from "../src/math";

test("Should sum 2 + 2", function() {
    const result = sum(2, 2);
    expect(result).toBe(4);
});
```
- `npm run test` output:
```
 PASS  dist/test/math.test.js
  ✓ Should sum 2 + 2 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.28 s
Ran all test suites matching /.\/dist\/test/i.
```
## another way
`npx ts-jest config:init`
- will create a config file, then you'll be able to run test with just
`npx jest`
