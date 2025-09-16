# my-node-app

Run: npm run dev
Env: PORT=4000 in .env

Endpoints:
GET / -> Hello
GET /api/health -> { ok: true }
POST /api/echo -> echoes JSON body
[![Node CI](https://github.com/lizc-au/my-node-app/actions/workflows/ci.yml/badge.svg)](https://github.com/lizc-au/my-node-app/actions/workflows/ci.yml)

[![Latest release](https://img.shields.io/github/v/release/lizc-au/my-node-app?include_prereleases&sort=semver)](https://github.com/lizc-au/my-node-app/releases)
[![CodeQL](https://github.com/lizc-au/my-node-app/actions/workflows/codeql.yml/badge.svg)](https://github.com/lizc-au/my-node-app/actions/workflows/codeql.yml)

 <!-- ci-validate -->

nProtection verify 2025-09-14T16:24:20
nFinal protection verify 2025-09-14T16:35:42
rnRuleset validation: 2025-09-15T20:08:13 AWST
rn## Branch rulesrn- Required checks: CodeQL, buildrn- Strict up-to-date: ONrn- Do not require on create: ONrn- Ruleset JSON: [docs/ruleset-main.json](./docs/ruleset-main.json)rn
rn## Create a new repo from this templaternrn### Using gh CLIrnrnPublic:rn`powershellrngh repo create <NEW-REPO> --template lizc-au/my-node-app --publicrn`rnrnPrivate:rn`powershellrngh repo create <NEW-REPO> --template lizc-au/my-node-app --privatern`rnrnThen clone:rn`powershellrngh repo clone lizc-au/<NEW-REPO>rncd <NEW-REPO>rn`rnrn### Via web UIrn[Use this template](https://github.com/lizc-au/my-node-app/generate)
