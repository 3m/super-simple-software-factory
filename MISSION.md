# Mission: Super Simple Software Factory (SSSF)

> **Status: PROVISIONAL.** Written from inference, not from an interview. Confirm or rewrite before lesson 3.

## Why
Get repeatable results from coding agents on real work. Today an agent writes good code once and something different the next run. SSSF's answer is to move sequencing, retries, and acceptance out of the prompt and into Python. The goal is to be able to stamp this factory into one of my own repos, run a chain end to end, and then bend it to a workflow I actually repeat.

## Success looks like
- Explain, without notes, why a phase defaults to `fail` and what flips it.
- Read any `adw_*.py` and name every phase, its kind, and its owner.
- Write a new gate function and wire it into a call site.
- Add an agent to `sssf.config.yaml` with correct `model`, `writes`, and prompt paths.
- Author a new ADW chain from scratch that runs green.
- Query `sssf.db` to answer "which phase failed and why" without the UI.

## Constraints
- Prefer short lessons. One tangible win each.
- Learning by reading this repo's source, not by reimplementing it.
- No real repo named yet as the deployment target.

## Out of scope
- Building a competing framework.
- Pi/Claude Code internals beyond what SSSF calls.
- The Vue visualizer's frontend code.
