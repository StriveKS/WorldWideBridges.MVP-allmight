# Skill Standard

A colony-brain compatible Skill should be a folder containing at least:

```text
SKILL.md
README.md
```

Recommended:

```text
install.md
templates/
examples/
references/
scripts/
```

## SKILL.md requirements

The file should start with YAML metadata:

```yaml
---
name: skill-name
description: Use when...
---
```

The description should clearly say when the Skill should activate.

## Required sections

A strong Skill should include:

1. Purpose.
2. When to use.
3. When not to use.
4. Required behavior.
5. Process.
6. Output format.
7. Tool usage rules.
8. Safety and limitations.
9. Examples or references.

## Good Skill behavior

A Skill should be:

- specific;
- operational;
- reusable;
- tested through examples;
- safe;
- clear about limits;
- useful without requiring private context.

## Bad Skill behavior

Avoid:

- vague roleplay prompts;
- huge unstructured text;
- hidden secrets;
- dependence on paid-only tools without alternatives;
- unsafe automation;
- unsupported claims;
- unclear activation criteria.

## colony-brain compatibility

A Skill that contributes to colony-brain should also include:

- category;
- target user;
- free-first approach when possible;
- project memory compatibility;
- review notes;
- risks and limits.
