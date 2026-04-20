// Editorial variant — "Reliability Report".
// Serif headlines, generous margins, pull-quote metrics, footnotes.

const { useState: useStateEd, useEffect: useEffectEd, useRef: useRefEd } = React;

function EditorialVariant({ data }) {
  return (
    <div className="ed">
      {/* MASTHEAD */}
      <header className="ed-masthead">
        <div className="ed-masthead__top">
          <div className="ed-mast__kicker">Vol. XV · №1 · Personal Record</div>
          <div className="ed-mast__date">{data.location} · est. 2010</div>
        </div>
        <div className="ed-mast__rule" />
        <h1 className="ed-title">{data.name}</h1>
        <div className="ed-subtitle">
          <span>{data.title}</span>
          <span className="ed-dot">·</span>
          <span>Backend platforms, billing &amp; reliability</span>
        </div>
        <div className="ed-mast__rule" />
      </header>

      {/* LEDE */}
      <section className="ed-lede">
        <div className="ed-lede__photo">
          <PhotoPlaceholder size={180} label="portrait.jpg" />
          <div className="ed-caption">
            Caption: a headshot will live here.
            <br />Subject pictured smiling at a well-written commit message.<sup>1</sup>
          </div>
        </div>
        <div className="ed-lede__body">
          <p className="ed-dropcap">{data.intro}</p>

          <div className="ed-contact">
            {data.links.map(l => (
              <a key={l.href} href={l.href} className="ed-contact__link" target={l.kind === "email" ? undefined : "_blank"} rel="noreferrer">
                <span className="ed-contact__kind">[{l.kind}]</span>
                <span className="ed-contact__val">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTES / METRICS */}
      <section className="ed-metrics" id="highlights">
        <div className="ed-section-label">§ Highlights</div>
        <div className="ed-metrics__grid">
          {data.metrics.map((m, i) => (
            <figure className="ed-metric" key={i}>
              <div className="ed-metric__value">
                <span className="ed-metric__num">{m.value}</span>
                <span className="ed-metric__unit">{m.unit}</span>
              </div>
              <figcaption className="ed-metric__cap">{m.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* EXPERIENCE — long-form */}
      <section className="ed-experience" id="experience">
        <div className="ed-section-label">§ Professional Experience</div>
        {data.roles.map((r, i) => (
          <article className="ed-role" key={i}>
            <header className="ed-role__head">
              <div className="ed-role__titleline">
                <h2 className="ed-role__title">{r.title}</h2>
                <span className="ed-role__at">at</span>
                <span className="ed-role__co">{r.company}</span>
              </div>
              <div className="ed-role__meta">
                <span>{r.start} – {r.end}</span>
                <span className="ed-dot">·</span>
                <span>{r.location}</span>
              </div>
            </header>
            <p className="ed-role__summary">{r.summary}</p>
            <ul className="ed-role__bullets">
              {r.bullets.map((b, j) => (
                <li key={j}>
                  <span className="ed-tag" data-tag={b.tag}>{b.tag}</span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}

        {/* Earlier */}
        <div className="ed-earlier">
          <div className="ed-section-label ed-section-label--sm">§ Earlier</div>
          <ul className="ed-earlier__list">
            {data.earlier.map((e, i) => (
              <li key={i}>
                <span className="ed-earlier__role">{e.role}</span>
                <span className="ed-dot">·</span>
                <span className="ed-earlier__co">{e.company}</span>
                <span className="ed-earlier__loc">{e.location}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SKILLS — as editorial sidebar list */}
      <section className="ed-skills" id="skills">
        <div className="ed-section-label">§ Technical Skills</div>
        <dl className="ed-skills__list">
          {Object.entries(data.skills).map(([k, v]) => (
            <div className="ed-skills__row" key={k}>
              <dt>{k}</dt>
              <dd>
                {v.map((s, i) => (
                  <React.Fragment key={s}>
                    <span className="ed-skill">{s}</span>
                    {i < v.length - 1 && <span className="ed-skill-sep">·</span>}
                  </React.Fragment>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* NOW / AGENTIC */}
      <section className="ed-now" id="now">
        <div className="ed-section-label">§ Currently exploring</div>
        <div className="ed-now__body">
          <p>{data.now.body}</p>
          <div className="ed-now__tags">
            {data.now.tags.map(t => <span key={t} className="ed-now__tag">{t}</span>)}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="ed-edu">
        <div className="ed-section-label">§ Education &amp; Certification</div>
        <ul className="ed-edu__list">
          {data.education.map((e, i) => (
            <li key={i}>
              <strong>{e.school}</strong>
              <br />
              <span className="ed-muted">{e.detail}</span>
            </li>
          ))}
          {data.certifications.map((c, i) => (
            <li key={"c" + i}><strong>{c.name}</strong></li>
          ))}
        </ul>
      </section>

      {/* FOOTNOTES */}
      <section className="ed-footnotes">
        <div className="ed-section-label ed-section-label--sm">Footnotes</div>
        <ol className="ed-footnotes__list">
          <li><sup>1</sup> Diff was small. Test was green. Reviewer was kind. A good day.</li>
        </ol>
      </section>
    </div>
  );
}

window.EditorialVariant = EditorialVariant;
