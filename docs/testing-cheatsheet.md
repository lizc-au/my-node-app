# Testing Cheat Sheet

## Jest, npm test, coverage, watch

- Verified CI on 2025-09-07

## How to run tests

Quick start:

```bash
npm test
```

CI mode (non-interactive):

```bash
npm run test:ci
```

Watch mode (local dev):

```bash
npm test -- --watch
```

Smoke check (format+lint+tests):

```bash
npm run check
```

## Coverage

Generate coverage (HTML + lcov):

```bash
npm test -- --coverage
```

Open the HTML report:

```powershell
Start-Process ".\coverage\lcov-report\index.html"
```

## Focused runs

Single file:

```bash
npm test -- src/app.test.js
```

By test name (regex):

```bash
npm test -- -t "echo"
```

## Lint & format

Run ESLint:

```bash
npm run lint
```

Fix formatting with Prettier:

```bash
npm run format
```

Verify formatting only:

```bash
npm run format:check
```

## Jest CLI quick ref

Watch re-run:

```bash
npm test -- --watch
```

Run in single process (debuggy envs):

```bash
npm test -- --runInBand
```

Fail fast (stop on first fail):

```bash
npm test -- --bail
```

Related tests for changed files:

```bash
git diff --name-only HEAD~1 | npx jest --findRelatedTests
```

## Troubleshooting

Jest not found:

```bash
npm ci
```

Pre-commit hook blocks commit:

```bash
npx lint-staged --debug
```

Coverage folder missing:

```bash
npm test -- --coverage
```

Port in use during dev (EADDRINUSE):

```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
```

## Write your first test

Create a file at src/example.test.js with this content:

```javascript
describe("math", () => {
  it("adds 1 + 1 = 2", () => {
    expect(1 + 1).toBe(2);
  });
});
```

Run it only:

```bash
npm test -- src/example.test.js
```
