---
name: ck:skill-development
description: Guide for creating high-quality, reusable, portable SKILL.md files that other agent extensions and tools can discover, validate, and load.
when_to_use: "Use when creating a new skill, refactoring an existing skill, or publishing a skill for use by other agents/extensions."
user-invocable: true
argument-hint: "[create|validate|publish] [skill-name]"
category: dev-tools
keywords: [skill, creation, template, portable, extension, reuse]
license: MIT
metadata:
  author: your-project
  version: "1.0.0"
---

# Skill Development Guide

How to create portable, high-quality `SKILL.md` files that can be used across different agent systems and extensions.

## Goals of Portable Skills

- **Discoverable**: Other agents can find them via search or manifest.
- **Validatable**: Have a machine-readable frontmatter schema.
- **Loadable**: Simple folder + SKILL.md structure.
- **Self-contained**: Include enough context without requiring the original environment.
- **Composable**: Can declare dependencies on other skills.

## Standard Structure

```
skill-name/
├── SKILL.md                 # Required - main definition
├── references/              # Optional - deeper guides
│   └── workflow-foo.md
├── scripts/                 # Optional - automation
│   └── helper.js
└── data/                    # Optional - prompts, templates, fixtures
```

## Frontmatter Requirements (YAML)

```yaml
---
name: ck:your-skill-name
description: One clear sentence...
when_to_use: "Invoke when..."
user-invocable: true
argument-hint: "[task] [--flag]"
category: dev-tools
keywords: [searchable, tags]
license: MIT
metadata:
  author: name
  version: "1.0.0"
---
```

**Required keys**:
- `name`
- `description`
- `when_to_use`
- `user-invocable: true`

See `.claude/schemas/skill-schema.json` for the full JSON Schema.

## Writing Guidelines

1. Start with a strong `description` (searchable by other agents).
2. Make `when_to_use` explicit and trigger-oriented.
3. Keep the body practical and example-rich.
4. Use relative paths for references/scripts.
5. Add a "Reusability Note" at the bottom if the skill is meant to be shared.

## Validation

You can validate frontmatter using the schema:

```bash
# Example using ajv-cli or similar
npx ajv validate -s .claude/schemas/skill-schema.json -d path/to/SKILL.md
```

Or write a small script that extracts the YAML frontmatter and validates it.

## Publishing / Sharing

Recommended ways to share portable skills:

1. Put in a public repo under `skills/your-skill/SKILL.md`
2. Include `skills-manifest.json` at repo root (list of skills + descriptions)
3. Document install: "copy folder into your `.claude/skills/` or equivalent"
4. Use clear license (MIT recommended)

## Anti-Patterns to Avoid

- Hard-coded absolute paths
- Assuming specific project folder layout outside the skill
- Overly long descriptions (>600 chars)
- Missing `when_to_use`
- Hiding capabilities (set `user-invocable: true`)

## Related

- `template-skill/SKILL.md` - clean starting point
- `.claude/schemas/skill-schema.json` - validation schema
- `find-skills` patterns from other ecosystems (for inspiration)
