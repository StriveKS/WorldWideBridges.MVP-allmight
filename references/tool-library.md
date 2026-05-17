# Tool Library

Use this as a decision aid. Verify current pricing, quotas and availability before relying on any tool in production.

| Category | Tool | Free-first use | Native/simple connection | LLM operability | When to use | When to avoid |
|---|---|---|---|---|---|---|
| Organization | Google Drive | Project hub, files, memory | High | High with Drive connection | Most MVPs | Sensitive data without permission model |
| Documents | Google Docs | Specs, briefs, docs | High | High | Collaborative docs | Structured data |
| Data | Google Sheets | Lightweight database, CRM, tracker | High | High | MVP data, forms, dashboards | High concurrency or large DB |
| Automation | Google Apps Script | Automate Drive, Sheets, Gmail | High | High | Google-centric workflows | Long-running backend |
| Code | GitHub | Repo, issues, versioning | High | High with GitHub connection | Any code project | Non-code users without guidance |
| Static hosting | GitHub Pages | Free landing/site | Medium | Medium | Static pages | Dynamic backend needs |
| Static hosting | Cloudflare Pages | Free static deploy | Medium | Medium | Static sites, fast CDN | Complex backend |
| Static hosting | Vercel | Frontend deploy | Medium | Medium | Next.js/frontend MVPs | Costs at scale without monitoring |
| Static hosting | Netlify | Static deploy/forms | Medium | Medium | Simple sites | Backend-heavy apps |
| Landing | Canva Sites | Visual landing pages | Medium | Medium | Non-dev landing | Complex tracking/custom code |
| Landing | Google Sites | Simple internal/public site | High | Medium | Fast no-code page | Advanced design |
| Forms | Google Forms | Capture data to Sheets | High | High | Free lead/data capture | Advanced UX |
| Forms | Tally | Better forms | Medium | Medium | Public lead forms | Need deep Google-native flow |
| Database | Supabase | Postgres, auth, storage | Medium | Medium | Real DB/Auth MVP | If Sheets is enough |
| Database | Firebase | Auth, Firestore, hosting | Medium | Medium | App MVPs | SQL/reporting-heavy needs |
| Analytics | Microsoft Clarity | Session recording/heatmaps | Medium | Low/Medium | Landing optimization | Sensitive user sessions |
| Analytics | GA4 | Traffic analytics | Medium | Low/Medium | Public sites | Simple MVPs where setup delays launch |
| Design | Canva | Social, video, landing visuals | Medium | Medium | Fast design | Precision product UI |
| Design | Figma | UI/prototype | Medium | Medium | Product design | Non-designers needing simple assets |
| Video | CapCut | Short videos | Low/Medium | Low | Social video editing | Automated pipelines |
| Email | Gmail + Apps Script | Notifications, basic delivery | High | High | Internal/early MVP email | Bulk marketing |
| Email | Brevo | Transactional/marketing email | Medium | Medium | Scaling email | If Gmail script is enough |
| Automation | n8n | Workflow automation | Medium | Medium | Multi-tool flows | If Apps Script solves it |
| Automation | Make/Zapier | Visual automation | Medium | Low/Medium | Non-code integrations | Tight free limits |

## Decision rule

Prefer tools that are:

1. free or near-free;
2. easy to authorize;
3. reliable;
4. operable by LLM;
5. simple to explain;
6. easy to migrate later.
