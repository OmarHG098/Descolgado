---
name: roadmap
description: Reads the roadmap, detects which chunks have merged into main, updates the Status column, and reports what to build next
argument-hint: ""
---

You are auditing project progress against the roadmap for this repo.

## Read the roadmap
Read `docs/descolgado-roadmap.md`. If it doesn't exist, STOP and tell the user — this skill has nothing to do without it. Parse the `## Development Plan` table (columns `#`, `Chunk`, `Status`).

## Find merged work
1. Run `git fetch origin`, then `git log main --merges --oneline` to see merge commits.
2. Check for GitHub CLI: run `gh --version`. If available, run `gh auth status` to confirm it's authenticated.
3. If `gh` is available and authenticated, prefer `gh pr list --state merged --json number,title,headRefName,mergedAt,files` — this gives branch name, title, and changed files for every merged PR in one call.
4. If `gh` is unavailable or not authenticated, fall back to `git log main --merges --oneline` plus `git log <merge-commit>^2 --oneline` per merge to recover the source branch/commits. This is best-effort — if the branch was deleted after merge, the name may not be recoverable. Note this limitation to the user rather than failing.

## Match each merged branch/PR to a chunk
For each merged branch found:
- Try the regex `^(feat|fix)/(\d+)-` against the branch name. If it matches, the captured number (strip leading zeros) is the chunk `#` — this is a confident match. **Deliberately excludes `chore`/`docs`**: those branch numbers are arbitrary housekeeping IDs, not chunk references (see the closing note below on `chore/NN-update-roadmap-status`), so treating them as authoritative here would misattribute chore/docs merges to unrelated chunk rows.
- If it doesn't match — including every `chore`/`docs` branch — use judgment: compare the PR title and changed file paths against each row's `Chunk` description in the table. For example, a merged PR whose files live under `.claude/skills/` and `.claude/agents/` corresponds to chunk 0, "Wire branch/PR skill + subagents to this plan," even though its branch was named `setup`. State your reasoning inline when you report this — don't silently assume a match.
- If no reasonable match can be made for a merged branch, list it as unmatched and ask the user to clarify. Don't guess.

## Find in-progress work
After resolving merged work above, look for chunks that have work started but not yet merged:
1. Gather candidate branches from: `git branch --show-current` (current branch), `git branch --list` (all local branches), and — if `gh` is available and authenticated — `gh pr list --state open --json number,headRefName` (open, unmerged PRs).
2. Match each candidate against the regex `^(feat|fix)/(\d+)-` — **note this deliberately excludes `chore` and `docs`**, unlike the merged-work regex. `chore`/`docs` branch numbers are arbitrary housekeeping IDs (see the closing note below: `chore/NN-update-roadmap-status`'s `NN` "doesn't need to match a table row") and are not meant to reference a chunk, so matching them here would misattribute unrelated branches to real chunk rows. Only `feat`/`fix` branches carry a genuine chunk number. Fallback judgment (title/file matching) does not apply here either — only confident regex matches count, since there's no PR content yet to reason about for most of these.
3. Note each match as a candidate `not started → in-progress` transition, but don't apply it yet — merged work takes priority (see below).

## Update the Status column
- For every chunk row with a confident match to merged work, set its `Status` cell to `done`.
- For every chunk row matched to in-progress work (from the previous section) that is currently `not started`, set its `Status` cell to `in-progress`. Never touch a row that's already `done` — if a stray local branch matches a chunk that merged work already confirmed as done, skip it, since merged status always wins.
- Leave every other row untouched — don't downgrade an `in progress` row you have no merge evidence for, and don't invent progress for anything unmatched.
- Use the Edit tool to change only the `Status` cell text of matched rows in `docs/descolgado-roadmap.md`. Preserve every other line and column exactly as-is.

## Report merged/in-progress-elsewhere status changes
Summarize which chunks changed status (old → new) and why (which branch/PR matched, and your reasoning if it was a fallback match), covering both the merged (`done`) and in-progress transitions from the two sections above.

## Identify the next chunk and start it
Identify the next chunk to work on: the lowest-numbered row still `not started` (or `in-progress` if one exists and nothing lower is `not started`).

**If no row is `not started` or `in-progress`** (every chunk is `done`): report that the roadmap is complete and stop. Don't branch, don't invent a next step.

**If that chunk is already `in-progress`** (some branch/PR from the detection step above already covers it): don't create a new branch. Just report which branch/PR it is and stop — the rest of this section doesn't apply.

**If that chunk is `not started`**, auto-branch into it:
1. Run `git branch --show-current`. If it isn't `main`, STOP here and tell the user to switch to `main` first — don't auto-branch away from a branch they may be mid-work on. Do not proceed to the steps below.
2. Derive the branch slug from the chunk's `Chunk` column text: drop anything from the first `(` onward, lowercase the rest, replace runs of non-alphanumeric characters with a single hyphen, trim leading/trailing hyphens, and keep at most the first 4-5 significant words so the slug stays short (matching the `branch` skill's own `[type/short-kebab-slug]` convention). Zero-pad the chunk `#` to 2 digits. The branch name is `feat/<NN>-<slug>` — e.g. chunk 4 "Home page feed (Piece cards, ficha visible)" → `feat/04-home-page-feed`.
3. Invoke the `branch` skill via the Skill tool (`skill: "branch"`, `args: "<the derived name>"`) — not by typing `/branch <name>` as if it were user input. Any uncommitted Status-column edits from the sections above ride along automatically (`/branch` stashes and re-pops them onto the new branch). If it fails or stops for any reason (name collision, dirty `main`, stash conflict), surface that failure and STOP — do not do the next step.
4. Once the branch is created, use the Edit tool to flip that chunk's `Status` cell from `not started` to `in-progress` in `docs/descolgado-roadmap.md`. Leave this edit uncommitted — it'll land with the chunk's first real commit, same as how other Status edits in this skill are left for the user to commit.
5. Report the new branch name, which chunk it maps to, and that it's now marked `in-progress` (uncommitted). Then ask the user to confirm scope/approach for implementing this chunk. Do not start writing implementation code in this same turn — wait for their answer.
