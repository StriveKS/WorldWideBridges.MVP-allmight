# Database Patterns

## Free-first decision

Start with the simplest data layer that validates the idea without blocking launch.

## Options

### Google Sheets

Use when:

- records are simple;
- the user needs visibility;
- data comes from forms;
- the workflow is internal or early-stage;
- Apps Script can automate operations.

Avoid when:

- high concurrency matters;
- relational integrity matters;
- access control is complex;
- data volume grows significantly.

### Drive JSON

Use when:

- a static site needs simple content;
- a JSON file can act as a tiny CMS;
- updates are manual or low-frequency.

Avoid when:

- users need live writes;
- conflicts are likely;
- auth is required.

### SQLite

Use when:

- local or embedded data is enough;
- a small backend needs persistence;
- deployment environment supports it.

### Supabase

Use when:

- a real Postgres database is needed;
- auth, storage or APIs matter;
- migration from Sheets is likely.

### Firebase

Use when:

- app-style realtime data is useful;
- auth and hosting are needed;
- the user is comfortable with Firebase patterns.

## Migration path

```text
Google Sheets -> Supabase/Firebase -> managed database/backend
```

Move when the MVP has real users, repeated writes, permissions, reporting needs or reliability requirements.
