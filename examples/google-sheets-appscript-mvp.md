# Example: Google Sheets + Apps Script MVP

## Scenario

A user needs a simple internal tool to register requests, track status and send email notifications.

## Free stack

- Database: Google Sheets.
- Automation: Apps Script.
- Files: Google Drive.
- Notifications: Gmail.
- Memory: PROJECT_HISTORY.md.

## Low-cost robust stack

- Database: Supabase.
- Backend: Cloudflare Workers or Render.
- Email: Brevo.
- Frontend: Vercel/Cloudflare Pages.

## Connection map

```text
Form or manual entry -> Sheets -> Apps Script trigger -> Gmail/Drive/API -> tracking sheet
```

## Implementation order

1. Create the tracking spreadsheet.
2. Define required columns.
3. Add Apps Script for notifications.
4. Add status dropdowns.
5. Test one full request.
6. Document problems and decisions.

## When to migrate

Migrate away from Sheets when:

- many users write at the same time;
- permissions become complex;
- reporting requires real queries;
- data volume grows;
- uptime becomes critical.

## colony-brain opportunity

This could become a reusable Skill for `sheets-appscript-operations-builder`.
