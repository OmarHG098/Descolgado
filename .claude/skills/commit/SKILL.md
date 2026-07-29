---
name: commit
description: Stage and commit the current changes with a Conventional Commits message, never on main
argument-hint: "[optional context about why]"
---

You are committing the current changes in this repo.

## Guard: never commit on main
Run `git branch --show-current`. If the result is `main` (or `master`), STOP immediately and tell the user to create a branch first with `/branch`. Do not commit.

## Understand what changed
1. Run `git status --porcelain` to see what's staged/unstaged/untracked
2. Run `git diff` (and `git diff --staged` if anything's already staged) to see the actual changes
3. If nothing has changed, tell the user there's nothing to commit and stop

## Decide what to stage
- If the user's argument names specific files or a specific change, stage only that
- Otherwise, show the user the list of changed files and ask for confirmation before staging everything — don't assume every modified file
  belongs in one commit

## Write the message
Use Conventional Commits format: `<type>(<scope>): <summary>`
- `<type>` matches the branch prefix convention: feat, fix, chore, docs
- `<scope>` is the area touched (e.g. `sanity`, `navbar`, `piece-schema`)
- `<summary>` is imperative mood, under ~72 characters, no trailing period
- If the user passed context as an argument, use it to inform the summary — don't ignore it
- Add a short body only if the diff needs explaining beyond the summary line (e.g. why, not just what)

## Commit
1. `git add <the agreed files>`
2. `git commit -m "<message>"` (use `-m` with a heredoc if a body is needed)
3. Show the user the final commit message and `git log -1 --stat` so they can see exactly what landed