// Single source of truth for resume content.
// Both variants (Editorial & Dashboard) render from this.

window.RESUME = {
  name: "Salvador Fuentes Jr.",
  title: "Senior Software Engineer",
  location: "Irvine, CA",
  links: [
    { label: "fuentesjr.dev",         href: "https://fuentesjr.dev",              kind: "site"     },
    { label: "linkedin/fuentesjr",    href: "https://linkedin.com/in/fuentesjr",  kind: "linkedin" },
    { label: "fuentesjr@gmail.com",   href: "mailto:fuentesjr@gmail.com",         kind: "email"    },
    { label: "resume.pdf",            href: "./salvador_fuentesjr_resume.pdf",    kind: "pdf"      },
  ],

  // Editorial-friendly intro. Rewritten slightly for the web voice.
  intro: "Senior software engineer with 15+ years building and operating backend platforms for high-growth technology companies. Deep expertise in billing systems, subscriptions, distributed services, observability, and production incident response. Currently expanding into agentic engineering workflows and Go.",

  // Headline-worthy numbers. Used as pull-quotes (editorial) and SLI tiles (dashboard).
  metrics: [
    { value: "$10M",  unit: "ARR",         label: "Copilot for Individuals billing — shipped & scaled within months of launch." },
    { value: "+8",    unit: "months",      label: "Emergency runway — scaled a billing MySQL cluster through a capacity crunch; gh-ost + custom reclamation tooling outran ingest through the migration." },
    { value: "15+",   unit: "years",       label: "Shipping production backends across billing, ads, tools, and platforms." },
    { value: "7",     unit: "teams",       label: "Cross-functional delivery with Growth, Sponsors, Data, Databases, Mobile, Security, and Support." },
  ],

  highlights: [
    "Drove billing delivery for GitHub Copilot for Individuals — a product that reached $10M ARR within months of launch.",
    "Architected Zuora Orders API migration, de-risking the billing roadmap for GitHub's monetization platform.",
    "Extended billing database cluster capacity by 8 months through strategic deprecation of legacy MySQL tables.",
    "Shipped billing features across Copilot, GitHub Advanced Security, enterprise marketplace, and mobile in-app purchases.",
  ],

  skills: {
    "Languages":          ["Ruby", "JavaScript", "Go"],
    "Frameworks":         ["Ruby on Rails", "RSpec", "React", "ViewComponent", "Primer", "Catalyst"],
    "Data & Messaging":   ["MySQL", "Postgres", "Redis", "Kafka", "Memcached", "Trino"],
    "Observability":      ["Datadog", "Sentry", "New Relic", "SLOs"],
    "Tools":              ["Git", "GitHub", "Sorbet", "Packwerk", "Twirp", "CircleCI", "GitHub Actions", "Docker", "Apache Mesos"],
    "Exploring":          ["Agentic Engineering", "Context management", "Tool orchestration", "Claude Code", "OpenAI Codex"],
  },

  roles: [
    {
      title:    "Senior Software Engineer",
      company:  "GitHub",
      location: "Remote (Irvine, CA)",
      start:    "Jul 2021",
      end:      "Jul 2025",
      summary:  "Billing platform. Revenue-impacting features across Copilot, GHAS, enterprise marketplace, and mobile.",
      bullets: [
        { text: "Delivered billing capabilities for major monetization initiatives — Copilot for Individuals, GitHub Advanced Security, enterprise self-serve marketplace subscriptions, and mobile in-app purchases.", tag: "shipped" },
        { text: "Drove Copilot for Individuals launch by building billing interfaces and resolving complex support issues for a product that reached $10M ARR within months.",                                                tag: "shipped" },
        { text: "Owned Zuora Orders API migration foundational work, reducing delivery risk for the entire billing roadmap.",                                                                                             tag: "architected" },
        { text: "Resolved a billing MySQL scalability crunch — combined gh-ost online schema changes with custom storage-reclamation tooling to outrun ingest, extending cluster runway by 8 months through migration.",                                                                 tag: "platform" },
        { text: "Strengthened reliability through currency conversion resiliency, webhook failure investigations, enterprise downgrade fixes, and CI stability improvements.",                                            tag: "reliability" },
        { text: "Built Datadog monitors, dashboards, and SLOs; served as first responder during a production billing incident to restore customer access.",                                                               tag: "on-call" },
        { text: "Partnered with Growth, Sponsors, Data, Databases, Mobile, and Security teams; onboarded teammates and contributed accessibility fixes.",                                                                 tag: "cross-fn" },
      ],
    },
    {
      title:    "Senior Rails Engineer",
      company:  "Brookstone Capital Management",
      location: "Costa Mesa, CA",
      start:    "May 2019",
      end:      "Jul 2021",
      summary:  "Flagship advisor products, internal workflow tooling, and a new consumer lead-gen product.",
      bullets: [
        { text: "Supported flagship financial advisor products and built internal workflow tooling for advisor services across multiple engineering teams.",                  tag: "shipped"     },
        { text: "Initiated development of a consumer-facing lead generation product for the marketing team.",                                                                   tag: "0→1"         },
        { text: "Strengthened application security with JWTs, CSPs, Brakeman audits, and dependency updates; built internal gems to decouple shared concerns.",                 tag: "security"    },
        { text: "Designed CI/CD pipelines with CircleCI and GitHub Actions; introduced New Relic APM to diagnose database bottlenecks.",                                        tag: "platform"    },
        { text: "Mentored engineers and formalized architecture decision records, testing standards, and security best practices.",                                             tag: "leadership"  },
      ],
    },
    {
      title:    "Senior Software Engineer",
      company:  "YP (formerly AT&T Interactive)",
      location: "Glendale, CA",
      start:    "Jan 2011",
      end:      "Jun 2018",
      summary:  "Technical lead on consumer tools team — internal tools, prototypes, SEO infrastructure.",
      bullets: [
        { text: "Served as technical lead for the consumer tools team, building internal tools and prototypes that reached production.",      tag: "leadership" },
        { text: "Reduced onboarding time by packaging tools and applications in Docker containers; migrated workloads to Apache Mesos.",       tag: "platform"   },
        { text: "Improved SEO through restructured XML sitemap generation and a new traffic-routing mechanism for the consumer site.",         tag: "shipped"    },
        { text: "Presented technical talks on Docker and V8 internals to 35+ engineers.",                                                      tag: "speaking"   },
      ],
    },
    {
      title:    "Backend Developer",
      company:  "72andSunny",
      location: "Los Angeles, CA",
      start:    "Mar 2010",
      end:      "Jan 2011",
      summary:  "Deployment automation and Rails/Sinatra backends for agency client work.",
      bullets: [
        { text: "Built deployment automation, Sinatra backends, and server configuration scripts for Rails and PHP projects.",  tag: "platform" },
        { text: "Developed Rails backend for CKE Restaurants mobile apps; integrated with the Facebook Places API.",             tag: "shipped"  },
      ],
    },
  ],

  earlier: [
    { role: "Software Engineer",  company: "iizuu inc.",            location: "Marina Del Rey, CA" },
    { role: "Software Developer", company: "e7 Architecture Studio", location: "Los Angeles, CA"   },
  ],

  education: [
    { school: "University of California, Davis", detail: "Computer Science — Data Structures, Algorithms, Programming Languages, Computer Architecture" },
  ],

  certifications: [
    { name: "Cloudera Certified Developer for Apache Hadoop (CCDH)" },
  ],

  // Short "what I'm currently exploring" block — per your ask for Agentic Engineering notes.
  now: {
    heading: "Currently exploring",
    body: "Agentic engineering workflows — how far you can push context management and tool orchestration with Claude Code and OpenAI Codex as collaborators rather than autocomplete. Also picking up Go for the parts of the backend where Ruby isn't the right answer.",
    tags: ["Claude Code", "Codex", "Go", "context windows", "tool design"],
  },

  // Tiny career stats — derived, shown in dashboard variant.
  computed: {
    careerStart: new Date("2010-03-01"),
  },
};
