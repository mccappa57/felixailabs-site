/* global React, Icon, LiveDot, Pill, Button, Eyebrow, Section, SectionHeader, CTA_LABEL */
// ============================================================
// Felix AI Labs — Live status terminal, CTA band, Footer
// ============================================================
const { useState: useStateC, useEffect: useEffectC, useRef: useRefC } = React;

const LOG_POOL = [
  ['email', 'var(--blue)', 'Inbox triaged — 14 sorted, 2 flagged for you', 'done'],
  ['research', 'var(--purple)', 'Research brief ready — competitor pricing', 'sent'],
  ['tasks', 'var(--green)', 'Tasks updated — 3 closed, 1 added', 'synced'],
  ['calendar', 'var(--green)', 'Calendar synced — moved 2 meetings', 'ok'],
  ['writing', 'var(--amber)', 'Draft written — proposal for Acme Co.', 'ready'],
  ['lead', 'var(--blue)', 'New lead qualified — call booked', 'booked'],
  ['email', 'var(--amber)', 'Reply drafted — client follow-up', 'queued'],
  ['research', 'var(--purple)', 'Summary generated — 32-page report', 'done'],
  ['calendar', 'var(--blue)', 'Meeting scheduled — Thu 11:00 AM', 'confirmed'],
  ['tasks', 'var(--amber)', 'Weekly digest compiled', 'ready'],
];
const ICONS = { email: 'mail', research: 'search', tasks: 'list-checks', calendar: 'calendar-check', writing: 'pen-line', lead: 'user-plus' };

function clock(base, i) {
  const d = new Date(base.getTime() + i * 1000);
  return d.toTimeString().slice(0, 8);
}

function LiveTerminal() {
  const baseRef = useRefC(new Date());
  const [lines, setLines] = useStateC(() => {
    const b = new Date(); b.setHours(9, 41, 12);
    baseRef.current = b;
    return [0, 1, 2, 3].map((k) => ({ ...mk(LOG_POOL[k], k * 7, b), key: k }));
  });
  const [tick, setTick] = useStateC([10000, 99.98, 0]);
  const bodyRef = useRefC(null);
  function mk(item, sec, base) {
    return { t: clock(base, sec), icon: ICONS[item[0]], color: item[1], text: item[2], tag: item[3] };
  }
  useEffectC(() => {
    let n = 4;
    const id = setInterval(() => {
      const item = LOG_POOL[Math.floor(Math.random() * LOG_POOL.length)];
      const sec = 28 + n * 6;
      setLines((prev) => [...prev.slice(-9), { ...mk(item, sec, baseRef.current), key: 'k' + n }]);
      setTick(([c]) => [c + Math.floor(Math.random() * 3) + 1, (99.9 + Math.random() * 0.09), 0]);
      n++;
    }, 1700);
    return () => clearInterval(id);
  }, []);
  useEffectC(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [lines]);

  return (
    <Section id="live">
      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 48, alignItems: 'center' }} className="live-grid">
        <div>
          <Eyebrow color="var(--green)">Live · right now</Eyebrow>
          <h2 className="felix-h2" style={{ marginTop: 16 }}>Felix, working while you read this.</h2>
          <p className="felix-body-lg" style={{ marginTop: 14, maxWidth: 440 }}>No dashboards to babysit. Every email, task, and booking streams through one calm feed — and you only hear about what matters.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
            <Button variant="primary" icon="arrow-right">{CTA_LABEL}</Button>
          </div>
        </div>
        <div className="card" style={{ padding: 0, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', background: '#070912' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '13px 18px', borderBottom: '1px solid var(--border)' }}>
            <span style={{ display: 'flex', gap: 6 }}>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
            </span>
            <span style={{ marginLeft: 8, fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--fg-muted)' }}>felix@our-desk — live feed</span>
            <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 7 }} className="felix-label"><LiveDot /><span style={{ color: 'var(--green-300)' }}>online</span></span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid var(--border)' }}>
            {[['Actions today', tick[0].toLocaleString(), 'var(--amber)'], ['Uptime', tick[1].toFixed(2) + '%', 'var(--green)'], ['Needs you', tick[2], 'var(--fg)']].map(([k, v, c], i) => (
              <div key={k} style={{ padding: '14px 18px', borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '.1em' }}>{k}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 23, fontWeight: 600, color: c, marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
          <div ref={bodyRef} style={{ height: 248, overflow: 'hidden', padding: '10px 0', position: 'relative' }}>
            {lines.map((l) => (
              <div key={l.key} className="term-line" style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '8px 18px', fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>
                <span style={{ color: 'var(--fg-faint)' }}>{l.t}</span>
                <span style={{ width: 22, height: 22, borderRadius: 6, flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `color-mix(in srgb, ${l.color} 16%, transparent)`, color: l.color }}><Icon name={l.icon} size={13} color={l.color} /></span>
                <span style={{ color: 'var(--fg-dim)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.text}</span>
                <span style={{ color: l.color, whiteSpace: 'nowrap' }}>{l.tag}</span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 18px', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--green)' }}>
              <span style={{ color: 'var(--fg-faint)' }}>felix$</span><span className="term-cursor" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CTABand() {
  return (
    <Section>
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-lg)', border: '1px solid var(--border-amber)', background: 'var(--surface-1)', padding: '64px 48px', textAlign: 'center', boxShadow: 'var(--glow-amber)' }}>
        <div className="cta-glow" />
        <div style={{ position: 'relative' }}>
          <h2 className="felix-h1" style={{ fontSize: 46, maxWidth: 720, margin: '0 auto' }}>Stop letting your inbox run your day.</h2>
          <p className="felix-body-lg" style={{ marginTop: 18, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>We build your operator, ship the device, and it goes to work. Most shops are live within a week.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <Button variant="primary" icon="arrow-right">{CTA_LABEL}</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  const cols = [
    ['Product', ['What Felix handles', 'How it works', 'Hardware', 'Pricing', 'Live']],
    ['Company', ['Vision', 'About', 'Contact', 'Status']],
    ['Resources', ['Setup guide', 'Privacy', 'Terms', 'Support']],
  ];
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 32px 40px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40 }} className="footer-grid">
        <div>
          <img src="../../assets/logo-wordmark.svg" alt="Felix AI Labs" style={{ height: 32 }} />
          <p className="felix-small" style={{ marginTop: 16, maxWidth: 280 }}>Not automation. A version of you that never sleeps. Custom AI operators, deployed on hardware you own.</p>
          <div style={{ marginTop: 18 }}><Button variant="primary" size="sm" icon="arrow-right">{CTA_LABEL}</Button></div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18 }} className="felix-label"><LiveDot /><span style={{ color: 'var(--green-300)' }}>All systems operational</span></span>
        </div>
        {cols.map(([title, links]) => (
          <div key={title}>
            <div className="felix-label" style={{ marginBottom: 16 }}>{title}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {links.map((l) => <li key={l}><a href="#" style={{ color: 'var(--fg-dim)', textDecoration: 'none', fontSize: 14 }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--fg)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--fg-dim)'}>{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span className="felix-small" style={{ fontFamily: 'var(--font-mono)' }}>© 2026 Felix AI Labs LLC</span>
          <span className="felix-small" style={{ fontFamily: 'var(--font-mono)' }}>Built on-premise · Raspberry Pi</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { LiveTerminal, CTABand, Footer });
