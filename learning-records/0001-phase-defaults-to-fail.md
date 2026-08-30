# 0001 — Success must be earned: the phase default

- **Date:** 2026-06-09
- **Lesson:** [0001-success-must-be-earned.html](../lessons/0001-success-must-be-earned.html)
- **Status:** taught, not yet retested

## What was taught

The SSSF phase primitive (`run.phase(PhaseParams(...))`), its three kinds, and the
inverted success contract: `Phase.status` is constructed as `fail` in `data_types.py`,
and only a clean exit from the `with` block flips it to `success`. Agent phases add two
conditions inside `ph.call`: the envelope parses against the declared output type, and
all gates report green.

Also taught the phase/run split in `Run.finish()`: `phases_ok and accepted`. A test phase
that ran a red suite is a successful phase and a failed run.

## Key insight

The default is not a safety net bolted on. It removes the need to enumerate failure
modes. Any path that does not reach a clean exit — crash, timeout, kill — is recorded
as failure, so unhandled cases degrade to honest rather than to false green.

## Evidence read

- `adw_modules/runner.py`, `Run.phase` and `Run.finish`
- `adw_modules/data_types.py`, `PhaseParams` and `Phase`
- `cookbooks/sssf_overview.md`, phase model section

## Open

- User has not yet answered Q1-Q3 in `NOTES.md`. Mission remains provisional.
- Quiz not yet completed by the user, so retention is unmeasured.
- Next in the zone of proximal development: the envelope contract and the synced triad
  (type in `data_types.py` ↔ `## Report` example in `user.md` ↔ `output_type=` at the
  call site).
