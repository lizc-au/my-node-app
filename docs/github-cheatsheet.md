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

## Watch PR checks (gh)rnrn1. gh pr checks --watchrn2. gh pr checks <number> --watch

## Merge PR (squash + delete, non-interactive)rnrn1. echo y | gh pr merge <number> --squash --delete-branch

## Move accidental main commit to PR branchrnrnNote: if push to main is blocked by rules, move your local commit to a branch and open a PR.rnrn1. git switch -c fix/short-descrn2. git push -u origin HEADrn3. gh pr create --fill --base main

## Update PR branch with latest main (merge)rnrn1. git fetch origin --prunern2. git switch <branch>rn3. git merge origin/mainrn4. npm testrn5. git push

## Update PR branch with latest main (rebase)rnrn1. git fetch origin --prunern2. git switch <branch>rn3. git rebase origin/mainrn4. Resolve conflicts → git add <file> ; git rebase --continuern5. git push --force-with-lease

## Add reviewers/assignees/labels to PR (gh)rnrn1. gh pr edit <number> --add-reviewer <user1>,<user2>rn2. gh pr edit <number> --add-assignee <user1>,<user2>rn3. gh pr edit <number> --add-label "label-one","label two"

## Review a PR (approve/comment/request changes)rnrn1. gh pr review <number> --approve --body "LGTM"rn2. gh pr review <number> --comment --body "Nit: ..."rn3. gh pr review <number> --request-changes --body "Please ..."

## Checkout a PR locally (gh)rnrn1. gh pr checkout <number>rn2. gh pr checkout <url>rn3. git switch main # back to main

## Create draft PR / mark ready (gh)rnrn1. gh pr create --base main --draft --title "title" --body "desc"rn2. gh pr ready <number>rn3. gh pr ready <number> --undo

## Edit PR title/body/base (gh)rnrn1. gh pr edit <number> --title "New title"rn2. gh pr edit <number> --body "Updated description..."rn3. gh pr edit <number> --base main

## List & view PRs (gh)rnrn1. gh pr listrn2. gh pr view <number>rn3. gh pr view <number> --webrn4. gh pr status

## Diff a PR (gh)rnrn1. gh pr diff <number>rn2. gh pr diff <number> --name-onlyrn3. gh pr diff <number> --color=always > pr.diff # save

## Enable auto-merge for PR (gh)rnrn1. gh pr merge <number> --auto --squashrn2. gh pr merge <number> --disable-auto

## Close/Reopen PR (gh)rnrn1. gh pr close <number> --delete-branchrn2. gh pr reopen <number>

## Auto-close issues from PR (Fixes #)rnrn1. In PR body: Fixes #123 (also: Closes, Resolves)rn2. Multiple: Fixes #123, closes #124rn3. CLI: gh pr edit <number> --body "Fixes #123"

## Re-run GitHub Actions (gh run)rnrn1. gh run list --limit 10rn2. gh run view <id> --logrn3. gh run rerun <id>

## Checkout PR without gh (raw git)rnrn1. git fetch origin pull/<number>/head:pr-<number>rn2. git switch pr-<number>rn3. git branch -D pr-<number> # cleanup

## Rename branch (local + remote)rnrn1. git branch -m old-name new-namern2. git push origin -u new-namern3. git push origin --delete old-name

## Amend last commit (message or files)rnrn1. git commit --amend -m "New message"rn2. git add <file> ; git commit --amend --no-editrn3. git push --force-with-lease

## Undo last commit (soft/mixed/hard)rnrn1. git reset --soft HEAD^ # keep stagedrn2. git reset HEAD^ # unstage, keep filesrn3. git reset --hard HEAD^ # discard changes

## Cancel GitHub Actions run (gh run cancel)rnrn1. gh run list --limit 10rn2. gh run cancel <id>rn3. gh run view <id> --log # verify

## Create PR with auto-fill (gh)rnrn1. gh pr create --base main --fillrn2. gh pr create --base main --fill --draftrn3. gh pr create --fill --web # open in browser
