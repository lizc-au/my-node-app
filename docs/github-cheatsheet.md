# GitHub Pull Requests & Checks

## PR workflow (CLI quick steps)

1. git switch -c feature/short-desc
2. git add -A
3. git commit -m "feat: short desc"
4. git push -u origin HEAD
5. gh pr create --fill --base main
6. gh pr checks --watch
7. gh pr merge --squash --delete-branch

## Sync local main to origin/main (safe reset)rnrnNote: discards local commits on main; move any work to a branch first.rnrn1. git switch mainrn2. git fetch origin --prunern3. git reset --hard origin/main
