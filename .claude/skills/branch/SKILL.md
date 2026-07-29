---
name: branch
description: Create a new branch following the type/slug naming convention, from a clean, up-to-date main
argument-hint: "[type/short-kebab-slug]"
---

You are creating a new git branch for this repo.

## Input
The argument passed is the full branch name, e.g. `feat/03-design-system` or `fix/navbar-overflow`. If no argument was given, ask the user for one before doing anything — do not guess a name.

## Validate the name
- Type must be one of: `feat`, `fix`, `chore`, `docs`
- Slug must be kebab-case (lowercase, hyphens, no spaces or underscores)
- If it doesn't match, tell the user why and ask them to correct it — don't auto-fix it silently, naming is a deliberate choice

## Check for roadmap context (optional, don't fail if missing)
If `docs/descolgado-roadmap.md` exists in the repo, check whether the slug matches an unstarted chunk from its development plan table. If it does, mention which chunk this branch corresponds to. If the file doesn't exist, skip this step silently — it's a nice-to-have, not a requirement.

## Safety checks before creating the branch
1. Run `git status --porcelain`. If there are uncommitted changes, stash them automatically: `git stash push -u -m "auto-stash before /branch <name>"`. Tell the user you did this and why (so they're not surprised their working tree looks clean). Remember that a stash was made this run — you'll need to pop it back after the branch is created. If the `git stash push` command itself fails, STOP and report the error — don't proceed with a tree in an unknown state.
2. Run `git branch --list <name>`. If the branch already exists, STOP and ask the user whether they want to switch to it instead of creating it. (If you already stashed in step 1, pop it back — `git stash pop` — before stopping, so you don't leave the user's changes stuck in the stash. If that pop itself conflicts, do not attempt to auto-resolve it: tell the user the branch-exists question is still unresolved AND their changes are sitting in the stash — git preserves the stash on a failed pop — and point them at `git stash list` / `git stash pop` to sort out manually.)

## Create the branch
1. `git checkout main`
2. `git pull origin main`. If either this or the previous `checkout main` fails or reports a conflict (e.g. diverged local `main`), STOP immediately — do not proceed to `checkout -b` or attempt a `stash pop`. If a stash was made in the safety checks, tell the user it's still there and untouched (`git stash list`) so they can resolve `main` first and pop it manually afterwards.
3. `git checkout -b <type>/<slug>`
4. If a stash was made in the safety checks above, run `git stash pop`:
   - On success: tell the user their pending changes are now restored on the new branch, ready for `/commit`.
   - On conflict/failure: STOP. Tell the user the stashed changes conflict with the new branch's base — git does not drop the stash on a failed pop, so nothing is lost. Point them at `git stash list` and `git stash pop` to resolve it manually once they've sorted out the conflict. Do not attempt to auto-resolve it yourself.
5. Confirm to the user: branch name, and that it's based on latest `main`


 