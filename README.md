# KneeRoute — Acute Knee Pathways

**Working concept:** an evidence-linked clinical pathway platform for acute knee injuries.

> Research prototype only. This repository does **not** contain validated clinical guidance and should not be used for patient care.

## Product proposition

**The right knee patient. The right pathway. At the right time.**

KneeRoute is designed to translate a structured acute-knee presentation into a transparent suggested pathway for investigation, referral and specialist review.

The differentiator is not simply the pathway output. Every recommendation is intended to expose:

1. **Recommended action**
2. **Urgency**
3. **Clinical rationale**
4. **Supporting evidence or standard**
5. **Governance/version information**
6. **Local configuration**

The clinician remains the decision-maker.

## Why start with acute knee?

Acute knee presentations cross multiple settings — emergency medicine, primary care, MSK services, radiology and orthopaedics. A pathway engine could provide a consistent evidence layer while allowing individual organisations to configure operational details locally.

## MVP pathway library

- Traumatic knee haemarthrosis
- Suspected ACL injury
- Locked knee / acute meniscal injury
- First-time patellar dislocation
- Osteochondral injury
- Multiligament knee injury

Only a small amount of illustrative pathway logic is present in this prototype.

## Repository structure

```text
kneeroute-mvp/
├── index.html
├── styles.css
├── app.js
└── README.md
```

This is deliberately dependency-free so the concept can be deployed rapidly on GitHub Pages.

## Run locally

Open `index.html` directly in a browser, or start a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a new GitHub repository, e.g. `kneeroute`.
2. Upload the four files in this folder to the repository root.
3. In GitHub go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.

GitHub will provide the public Pages URL.

## Proposed next architecture

The proof-of-concept is static. A clinical-grade product should move the decision logic out of the front-end and into version-controlled structured pathway definitions.

Example:

```json
{
  "pathway_id": "acute-knee-haemarthrosis",
  "version": "0.1-draft",
  "status": "research-prototype",
  "trigger": ["acute_trauma", "rapid_effusion"],
  "recommendation": {
    "route": "acute_knee_clinic",
    "urgency": "TO_BE_VALIDATED"
  },
  "evidence": [],
  "review": {
    "clinical_owner": "TO_BE_ASSIGNED",
    "approved": false,
    "review_date": null
  }
}
```

A later build could use:

- Next.js / React front-end
- Supabase or PostgreSQL data layer
- Structured pathway JSON / rules engine
- Authentication and organisational configuration
- Audit/version history
- Analytics
- Evidence-management CMS
- FHIR-compatible integration exploration

## Governance principles

Before any clinical deployment, the project would need formal review of:

- clinical safety and risk management
- intended purpose and regulatory classification
- information governance and data protection
- accessibility
- security
- human factors/usability
- validation of every pathway
- ownership and scheduled review of the evidence base
- local implementation governance

Do not use NHS branding or imply NHS endorsement without permission.

## Brand

Working name: **KneeRoute**

Working descriptor: **Evidence-linked acute knee pathways**

Working strapline: **The right knee patient. The right pathway. At the right time.**

The name should undergo a proper trademark/company/domain search before commercial use.
