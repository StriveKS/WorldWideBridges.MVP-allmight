# Google Workspace Patterns

## Default role

Use Google Workspace as the free-first operating layer for early MVPs.

## Core patterns

### Drive as project hub

Use Drive for:

- memory files;
- assets;
- scripts;
- deliverables;
- references;
- documents shared across LLMs.

### Sheets as lightweight database

Use Sheets for:

- leads;
- backlog;
- CRM;
- content calendar;
- MVP records;
- operations tracker.

Avoid Sheets when:

- concurrent writes matter;
- records are large;
- relational integrity matters;
- sensitive access control is required.

### Apps Script as automation layer

Use Apps Script for:

- creating project folders/files;
- form-to-sheet flows;
- Gmail notifications;
- Drive file generation;
- API calls with UrlFetchApp;
- lightweight scheduled jobs.

Avoid Apps Script for:

- long-running backends;
- high traffic APIs;
- heavy scraping;
- critical production infrastructure.

### Forms to Sheets to Apps Script

Simple capture pipeline:

```text
Google Forms -> Google Sheets -> Apps Script -> Gmail/Drive/Slack/API
```

Use when validating demand or collecting leads quickly.
