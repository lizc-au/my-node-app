# GitHub Pull Requests & Checks

## PR workflow (CLI quick steps)

1. git switch -c feature/short-desc
2. git add -A
3. git commit -m "feat: short desc"
4. git push -u origin HEAD
5. gh pr create --fill --base main
6. gh pr checks --watch
7. gh pr merge --squash --delete-branch
