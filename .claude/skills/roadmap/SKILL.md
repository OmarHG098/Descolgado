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
- Try the regex `^(feat|fix|chore|docs)/(\d+)-` against the branch name. If it matches, the captured number (strip leading zeros) is the chunk `#` — this is a confident match.
- If it doesn't match, use judgment: compare the PR title and changed file paths against each row's `Chunk` description in the table. For example, a merged PR whose files live under `.claude/skills/` and `.claude/agents/` corresponds to chunk 0, "Wire branch/PR skill + subagents to this plan," even though its branch was named `setup`. State your reasoning inline when you report this — don't silently assume a match.
- If no reasonable match can be made for a merged branch, list it as unmatched and ask the user to clarify. Don't guess.

## Update the Status column
- For every chunk row with a confident match to merged work, set its `Status` cell to `done`.
- Leave every other row untouched — don't downgrade an `in progress` row you have no merge evidence for, and don't invent progress for anything unmatched.
- Use the Edit tool to change only the `Status` cell text of matched rows in `docs/descolgado-roadmap.md`. Preserve every other line and column exactly as-is.

## Report what's next
- Summarize which chunks changed status (old → new) and why (which branch/PR matched, and your reasoning if it was a fallback match).
- Identify the next chunk to work on: the lowest-numbered row still `not started` (or `in progress` if one exists and nothing lower is `not started`).
- Tell the user the roadmap file now has an uncommitted edit. Suggest running `/branch chore/NN-update-roadmap-status` then `/commit` if they want to land it — this is a chore, not a numbered dev chunk, so `NN` doesn't need to match a table row. Do not create a branch or commit yourself.
