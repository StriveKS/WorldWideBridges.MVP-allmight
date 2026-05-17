# Example: Static app with GitHub Pages

## Scenario

A user wants a simple public app or microsite with no backend cost.

## Free stack

- Code: GitHub repository.
- Hosting: GitHub Pages.
- Data: static JSON, Google Sheets export or manual content.
- Design: Canva/Figma.
- Tracking: Microsoft Clarity or GA4.

## Low-cost robust stack

- Hosting: Vercel or Cloudflare Pages.
- Database: Supabase.
- Auth: Supabase Auth or Firebase Auth.
- Domain: custom domain.

## Connection map

```text
GitHub repo -> GitHub Pages -> analytics -> feedback form -> Sheets
```

## Implementation order

1. Create repository.
2. Add static HTML/CSS/JS or framework build.
3. Enable GitHub Pages.
4. Add a feedback form.
5. Track visits and submissions.
6. Update project memory.

## Limits

GitHub Pages is excellent for static content but does not provide server-side logic.

## colony-brain opportunity

If repeated, create a Skill for `static-mvp-publisher`.
