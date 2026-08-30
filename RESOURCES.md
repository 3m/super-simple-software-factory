# Super Simple Software Factory Resources

## Knowledge

- [README.md (this repo)](./README.md)
  The authoritative narrative: why the control plane moves into Python, the roster, phases, envelopes, gates, the trace, and an honest "where it can still fail" table. Use for: any conceptual claim about SSSF.
- [`.claude/skills/sssf/SKILL.md`](./.claude/skills/sssf/SKILL.md)
  Hard rules plus the request-routing table into nine cookbooks. Use for: how an orchestrator agent is meant to operate the factory.
- [`.claude/skills/sssf/cookbooks/sssf_overview.md`](./.claude/skills/sssf/cookbooks/sssf_overview.md)
  The system map: stamped-repo layout, phase model, envelope contract, in ~90 lines. Use for: the fastest correct orientation.
- [`.claude/skills/sssf/references/`](./.claude/skills/sssf/references/)
  Deep specs: `config.md` (roster schema), `handoff.md` (envelope/context contract), `observability.md` (the seven trace tables). Use for: exact field names before writing code.
- [`.claude/skills/sssf/templates/adws/adw_modules/`](./.claude/skills/sssf/templates/adws/adw_modules/)
  All low-level logic. `runner.py` is the phase primitive, `gates.py` the acceptance functions, `data_types.py` the envelope types, `tracer.py` the SQLite writer. Use for: ground truth when docs and memory disagree.
- [YouTube: "My Super Simple Software Factory (For Agentic Engineers)" — IndyDevDan](https://youtu.be/haUfb1ievTE)
  The author's own walkthrough. Use for: intent and design rationale behind the repo.
- [DeepWiki: disler/super-simple-software-factory](https://deepwiki.com/disler/super-simple-software-factory)
  Generated architecture docs, including a page per subsystem. Use for: a second angle when the source is dense. Treat as secondary, it is machine-written.
- [`example` branch](https://github.com/disler/super-simple-software-factory/tree/example)
  The factory already stamped into a repo, with a demo app and real traces. Use for: seeing outputs before you generate your own.

## Wisdom (Communities)

- [IndyDevDan YouTube channel](https://www.youtube.com/@indydevdan)
  The source community for these patterns. Comments carry practitioner critique.
- [r/ClaudeAI](https://reddit.com/r/ClaudeAI) and [r/LocalLLaMA](https://reddit.com/r/LocalLLaMA)
  Use for: sanity-checking agent-orchestration choices against people running them daily.
- [GitHub Issues on disler/super-simple-software-factory](https://github.com/disler/super-simple-software-factory/issues)
  Use for: real failure reports from people who stamped it into their own repos.

## Gaps

- No independent, critical writeup of SSSF yet. Everything found so far is the author's or derived from it.
- No named target repo for the user, so no resource on their actual domain.
