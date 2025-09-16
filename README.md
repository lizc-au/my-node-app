# my-node-app (Template)

- **Run:** npm run dev
- **Env:** PORT=4000 in .env

## Endpoints:

- GET / -> Hello
- GET /api/health -> { ok: true }
- POST /api/echo -> echoes JSON body

## Badges:

- [![Node CI](https://github.com/lizc-au/my-node-app/actions/workflows/ci.yml/badge.svg)](https://github.com/lizc-au/my-node-app/actions/workflows/ci.yml)
- [![Latest release](https://img.shields.io/github/v/release/lizc-au/my-node-app?include_prereleases&sort=semver)](https://github.com/lizc-au/my-node-app/releases)
- [![CodeQL](https://github.com/lizc-au/my-node-app/actions/workflows/codeql.yml/badge.svg)](https://github.com/lizc-au/my-node-app/actions/workflows/codeql.yml)

 <!-- ci-validate -->

**Protection** verify 2025-09-14T16:24:20

**Final protection** verify 2025-09-14T16:35:42

**Ruleset validation:** 2025-09-15T20:08:13 AWST

## Branch rules

- Required checks: CodeQL, build
- Strict up-to-date: ON
- Do not require on create: ON
- Ruleset JSON: [docs/ruleset-main.json](./docs/ruleset-main.json)

## Create a new repo from this template

### Using gh CLI in Powershell:

- ### Public:

```powershell
gh repo create <NEW-REPO> --template lizc-au/my-node-app --public
```

- ### Private:

```powershell
gh repo create <NEW-REPO> --template lizc-au/my-node-app --private
```

- ### Then clone:

```powershell
gh repo clone lizc-au/<NEW-REPO>
cd <NEW-REPO>
```

### Via web UI:

- Use this template [github.com/lizc-au/my-node-app/generate](https://github.com/lizc-au/my-node-app/generate)
