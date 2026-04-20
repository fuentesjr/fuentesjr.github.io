// Dashboard variant — "Platform / SRE Dashboard".
// Career as services, impact as SLIs, roles as incident timeline.

const { useState: useStateDash, useEffect: useEffectDash, useMemo: useMemoDash } = React;

function Sparkline({ points = [], height = 28, width = 80 }) {
  const max = Math.max(...points, 1);
  const min = Math.min(...points, 0);
  const range = max - min || 1;
  const step = width / Math.max(points.length - 1, 1);
  const d = points.map((p, i) => {
    const x = i * step;
    const y = height - ((p - min) / range) * (height - 4) - 2;
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg width={width} height={height} className="spark" aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UptimeCounter({ since }) {
  const [now, setNow] = useStateDash(new Date());
  useEffectDash(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const ms = now - since;
  const s = Math.floor(ms / 1000);
  const years = (s / (365.25 * 24 * 3600)).toFixed(6);
  return <span className="uptime">{years}y</span>;
}

function DashboardVariant({ data }) {
  // Fake but deterministic sparklines seeded by role index so they don't reshuffle on re-render.
  const sparks = data.roles.map((_, i) => {
    const n = 18;
    return Array.from({ length: n }, (_, j) => {
      const seed = (i * 31 + j * 17) % 100;
      return 40 + (seed * 0.6) + Math.sin(j + i) * 10;
    });
  });

  return (
    <div className="dash">
      {/* TOP BAR — services-list style */}
      <header className="dash-top">
        <div className="dash-top__brand">
          <div className="dash-logo">◉</div>
          <div>
            <div className="dash-top__name">{data.name}</div>
            <div className="dash-top__sub">
              <StatusDot /> <span>{data.title}</span>
              <span className="dash-sep">/</span>
              <span>{data.location}</span>
            </div>
          </div>
        </div>
        <div className="dash-top__right">
          <div className="dash-kv">
            <span className="dash-kv__k">uptime</span>
            <span className="dash-kv__v"><UptimeCounter since={data.computed.careerStart} /></span>
          </div>
          <div className="dash-kv">
            <span className="dash-kv__k">region</span>
            <span className="dash-kv__v">us-west-1</span>
          </div>
        </div>
      </header>

      {/* HERO / INTRO */}
      <section className="dash-hero">
        <div className="dash-hero__l">
          <div className="dash-hero__crumb">services › resume › {data.name.toLowerCase().replace(/[^a-z]+/g, "-")}</div>
          <h1 className="dash-hero__headline">
            Backend platforms,<br />financial systems,<br /><span className="dash-hero__accent">on-call with a smile.</span>
          </h1>
          <p className="dash-hero__body">{data.intro}</p>
          <div className="dash-hero__links">
            {data.links.map(l => (
              <a key={l.href} className="dash-link" href={l.href} target={l.kind === "email" ? undefined : "_blank"} rel="noreferrer">
                <span className="dash-link__k">{l.kind}</span>
                <span className="dash-link__v">{l.label}</span>
                <span className="dash-link__arr">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="dash-hero__r">
          <PhotoPlaceholder size={200} label="portrait.jpg" />
          <div className="dash-hero__cap">id: fuentesjr · status: available for interesting problems</div>
        </div>
      </section>

      {/* SLI TILES */}
      <section className="dash-slis" id="highlights">
        <div className="dash-h2"><span>§</span> Service Level Indicators <span className="dash-h2__aux">(the things I'm proud of)</span></div>
        <div className="dash-slis__grid">
          {data.metrics.map((m, i) => (
            <div className="dash-sli" key={i}>
              <div className="dash-sli__head">
                <span className="dash-sli__lbl">SLI-{String(i + 1).padStart(2, "0")}</span>
                <StatusDot />
              </div>
              <div className="dash-sli__val">
                <span className="dash-sli__num">{m.value}</span>
                <span className="dash-sli__unit">{m.unit}</span>
              </div>
              <div className="dash-sli__desc">{m.label}</div>
              <Sparkline points={sparks[i % sparks.length]} width={220} height={32} />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES (ROLES) */}
      <section className="dash-services" id="experience">
        <div className="dash-h2"><span>§</span> Services <span className="dash-h2__aux">(roles, chronological)</span></div>
        <div className="dash-table">
          <div className="dash-table__head">
            <div>status</div>
            <div>service</div>
            <div>window</div>
            <div>region</div>
            <div>throughput</div>
          </div>
          {data.roles.map((r, i) => (
            <details key={i} className="dash-row" open={i === 0}>
              <summary className="dash-row__sum">
                <div className="dash-row__cell">
                  <StatusDot color={i === 0 ? "var(--ok)" : "var(--muted-dot)"} />
                  <span className="dash-row__st">{i === 0 ? "recent" : "archived"}</span>
                </div>
                <div className="dash-row__cell dash-row__cell--title">
                  <div className="dash-row__title">{r.title}</div>
                  <div className="dash-row__co">@ {r.company}</div>
                </div>
                <div className="dash-row__cell">{r.start} → {r.end}</div>
                <div className="dash-row__cell">{r.location}</div>
                <div className="dash-row__cell"><Sparkline points={sparks[i]} width={80} height={22} /></div>
              </summary>
              <div className="dash-row__body">
                <p className="dash-row__summary">{r.summary}</p>
                <ul className="dash-row__bullets">
                  {r.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="dash-tag" data-tag={b.tag}>{b.tag}</span>
                      <span>{b.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>

        <div className="dash-earlier">
          <div className="dash-h3">Earlier</div>
          <ul>
            {data.earlier.map((e, i) => (
              <li key={i}>
                <code>{e.company.toLowerCase().replace(/[^a-z]+/g, "-")}</code>
                <span className="dash-muted"> — {e.role} · {e.location}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SKILLS — as dependency manifest */}
      <section className="dash-skills" id="skills">
        <div className="dash-h2"><span>§</span> Stack <span className="dash-h2__aux">(as `package.json` would have it)</span></div>
        <div className="dash-manifest">
          <div className="dash-manifest__brace">{"{"}</div>
          {Object.entries(data.skills).map(([k, v], i, arr) => (
            <div className="dash-manifest__group" key={k}>
              <div className="dash-manifest__k">"{k.toLowerCase().replace(/[^a-z]+/g, "_")}": [</div>
              <div className="dash-manifest__vals">
                {v.map((s, j) => (
                  <span className="dash-manifest__v" key={s}>
                    "{s}"{j < v.length - 1 && <span className="dash-manifest__comma">,</span>}
                  </span>
                ))}
              </div>
              <div className="dash-manifest__close">]{i < arr.length - 1 ? "," : ""}</div>
            </div>
          ))}
          <div className="dash-manifest__brace">{"}"}</div>
        </div>
      </section>

      {/* NOW / AGENTIC */}
      <section className="dash-now" id="now">
        <div className="dash-h2"><span>§</span> Currently exploring</div>
        <div className="dash-now__card">
          <div className="dash-now__head">
            <StatusDot color="var(--warn)" />
            <span>branch: <code>agentic-engineering</code> · status: learning in public</span>
          </div>
          <p>{data.now.body}</p>
          <div className="dash-now__tags">
            {data.now.tags.map(t => <span key={t} className="dash-now__tag">{t}</span>)}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="dash-edu">
        <div className="dash-h2"><span>§</span> Education &amp; Certification</div>
        <ul className="dash-edu__list">
          {data.education.map((e, i) => (
            <li key={i}>
              <div className="dash-edu__school">{e.school}</div>
              <div className="dash-edu__detail">{e.detail}</div>
            </li>
          ))}
          {data.certifications.map((c, i) => (
            <li key={"c" + i}>
              <div className="dash-edu__school">{c.name}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

window.DashboardVariant = DashboardVariant;
