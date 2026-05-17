# LLM Orchestration Patterns

## Goal

Use multiple LLMs and tools without losing project continuity.

## Source of truth

`PROJECT_HISTORY.md` is the operational source of truth.

`CONTEXTO_LLM.md` is the portable context package.

## Pattern

```text
Work in one LLM -> update PROJECT_HISTORY.md -> create CONTEXTO_LLM.md summary -> move to another LLM/tool -> return result -> update history
```

## When to use another LLM

Recommend another model or tool when it has a native advantage:

- Drive/Workspace interaction;
- long document analysis;
- code repository operations;
- design generation;
- video editing;
- web research;
- spreadsheet manipulation.

## Transfer prompt

```text
You are helping with this project. Read the context below and continue from the current state. Do not redo decisions already made. Prioritize simple, free-first, connectable and executable steps. Return decisions, files changed, problems, solutions and next steps so they can be added to PROJECT_HISTORY.md.
```

## Return format

When returning from another LLM/tool, capture:

- what was done;
- files created or changed;
- decisions made;
- problems found;
- solutions applied;
- next steps;
- colony-brain opportunities.
