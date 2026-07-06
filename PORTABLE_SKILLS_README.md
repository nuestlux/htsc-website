# Portable Skills Pack

This folder contains **portable, reusable `SKILL.md` files** designed to be consumed by multiple agent extensions (Claude Code, OpenCode, custom agents, etc.).

## Structure

```
.claude/
├── schemas/
│   └── skill-schema.json          # JSON Schema for frontmatter validation
└── skills/
    ├── template-skill/
    │   └── SKILL.md               # Clean starter template
    └── skill-development/
        └── SKILL.md               # Guide for creating good portable skills

skills-manifest.json               # Machine-readable index of available skills
```

## How to Use in Other Extensions

1. Copy the desired `skill-name/` folder into your agent's skills directory:
   - Claude: `.claude/skills/`
   - OpenCode: `.opencode/skills/`
   - Custom: wherever your loader looks

2. Your agent/tool should:
   - Parse the YAML frontmatter at the top of `SKILL.md`
   - Use `name`, `description`, `when_to_use` for discovery/routing
   - Respect `user-invocable: true`

3. Optional: validate against `skill-schema.json`

## Frontmatter Contract (Minimal)

```yaml
---
name: ck:example
description: What this skill does.
when_to_use: "Invoke when user needs X."
user-invocable: true
---
```

Full contract is defined in `schemas/skill-schema.json`.

## Why This Exists

Most agent skill systems are currently siloed. This pack provides a **minimal, practical standard** so skills can be written once and reused across tools.

## Contributing New Portable Skills

- Start from `template-skill/SKILL.md`
- Follow guidelines in `skill-development/SKILL.md`
- Keep description + when_to_use concise and searchable
- Prefer MIT license for maximum reusability
- Update `skills-manifest.json`

## License

MIT (see individual skills for exact terms)
