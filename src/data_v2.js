// v2 — from updated "classic" PDF (April 2026).
// Stronger framing: co-led billing, cross-team infra, upstream OSS, AI-engineering as first-class skill.

window.RESUME_V2 = {
  name: "Salvador Fuentes Jr.",
  title: "Senior Software Engineer",
  location: "Irvine, CA",
  links: [
    { label: "fuentesjr.dev",         href: "https://fuentesjr.dev",                          kind: "site"     },
    { label: "linkedin/fuentesjr",    href: "https://linkedin.com/in/fuentesjr",              kind: "linkedin" },
    { label: "fuentesjr@gmail.com",   href: "mailto:fuentesjr@gmail.com",                     kind: "email"    },
    { label: "resume.pdf",            href: "./salvador_fuentesjr_resume_classic.pdf",        kind: "pdf"      },
  ],

  intro: "Senior software engineer with 15+ years building and operating backend platforms at high-growth technology companies. At GitHub, co-led billing for Copilot for Individuals — a $10M ARR product — while extending ownership beyond core scope into cross-team infrastructure work, incident response, and upstream open-source contribution. Integrating AI-assisted development into daily practice since 2023; actively developing in Go and exploring agentic engineering workflows.",

  metrics: [
    { value: "$10M",  unit: "ARR",         label: "Co-led billing delivery for Copilot for Individuals — shipped & scaled within months of launch." },
    { value: "4",     unit: "teams",       label: "Coordinated MySQL Proxima EU provisioning across secret-scanning, proxima-infra, GLB, and deploy-support." },
    { value: "1",     unit: "upstream fix","label": "Contributed a fix to money-open-exchange-rates during a production incident — benefiting the wider developer community." },
  ],

  highlights: [
    "Co-led billing for GitHub Copilot for Individuals — a $10M ARR product.",
    "Led MySQL Proxima EU provisioning outside core billing scope, coordinating delivery across four global engineering teams.",
    "Extended billing DB cluster capacity by 8 months through strategic deprecation of legacy MySQL tables.",
    "Upstreamed a fix to money-open-exchange-rates during a production incident.",
  ],

  skills: {
    "Languages":          ["Ruby", "Go", "JavaScript"],
    "Backend":            ["Ruby on Rails", "RSpec", "Sinatra", "Sorbet", "Packwerk", "Twirp", "Domain-Driven Design", "monolith decomposition"],
    "Data & Messaging":   ["MySQL", "PostgreSQL", "Redis", "Kafka", "Memcached", "Trino"],
    "Payments & Billing": ["Zuora", "Stripe", "subscription billing", "mobile IAP (Apple & Google)", "US sales tax compliance"],
    "Observability":      ["Datadog", "Sentry", "New Relic", "SLOs", "incident response"],
    "CI/CD":              ["GitHub Actions", "CircleCI", "Docker"],
    "AI Engineering":     ["GitHub Copilot", "Claude Code", "OpenAI Codex", "LLM-assisted workflows (since 2023)"],
    "Frontend":           ["React", "ViewComponent", "Primer", "Catalyst"],
  },

  roles: [
    {
      title: "Senior Software Engineer", company: "GitHub",
      location: "Remote (Irvine, CA)", start: "Jul 2021", end: "Jul 2025",
      summary: "Co-led billing for Copilot for Individuals — $10M ARR. Cross-team infra, incident response, upstream OSS.",
      bullets: [
        { text: "Co-led billing delivery for Copilot for Individuals — a product that reached $10M ARR within months of launch; resolved the most complex post-launch support escalations and guided other engineers through a subscription-based add-on billing model new to the team.", tag: "shipped" },
        { text: "Partnered across billing and mobile teams to deliver Apple and Google In-App Purchase support for Copilot, helping establish the two-team working model that carried the feature to launch.", tag: "shipped" },
        { text: "Led Fanout Tracking for MySQL Proxima EU production stamp provisioning outside core billing scope when database-infrastructure lacked bandwidth — coordinating delivery across secret-scanning, proxima-infra, GLB, and deploy-support teams.", tag: "cross-fn" },
        { text: "Served as first responder during a major billing availability incident; restored customer access to critical pages, hardened the currency-conversion stack with metrics and caching, and contributed an upstream fix to the money-open-exchange-rates open-source library benefiting the broader developer community.", tag: "on-call" },
        { text: "Extended billing DB cluster capacity by 8 months through strategic deprecation of legacy MySQL tables and unused custom fields, improving both platform runway and internal data analytics in collaboration with data and database-infrastructure teams.", tag: "platform" },
        { text: "Resolved high-impact customer billing issues including Zuora invoice email delivery failures, 3D Secure authentication errors, enterprise Pay Now page load failures, failed enterprise downgrades, and systemic webhook failures; drove a Microsoft IcM escalation to resolve Azure usage-reporting discrepancies.", tag: "reliability" },
        { text: "Shipped billing for GitHub Advanced Security, self-serve enterprise marketplace subscriptions, and U.S. Sales Tax for self-serve customers — including co-building the tax exemption certificates service.", tag: "shipped" },
        { text: "Built Datadog monitors, dashboards, and SLOs across billing services, supporting reliability and on-call response.", tag: "platform" },
      ],
    },
    {
      title: "Senior Rails Engineer", company: "Brookstone Capital Management",
      location: "Costa Mesa, CA", start: "May 2019", end: "Jul 2021",
      summary: "Flagship advisor products, internal workflow tooling, consumer lead-gen.",
      bullets: [
        { text: "Supported flagship financial advisor products and built internal workflow tooling for advisor services across multiple engineering teams.", tag: "shipped" },
        { text: "Initiated development of a consumer-facing lead generation product for the marketing team.", tag: "0→1" },
        { text: "Strengthened application security with JWTs, CSPs, Brakeman audits, and dependency updates; built internal gems to decouple shared concerns.", tag: "security" },
        { text: "Designed CI/CD pipelines with CircleCI and GitHub Actions; introduced New Relic APM to diagnose database bottlenecks.", tag: "platform" },
        { text: "Mentored engineers and formalized architecture decision records, testing standards, and security best practices.", tag: "leadership" },
      ],
    },
    {
      title: "Senior Software Engineer", company: "YP (formerly AT&T Interactive)",
      location: "Glendale, CA", start: "Jan 2011", end: "Jun 2018",
      summary: "Tech lead, consumer tools team.",
      bullets: [
        { text: "Served as technical lead for the consumer tools team, building internal tools and prototypes that reached production.", tag: "leadership" },
        { text: "Packaged applications in Docker containers to reduce engineer onboarding time; delivered technical talks on Docker and V8 internals to 35+ engineers.", tag: "speaking" },
      ],
    },
  ],

  earlier: [
    { role: "Backend Developer",   company: "72andSunny",             location: "Los Angeles, CA" },
    { role: "Software Engineer",   company: "iizuu inc.",             location: "Marina Del Rey, CA" },
    { role: "Software Developer",  company: "e7 Architecture Studio", location: "Los Angeles, CA" },
  ],

  education:      [{ school: "University of California, Davis", detail: "Computer Science coursework" }],
  certifications: [{ name: "Cloudera Certified Developer for Apache Hadoop (CCDH)" }],

  now: {
    heading: "Currently exploring",
    body: "Agentic engineering workflows — how far you can push context management and tool orchestration with Claude Code and OpenAI Codex as collaborators rather than autocomplete. Actively developing in Go.",
    tags: ["Claude Code", "Codex", "Go", "context windows", "tool design"],
  },

  computed: { careerStart: new Date("2010-03-01") },
};
