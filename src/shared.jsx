// Shared UI: command palette, tweaks panel, theme toggle, photo placeholder, footer.
// Exposed via window.* for cross-script access.

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ─── Photo placeholder ──────────────────────────────────────────────────────
function PhotoPlaceholder({ size = 140, label = "photo.jpg" }) {
  return (
    <img
      src="./portrait.png"
      alt="Salvador Fuentes Jr."
      width={size}
      height={size}
      style={{
        display: "block",
        width: size,
        height: size,
        borderRadius: 999,
        objectFit: "cover",
        border: "1px solid var(--hairline)",
      }}
    />
  );
}

// ─── Status dot ─────────────────────────────────────────────────────────────
function StatusDot({ color = "var(--ok)" }) {
  return (
    <span className="status-dot" style={{ "--dot": color }}>
      <span className="status-dot__inner" />
    </span>
  );
}

// ─── Command palette (⌘K) ──────────────────────────────────────────────────
function CommandPalette({ open, onClose, actions }) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef(null);

  const filtered = useMemo(() => {
    if (!q.trim()) return actions;
    const needle = q.toLowerCase();
    return actions.filter(a =>
      a.label.toLowerCase().includes(needle) ||
      (a.hint || "").toLowerCase().includes(needle) ||
      (a.group || "").toLowerCase().includes(needle)
    );
  }, [q, actions]);

  useEffect(() => { setIdx(0); }, [q, open]);
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 20);
    else setQ("");
  }, [open]);

  const onKey = (e) => {
    if (e.key === "Escape") { onClose(); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); setIdx(i => Math.min(i + 1, filtered.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setIdx(i => Math.max(i - 1, 0)); }
    else if (e.key === "Enter") {
      e.preventDefault();
      const a = filtered[idx];
      if (a) { a.run(); onClose(); }
    }
  };

  if (!open) return null;

  // Group items by .group for rendering.
  const grouped = filtered.reduce((acc, a) => {
    const g = a.group || "Actions";
    (acc[g] = acc[g] || []).push(a);
    return acc;
  }, {});

  let running = 0;
  return (
    <div className="cmdk-overlay" onClick={onClose}>
      <div className="cmdk" onClick={e => e.stopPropagation()}>
        <div className="cmdk__header">
          <span className="cmdk__prompt">›</span>
          <input
            ref={inputRef}
            className="cmdk__input"
            value={q}
            onChange={e => setQ(e.target.value)}
            onKeyDown={onKey}
            placeholder="Type a command or search…"
          />
          <span className="cmdk__esc">esc</span>
        </div>
        <div className="cmdk__list">
          {Object.keys(grouped).length === 0 && (
            <div className="cmdk__empty">
              No matches. Try <code>theme</code>, <code>pdf</code>, or <code>whoami</code>.
            </div>
          )}
          {Object.entries(grouped).map(([group, items]) => (
            <div key={group} className="cmdk__group">
              <div className="cmdk__group-label">{group}</div>
              {items.map(a => {
                const selected = running === idx;
                running++;
                return (
                  <div
                    key={a.id}
                    className={"cmdk__item" + (selected ? " is-selected" : "")}
                    onMouseEnter={() => setIdx(filtered.indexOf(a))}
                    onClick={() => { a.run(); onClose(); }}
                  >
                    <span className="cmdk__icon">{a.icon || "◆"}</span>
                    <span className="cmdk__label">{a.label}</span>
                    {a.hint && <span className="cmdk__hint">{a.hint}</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="cmdk__footer">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}

// ─── Tweaks panel (host-toggled) ────────────────────────────────────────────
function TweaksPanel({ visible, state, setState }) {
  if (!visible) return null;
  const { variant, theme, density } = state;
  return (
    <div className="tweaks">
      <div className="tweaks__title">Tweaks</div>

      <div className="tweaks__row">
        <div className="tweaks__label">Variant</div>
        <div className="tweaks__seg">
          {[["editorial", "Editorial"], ["dashboard", "Dashboard"]].map(([k, lbl]) => (
            <button
              key={k}
              className={"tweaks__seg-btn" + (variant === k ? " is-on" : "")}
              onClick={() => setState(s => ({ ...s, variant: k }))}
            >{lbl}</button>
          ))}
        </div>
      </div>

      <div className="tweaks__row">
        <div className="tweaks__label">Theme</div>
        <div className="tweaks__seg">
          {[["light", "Light"], ["dark", "Dark"]].map(([k, lbl]) => (
            <button
              key={k}
              className={"tweaks__seg-btn" + (theme === k ? " is-on" : "")}
              onClick={() => setState(s => ({ ...s, theme: k }))}
            >{lbl}</button>
          ))}
        </div>
      </div>

      <div className="tweaks__row">
        <div className="tweaks__label">Density</div>
        <div className="tweaks__seg">
          {[["compact", "Compact"], ["comfortable", "Comfy"], ["spacious", "Spacious"]].map(([k, lbl]) => (
            <button
              key={k}
              className={"tweaks__seg-btn" + (density === k ? " is-on" : "")}
              onClick={() => setState(s => ({ ...s, density: k }))}
            >{lbl}</button>
          ))}
        </div>
      </div>

      <div className="tweaks__hint">Press <kbd>⌘K</kbd> for the command palette · <kbd>?</kbd> for help</div>
    </div>
  );
}

// ─── Help overlay (? key) ───────────────────────────────────────────────────
function HelpOverlay({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="help-overlay" onClick={onClose}>
      <div className="help" onClick={e => e.stopPropagation()}>
        <div className="help__title">Keyboard</div>
        <dl className="help__list">
          <div><dt><kbd>⌘K</kbd> / <kbd>Ctrl K</kbd></dt><dd>Open command palette</dd></div>
          <div><dt><kbd>T</kbd></dt><dd>Toggle theme</dd></div>
          <div><dt><kbd>V</kbd></dt><dd>Swap variant (editorial ⇄ dashboard)</dd></div>
          <div><dt><kbd>G</kbd> then <kbd>H</kbd></dt><dd>Go to highlights</dd></div>
          <div><dt><kbd>G</kbd> then <kbd>E</kbd></dt><dd>Go to experience</dd></div>
          <div><dt><kbd>G</kbd> then <kbd>S</kbd></dt><dd>Go to skills</dd></div>
          <div><dt><kbd>?</kbd></dt><dd>This overlay</dd></div>
          <div><dt><kbd>Esc</kbd></dt><dd>Close anything</dd></div>
        </dl>
        <div className="help__foot">Built with HTML, serifs, and restraint.</div>
      </div>
    </div>
  );
}

// ─── Footer (shared) ────────────────────────────────────────────────────────
function SharedFooter({ onOpenPalette }) {
  return (
    <footer className="foot">
      <div className="foot__l">
        <StatusDot />
        <span>all systems nominal</span>
      </div>
      <div className="foot__c">
        © {new Date().getFullYear()} Salvador Fuentes Jr. · set in Fraunces &amp; Geist Mono
      </div>
      <div className="foot__r">
        <button className="linklike" onClick={onOpenPalette}>⌘K</button>
      </div>
    </footer>
  );
}

Object.assign(window, { PhotoPlaceholder, StatusDot, CommandPalette, TweaksPanel, HelpOverlay, SharedFooter });
