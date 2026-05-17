# Installation

## Manual use in any LLM

1. Open `SKILL.md`.
2. Copy the content.
3. Paste it into your LLM as project instructions, system context, custom instructions or a project prompt.
4. Say:

```text
Activate WorldWideBridges.MVP-allmight for this project.
```

## Claude Code

Install as a personal Skill:

```bash
mkdir -p ~/.claude/skills/WorldWideBridges.MVP-allmight
git clone https://github.com/StriveKS/WorldWideBridges.MVP-allmight.git /tmp/WorldWideBridges.MVP-allmight
cp -R /tmp/WorldWideBridges.MVP-allmight/* ~/.claude/skills/WorldWideBridges.MVP-allmight/
```

Use:

```text
/WorldWideBridges.MVP-allmight
```

## ChatGPT or custom GPT

When your product or plan supports Skills, import this folder as a Skill package.

For a custom GPT:

1. Create a GPT.
2. Paste the condensed behavior from `SKILL.md` into instructions.
3. Upload this repo's files as knowledge.
4. Add starters like:
   - `Start a new MVP with WorldWideBridges.MVP-allmight.`
   - `Create a free-first stack for this project.`
   - `Create my Drive project memory.`
   - `Find reusable workflows that could become colony-brain Skills.`

Each user must authorize their own Google Drive, GitHub, Notion, Canva or other connections.

## Google Drive setup

Create:

```text
Projetos/
  Memoria/
  Planilhas/
```

Then use:

```text
scripts/criar-base-projeto-drive.gs
```

The script creates Markdown memory files and a tracking spreadsheet.

## Recommended public setup

1. Keep this repository public.
2. Keep `colony-brain` as parent ecosystem.
3. Use this repo as the clean installable package.
4. Build a GitHub Pages or simple landing page.
5. Optionally create a public GPT that points users to this Skill.
