# KneeRoute v0.2

Clinician-facing research prototype for evidence-linked, locally configurable acute knee pathways.

**Not validated or approved for clinical use.**

## What this version adds
- usable five-step acute-knee assessment wizard
- immediate safety-screen exit
- presentation and examination features
- transparent suggested-route output
- evidence library with links to official BOA/NICE sources
- pathway library
- local NHS service configuration stored in the browser
- copy / print summary
- explicit logic version and governance dashboard
- no patient-identifiable data fields

## Deploy
Replace the existing `index.html` in the GitHub repository with this version and commit. GitHub Pages should redeploy automatically.

## Product architecture
The future product should separate the **central evidence/clinical logic layer** from the **local operational layer**. The evidence layer holds version-controlled rules, sources, rationale, reviewers and approval state. The local layer maps those rules to an organisation's actual clinic, referral route, imaging access and service contact.

## Before any real clinical deployment
The project requires a defined intended purpose, regulatory assessment, DCB0129 clinical safety work, local DCB0160 deployment assurance, a Clinical Safety Officer, hazard log, clinical safety case, information governance/data-protection assessment, cybersecurity, accessibility/usability testing, validation of every encoded pathway, evidence-review/version control, and local governance approval.

## Current official evidence links
- BOASt — Best Practice for Management of ACL Injuries (2020)
- BOASt — Assessment and Management of First Time Lateral Patellar Dislocation (2024)
- BOASt — ACL Injury in the Skeletally Immature Patient (2022)
- NICE CKS — Ottawa knee rule
