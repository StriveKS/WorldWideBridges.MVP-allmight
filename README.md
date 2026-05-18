# WorldWideBridges.MVP-allmight

**WorldWideBridges.MVP-allmight** is an open Agent Skill for creating, organizing, launching and improving MVPs with free-first tools, native integrations, Google Workspace, GitHub, Apps Script, lightweight databases, marketing workflows, delivery processes and portable project memory across LLMs.

This Skill is part of the **colony-brain** ecosystem.

## Public GPT

Use the official GPT here:

```text
https://chatgpt.com/g/g-6a0a755a220881918878077b69e285fd-worldwidebridges-mvp-allmight
```

## Landing page

```text
https://striveks.github.io/WorldWideBridges.MVP-allmight/
```

## Parent ecosystem

```text
https://github.com/StriveKS/colony-brain
```

## What this Skill does

It helps users:

- start projects from zero;
- choose free or low-cost tools;
- connect Google Drive, Sheets, Apps Script, GitHub and similar tools;
- create a reusable project memory in Markdown;
- build a 100% free stack and a low-cost robust stack;
- structure design, landing pages, content, video, marketing, delivery and operations;
- identify reusable workflows that may become new colony-brain Skills.

## Who it is for

- Beginners with only an idea and no budget.
- Developers learning to ship MVPs.
- Experienced developers who want fast, pragmatic prototypes.
- Makers, freelancers and small teams.
- People working from a phone, browser and LLM chat.

## Quick start

### Option 1: Use the public GPT

Open:

```text
https://chatgpt.com/g/g-6a0a755a220881918878077b69e285fd-worldwidebridges-mvp-allmight
```

Then say:

```text
Activate WorldWideBridges.MVP-allmight for this project.
```

### Option 2: Manual use in any LLM

1. Open [`SKILL.md`](./SKILL.md).
2. Copy its content.
3. Paste it into your LLM as project instructions or context.
4. Say:

```text
Activate WorldWideBridges.MVP-allmight for this project.
```

### Option 3: Claude Code

```bash
mkdir -p ~/.claude/skills/WorldWideBridges.MVP-allmight
git clone https://github.com/StriveKS/WorldWideBridges.MVP-allmight.git /tmp/WorldWideBridges.MVP-allmight
cp -R /tmp/WorldWideBridges.MVP-allmight/* ~/.claude/skills/WorldWideBridges.MVP-allmight/
```

Then use:

```text
/WorldWideBridges.MVP-allmight
```

### Option 4: ChatGPT or other LLMs

Use `SKILL.md` as an instruction file, custom GPT knowledge file, project instruction, or Skill package when your platform supports Agent Skills.

Each user must authorize their own connections, such as Google Drive, GitHub, Notion or Canva.

## Recommended Google Drive structure

```text
Projetos/
  Memoria/
    [PROJECT] - PROJECT_HISTORY.md
    [PROJECT] - CONTEXTO_LLM.md
    [PROJECT] - DECISOES.md
    [PROJECT] - PROMPTS.md

  Planilhas/
    [PROJECT] - Acompanhamento
```

Use [`scripts/criar-base-projeto-drive.gs`](./scripts/criar-base-projeto-drive.gs) to generate the files and tracking spreadsheet.

## Repository structure

```text
SKILL.md
README.md
install.md
CHANGELOG.md
CONTRIBUTING.md
SKILL_STANDARD.md
REVIEW_CHECKLIST.md
LICENSE

templates/
  PROJECT_HISTORY.md
  CONTEXTO_LLM.md
  DECISOES.md
  PROMPTS.md
  MVP_ACOMPANHAMENTO_SHEETS.md

scripts/
  criar-base-projeto-drive.gs

references/
  tool-library.md
  skill-generation-protocol.md
  google-workspace-patterns.md
  github-patterns.md
  free-hosting-patterns.md
  database-patterns.md
  marketing-delivery-patterns.md
  design-video-patterns.md
  llm-orchestration-patterns.md

examples/
  landing-page-mvp.md
  google-sheets-appscript-mvp.md
  app-com-github-pages.md
  conteudo-video-marketing.md
  skill-opportunity-example.md
```

## Status

Version: `0.1.0`

Status: public beta / experimental.

## Philosophy

The best MVP solution is not always the most elegant. It is the one the user can connect, test, understand, maintain and evolve today.

## License

MIT. See [`LICENSE`](./LICENSE).
