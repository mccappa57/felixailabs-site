/* global React, Icon, LiveDot, Pill, Button, Eyebrow, CTA_LABEL */
// ============================================================
// Felix AI Labs — Nav, animated Agent Graph, Hero, Trust strip
// ============================================================
const { useEffect: useEffectH, useState: useStateH } = React;

function Nav({ onNav }) {
  const links = [['How it works', 'how'], ['Vision', 'vision'], ['Hardware', 'hardware'], ['Pricing', 'pricing'], ['Live', 'live']];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(5,6,15,.62)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '15px 32px', display: 'flex', alignItems: 'center', gap: 22 }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); onNav('top'); }} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="assets/logo-mark.svg" alt="" style={{ height: 30 }} />
          <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: '-0.02em', color: 'var(--fg)', whiteSpace: 'nowrap' }}>Felix<span style={{ color: 'var(--fg-muted)' }}> AI</span></span>
        </a>
        <nav style={{ display: 'flex', gap: 2, marginLeft: 12 }} className="nav-links">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); onNav(id); }} style={{ color: 'var(--fg-dim)', textDecoration: 'none', fontSize: 14.5, fontWeight: 500, padding: '8px 11px', borderRadius: 8, transition: 'color .2s, background .2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg)'; e.currentTarget.style.background = 'var(--surface-1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-dim)'; e.currentTarget.style.background = 'transparent'; }}>{label}</a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="felix-label nav-status"><LiveDot /><span style={{ color: 'var(--green-300)' }}>System online</span></span>
          <Button variant="primary" size="sm" icon="arrow-right">{CTA_LABEL}</Button>
        </div>
      </div>
    </header>
  );
}

// ---- Animated agent graph: Felix core + orbiting task agents ----
function AgentGraph() {
  const C = 235, R = 170;
  const nodes = [
    { icon: 'phone-incoming', color: 'var(--amber)', label: 'Calls' },
    { icon: 'mail', color: 'var(--blue)', label: 'Email' },
    { icon: 'calendar-check', color: 'var(--green)', label: 'Calendar' },
    { icon: 'search', color: 'var(--purple)', label: 'Research' },
    { icon: 'pen-line', color: 'var(--amber)', label: 'Writing' },
    { icon: 'user-plus', color: 'var(--blue)', label: 'Leads' },
  ].map((n, i) => {
    const a = (-90 + i * 60) * Math.PI / 180;
    return { ...n, x: C + R * Math.cos(a), y: C + R * Math.sin(a) };
  });
  return (
    <div className="agent-graph" style={{ position: 'relative', width: 470, height: 470, maxWidth: '100%', margin: '0 auto' }}>
      <svg viewBox="0 0 470 470" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
        {nodes.map((n, i) => (
          <g key={i}>
            <line x1={C} y1={C} x2={n.x} y2={n.y} stroke="rgba(255,255,255,.08)" strokeWidth="1" />
            <line x1={C} y1={C} x2={n.x} y2={n.y} stroke={n.color} strokeWidth="1.5" strokeOpacity="0.45" strokeDasharray="3 9" className="edge-flow" style={{ animationDelay: `${i * -0.5}s` }} />
          </g>
        ))}
      </svg>
      {/* travelling pulses */}
      {nodes.map((n, i) => (
        <span key={i} className="graph-pulse" style={{ left: C, top: C, '--dx': `${n.x - C}px`, '--dy': `${n.y - C}px`, background: n.color, boxShadow: `0 0 10px 2px ${n.color}`, animationDelay: `${i * 0.45}s` }} />
      ))}
      {/* satellite nodes */}
      {nodes.map((n, i) => (
        <div key={i} style={{ position: 'absolute', left: n.x, top: n.y, transform: 'translate(-50%,-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
          <div className="graph-node" style={{ borderColor: `color-mix(in srgb, ${n.color} 40%, transparent)`, color: n.color, boxShadow: `0 0 24px -6px color-mix(in srgb, ${n.color} 60%, transparent)` }}>
            <Icon name={n.icon} size={22} color={n.color} />
          </div>
          <span className="felix-label" style={{ fontSize: 10.5 }}>{n.label}</span>
        </div>
      ))}
      {/* core */}
      <div style={{ position: 'absolute', left: C, top: C, transform: 'translate(-50%,-50%)' }}>
        <span className="core-ring" /><span className="core-ring" style={{ animationDelay: '1.3s' }} />
        <div className="graph-core">
          <img src="assets/logo-mark.svg" alt="" style={{ width: 30, height: 30 }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.16em', color: 'var(--amber-300)', marginTop: 4 }}>FELIX</span>
        </div>
      </div>
    </div>
  );
}

function Hero({ onNav }) {
  return (
    <div id="top" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="space-bg" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px 84px', position: 'relative', display: 'grid', gridTemplateColumns: '1.02fr 0.98fr', gap: 48, alignItems: 'center' }} className="hero-grid">
        <div>
          <Pill variant="amber">Deployed on-premise · Always on</Pill>
          <h1 className="felix-display" style={{ fontSize: 60, margin: '22px 0 0' }}>
            Not automation.<br /><span className="felix-text-amber">A version of you</span> that never sleeps.
          </h1>
          <p className="felix-body-lg" style={{ marginTop: 22, maxWidth: 524 }}>
            Felix is a custom AI operator that runs on a tiny device on your desk — triaging email, managing your calendar, researching, drafting, and chasing leads, so you can focus on the work only you can do.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
            <Button variant="primary" icon="arrow-right">{CTA_LABEL}</Button>
            <Button variant="secondary" icon="play" onClick={() => onNav('live')}>See it run</Button>
          </div>
          <div style={{ display: 'flex', gap: 26, marginTop: 38, flexWrap: 'wrap' }}>
            {[['Runs on a', '$75 device'], ['A team of', '6+ agents'], ['Always', 'on · 24/7']].map(([a, b]) => (
              <div key={b}>
                <div className="felix-small" style={{ fontSize: 12 }}>{a}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 17, fontWeight: 600, color: 'var(--fg)', marginTop: 2 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
        <AgentGraph />
      </div>
    </div>
  );
}

function TrustStrip() {
  return (
    <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg-1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '22px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
        <span className="felix-label">Built for</span>
        <span style={{ fontWeight: 600, fontSize: 16, color: 'var(--fg-dim)' }}>Service businesses · freelancers · small teams</span>
      </div>
    </div>
  );
}

Object.assign(window, { Nav, AgentGraph, Hero, TrustStrip });
