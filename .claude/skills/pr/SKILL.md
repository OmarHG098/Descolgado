---
name: pr
description: Runs code, security, and design review, then pushes the branch and opens a PR against main
argument-hint: "[optional PR title]"
---

You are opening a pull request for the current branch.

## Guards
1. Run `git branch --show-current`. If it's `main`, STOP — tell the user to create a branch with `/branch` first.
2. Run `git log main...HEAD --oneline`. If empty, STOP — nothing to PR.
3. Run `git status --porcelain`. If there are uncommitted changes, STOP — tell the user to `/commit` first.

## Run the three reviews
Invoke the `code-reviewer`, `security-reviewer`, and `design-system-guardian`
subagents via the Agent tool. Pass each the current branch context.

If **any** subagent returns a blocking result (CHANGES REQUESTED, BLOCKING, or DRIFT DETECTED), STOP here. List every issue raised, grouped by which reviewer raised it. Do not push. Ask the user to fix the issues and run `/pr` again.

## If all three approve
1. `git push -u origin <current-branch-name>`
2. Check for GitHub CLI: run `gh --version`. If that fails, skip to the manual fallback below.
3. If `gh` exists, run `gh auth status` to confirm it's authenticated. If not authenticated, skip to the manual fallback.
4. If `gh` is available and authenticated: write a PR title (use the
argument if one was given, otherwise derive one from the branch name and commits) and a body with sections `## Summary`, `## Changes`,
`## Testing`, `## Review` (note that code, security, and design reviewall passed). Run `gh pr create --base main --head <branch> --title "<title>" --body "<body>"`.
5. **Manual fallback** (no `gh`, or not authenticated): don't fail silently. Print the full PR title and body you would have used, and give the user this URL to open the PR manually: `https://github.com/OmarHG098/Descolgado/compare/main...<branch>?expand=1`