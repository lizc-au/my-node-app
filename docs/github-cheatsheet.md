# GitHub Pull Requests & Checks

## PR workflow (CLI quick steps)

1. `git switch -c feature/short-desc`
2. `git add -A`
3. `git commit -m "feat: short desc"`
4. `git push -u origin HEAD`
5. `gh pr create --fill --base main`
6. `gh pr checks --watch`
7. `gh pr merge --squash --delete-branch`

## Sync local main to origin/main (safe reset)

Note: discards local commits on main; move any work to a branch first.

1. `git switch main`
2. `git fetch origin --prune`
3. `git reset --hard origin/main`

## Watch PR checks (gh)

1. `gh pr checks --watch`
2. `gh pr checks <number> --watch`

## Merge PR (squash + delete, non-interactive)

1. `echo y | gh pr merge <number> --squash --delete-branch`

## Move accidental main commit to PR branch

Note: if push to main is blocked by rules, move your local commit to a branch and open a PR.

1. `git switch -c fix/short-desc`
2. `git push -u origin HEAD`
3. `gh pr create --fill --base main`

## Update PR branch with latest main (merge)

1. `git fetch origin --prune`
2. `git switch <branch>`
3. `git merge origin/main`
4. `npm test`
5. `git push`

## Update PR branch with latest main (rebase)

1. `git fetch origin --prune`
2. `git switch <branch>`
3. `git rebase origin/main`
4. `Resolve conflicts → git add <file> ; git rebase --continue`
5. `git push --force-with-lease`

## Add reviewers/assignees/labels to PR (gh)

1. `gh pr edit <number> --add-reviewer <user1>,<user2>`
2. `gh pr edit <number> --add-assignee <user1>,<user2>`
3. `gh pr edit <number> --add-label "label-one","label two"`

## Review a PR (approve/comment/request changes)

1. `gh pr review <number> --approve --body "LGTM"`
2. `gh pr review <number> --comment --body "Nit: ..."`
3. `gh pr review <number> --request-changes --body "Please ..."`

## Checkout a PR locally (gh)

- `gh pr checkout <number>`
- `gh pr checkout <url>`
- `git switch main` # back to main

## Create draft PR / mark ready (gh)

1. `gh pr create --base main --draft --title "title" --body "desc"`
2. `gh pr ready <number>`
3. `gh pr ready <number> --undo`

## Edit PR title/body/base (gh)

- `gh pr edit <number> --title "New title"`
- `gh pr edit <number> --body "Updated description..."`
- `gh pr edit <number> --base main`

## List & view PRs (gh)

- `gh pr list`
- `gh pr view <number>`
- `gh pr view <number> --web`
- `gh pr status`

## Diff a PR (gh)

- `gh pr diff <number>`
- `gh pr diff <number> --name-only`
- `gh pr diff <number> --color=always > pr.diff` # save

## Enable auto-merge for PR (gh)

- `gh pr merge <number> --auto --squash`
- `gh pr merge <number> --disable-auto`

## Close/Reopen PR (gh)

1. `gh pr close <number> --delete-branch`
2. `gh pr reopen <number>`

## Auto-close issues from PR (linking PR to Issues)

> [Full GitHub linking instructions here](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)

1. Link in PR body → Type KEYWORD #ISSUE-NUMBER e.g. FIXES #nn (also: CLOSES or RESOLVES)
2. Multiple links → Type Fixes #nn, Closes #nn
3. CLI → `gh pr edit <pr-number> --body "Fixes #nn"`

## Re-run GitHub Actions (gh run)

1. `gh run list --limit 10`
2. `gh run view <id> --log`
3. `gh run rerun <id>`

## Checkout PR without gh (raw git)

1. `git fetch origin pull/<number>/head:pr-<number>`
2. `git switch pr-<number>`
3. `git branch -D pr-<number>` # cleanup

## Rename branch (local + remote)

1. `git branch -m old-name new-name`
2. `git push origin -u new-name`
3. `git push origin --delete old-name`

## Amend last commit (message or files)

1. `git commit --amend -m "New message"`
2. `git add <file> ; git commit --amend --no-edit`
3. `git push --force-with-lease`

## Undo last commit (soft/mixed/hard)

- `git reset --soft HEAD^` # keep staged
- `git reset HEAD^` # unstage, keep files
- `git reset --hard HEAD^` # discard changes

## Cancel GitHub Actions run (gh run cancel)

- `gh run list --limit 10`
- `gh run cancel <id>`
- `gh run view <id> --log` # verify

## Create PR with auto-fill (gh)

- `gh pr create --base main --fill`
- `gh pr create --base main --fill --draft`
- `gh pr create --fill --web` # open in browser

## Safe sync: fetch --prune + pull --ff-only

1. `git fetch origin --prune` # update remotes & clean stale origin
2. `git pull --ff-only` # fast-forward only; fail if diverged

## Restore file(s)

1. `git restore <file>` # discard unstaged changes
2. `git restore --staged <file>` # unstage, keep file
3. `git restore --source=HEAD~1 <file>` # from previous commit

## Cross branch commits

1. `git cherry-pick <sha>`
2. `git cherry-pick <sha1> <sha2>`
3. Conflicts → `fix; git add <file>; git cherry-pick --continue`
4. Abort → `git cherry-pick --abort`

## Interactive rebase

1. `git rebase -i HEAD~N` # pick / squash / fixup
2. Resolve → `git add <file>; git rebase --continue`
3. `git push --force-with-lease` # force push changes, but only if the remote repository is in the same state as my last fetch

## Notes

- **HEAD~N** is a shortcut that refers to the commit that took place N before the most recent commit. (i.e. **HEAD~** is the state of the branch one commit before the HEAD commit.) The HEAD normally points to the branch user is currently in.

> - `git show HEAD~N`
> - `git diff HEAD~ HEAD~~` # HEAD~~ is the same as HEAD~2
> - `cat .git/HEAD` # to verify the HEAD is pointing to the expected branch (can be detached to point to a particular commit)

- **HEAD^N** - e.g. **HEAD^1** would reference the first parent of the HEAD commit, **HEAD^2** would reference the second parent of the HEAD commit (if it exists), and so on.

- **HEAD@{N}** is a reference to a specific state of the HEAD pointer in the Git reflog.

- **The Git reflog** is a reference log that stores all the changes that have been made to the HEAD pointer in a local Git repository. Most recent entry is entry number 0. The reflog allows for recovering from mistakes or unintended changes to the repository.
  > - `git reflog` # to view recent commits, checkouts, and branch updates. Use the commit hash returned to restore commits if needed.

## Find commit that introduced a bug (git bisect)

1. `git bisect start`
2. `git bisect bad HEAD`
3. `git bisect good <known-good-sha>`
4. Repeat: build/test → `git bisect good | git bisect bad`
5. (optional) `git bisect run "npm run test:ci"`
6. `git bisect reset`

## Tag a release (git tag)

- `git tag -a vX.Y.Z -m "Release vX.Y.Z"`
- `git push origin vX.Y.Z`
- `git push origin --tags` # push all tags

## Fixing merge conflicts (mini-guide)

### 1) Identify conflicted files

```bash
git status --porcelain=v1
git diff --name-only --diff-filter=U
```

### 2) Resolve conflicts in your editor (look for <<<<<<<, =======, >>>>>>>)

### 3) Mark resolved files

```bash
git add <file>   # repeat per file
```

### 4) Continue the operation

- If you were merging:

```bash
git merge --continue
```

- If you were rebasing:

```bash
git rebase --continue
```

- To back out:

```bash
git merge --abort   # or
git rebase --abort
```

### 5) Sanity check

```bash
npm test
```

## Rebase vs merge (quick comparison)

### Merge

- Preserves true history; creates a merge commit.
- Safer for shared branches; easy to revert.
- Command:

```bash
git switch main
git merge feature/my-branch   # or: git merge --no-ff feature/my-branch
```

### Rebase

- Replays your commits on top of target; linear history.
- Do not rebase public/shared branches.
- Commands:

```bash
git switch feature/my-branch
git fetch origin
git rebase origin/main   # or: git rebase -i origin/main
```

### Common follow-ups

```bash
# After conflicts:
git add <file>
git rebase --continue   # or: git merge --continue

# Abort if needed:
git rebase --abort      # or: git merge --abort
```

## Git stash (quick guide)

### Save WIP (tracked only)

```bash
git stash push -m "wip: message"
```

### Include untracked files

```bash
git stash push -u -m "wip: with untracked"
```

### List stashes

```bash
git stash list
```

### Show details for a stash

```bash
git stash show -p 'stash@{0}'
```

### Apply (keep stash)

```bash
git stash apply 'stash@{0}'
```

### Pop (apply + drop)

```bash
git stash pop 'stash@{0}'
```

### Drop a specific stash

```bash
git stash drop 'stash@{0}'
```

### Clear all stashes

```bash
git stash clear
```

## Troubleshooting: state-of-the-union

### Quick snapshot

```bash
git status -sb
git branch -vv
git log --oneline --decorate --graph --max-count=20
```

### Conflicts / WIP

```bash
git diff --name-only --diff-filter=U
git stash list
```

### Divergence vs main

```bash
git fetch --prune --tags
git rev-list --left-right --count origin/main...HEAD
```

### What am I running on?

```bash
git remote -v
git rev-parse HEAD
git rev-parse origin/main
node -v && npm -v
```

### Sanity

```bash
npm test
```

### Undo or revert commits (quick)

Use when you need to back out a commit or merge without rewriting history.

1. Inspect: `git log --oneline`
2. Revert a commit: `git revert <sha>`
3. Push: `git push`
4. Revert a merge commit: `git revert -m 1 <merge-sha>`
