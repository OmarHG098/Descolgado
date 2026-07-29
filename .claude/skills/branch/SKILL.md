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
1. Run `git status --porcelain`. If there are uncommitted changes, STOP and tell the user to commit or stash first. Do not create the branch anyway.
2. Run `git branch --list <name>`. If the branch already exists, STOP and ask the user whether they want to switch to it instead of creating it.

## Create the branch
1. `git checkout main`
2. `git pull origin main`
3. `git checkout -b <type>/<slug>`
4. Confirm to the user: branch name, and that it's based on latest `main`


 