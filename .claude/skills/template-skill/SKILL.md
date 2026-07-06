---
name: ck:your-skill-name
description: One clear sentence describing what this skill does and the value it provides. Make it searchable and actionable.
when_to_use: "Invoke when the user is doing X, asking about Y, or needs Z capability."
user-invocable: true
argument-hint: "[task or subject] [--flag]"
category: dev-tools
keywords: [keyword1, keyword2, domain]
license: MIT
metadata:
  author: your-name
  version: "1.0.0"
---

# Your Skill Name

Short introduction paragraph. Explain the purpose in 2-3 sentences.

## When to Use This Skill

Use this skill when the user:
- Does A
- Asks for B
- Mentions C

Do **not** use for D or E (to avoid conflicts with other skills).

## Quick Start

```bash
# Example command or usage pattern
your-command "input" --option value
```

### Common Examples

```bash
# Example 1
your-command "example one"

# Example 2
your-command "example two" --flag
```

## Core Workflow

1. Step one
2. Step two
3. Step three

### Detailed Steps

#### Step 1: ...
Explain...

#### Step 2: ...
Explain...

## Best Practices

- Rule 1
- Rule 2
- Rule 3

## Advanced Usage

Optional section for power users.

## References

- `./references/something.md` - Detailed guide
- `./scripts/example.js` - Automation script

## Error Handling & Troubleshooting

Common issues and solutions.

---

**Reusability Note**:
This skill follows the portable SKILL.md standard (YAML frontmatter + structured markdown).
Other agent extensions can discover and load it if they support:
- Frontmatter keys: name, description, when_to_use, user-invocable
- Folder structure: skill-name/SKILL.md
