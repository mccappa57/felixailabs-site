/* global React, Icon, LiveDot, Pill, Button, Eyebrow, Section, SectionHeader, CTA_LABEL */
// ============================================================
// Felix AI Labs — Hardware (3 Pi models) + Pricing (5 tiers)
// ============================================================

function PiVisual({ color }) {
  return (
    <div className="pi-visual" style={{ height: 180 }}>
      <div className="pi-grid" />
      <div className="pi-chip" style={{ borderColor: `color-mix(in srgb, ${color} 50%, transparent)`, boxShadow: `0 0 44px -8px color-mix(in srgb, ${color} 75%, transparent)` }}>
        <Icon name="cpu" size={50} color={color} />
      </div>
      <span className="live-dot" style={{ position: 'absolute', bottom: 16, right: 16 }} />
      <span style={{ position: 'absolute', bottom: 16, right: 32, width: 7, height: 7, borderRadius: '50%', background: color, opacity: 0.6 }} />
    </div>
  );
}

function Hardware() {
  const models = [
    { tier: 'Starter', name: 'Raspberry Pi 4', specs: [['Memory', '4GB LPDDR4'], ['Best for', 'Speed to Lead · Core'], ['Agents', 'Up to 3']], color: 'var(--blue)', slot: 'pi4' },
    { tier: 'Standard', name: 'Raspberry Pi 5', specs: [['Memory', '8GB LPDDR4X'], ['Best for', 'Pro · Power'], ['Agents', 'Up to 6']], color: 'var(--amber)', slot: 'pi5', featured: true },
    { tier: 'Max', name: 'Pi 5 + AI Kit', specs: [['Memory', '16GB + NPU'], ['Best for', 'Enterprise · multi-site'], ['Agents', 'Unlimited']], color: 'var(--purple)', slot: 'pi5ai' },
  ];
  return (
    <Section id="hardware">
      <SectionHeader eyebrow="The hardware" eyebrowColor="var(--green)" title="A tiny computer that runs your front office." body="Every plan ships on a Raspberry Pi, pre-provisioned and managed by us. You own the box — Felix lives on it." center />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 48 }} className="hardware-grid">
        {models.map((m) => (
          <div key={m.name} className={`card${m.featured ? ' card-featured' : ''}`} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', borderBottom: '1px solid var(--border)' }}>
              <PiVisual color={m.color} />
              <span style={{ position: 'absolute', top: 14, left: 14 }}><Pill variant={m.featured ? 'amber' : 'blue'}>{m.tier}</Pill></span>
              {m.featured && <span style={{ position: 'absolute', top: 14, right: 14 }} className="felix-label"><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><LiveDot /><span style={{ color: 'var(--green-300)' }}>Recommended</span></span></span>}
            </div>
            <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name="cpu" size={22} color={m.color} />
                <span className="felix-h4" style={{ fontSize: 19 }}>{m.name}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {m.specs.map(([k, v], i) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderTop: i ? '1px solid var(--border)' : 'none' }}>
                    <span className="felix-small" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.08em', fontSize: 11 }}>{k}</span>
                    <span style={{ fontSize: 14, color: 'var(--fg)', fontWeight: 500 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function PriceCard({ p }) {
  return (
    <div className={`card${p.featured ? ' card-featured' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '24px 20px', position: 'relative' }}>
      {p.featured && <span style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)' }}><Pill variant="amber">Most popular</Pill></span>}
      <div>
        <div className="felix-h4" style={{ fontSize: 17 }}>{p.name}</div>
        <div className="felix-small" style={{ marginTop: 4, minHeight: 34 }}>{p.tagline}</div>
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
          <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', color: p.featured ? 'var(--amber)' : 'var(--fg)' }}>{p.monthly}</span>
          <span className="felix-small" style={{ fontSize: 13 }}>{p.monthly.includes('$') ? '/mo' : ''}</span>
        </div>
        <div className="felix-small" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 4, color: 'var(--fg-muted)' }}>{p.setup}</div>
      </div>
      <div style={{ height: 1, background: 'var(--border)' }} />
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {p.features.map((f) => (
          <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--fg-dim)', lineHeight: 1.4 }}>
            <span style={{ marginTop: 1, flex: '0 0 auto' }}><Icon name="check" size={14} color="var(--green)" /></span>{f}
          </li>
        ))}
      </ul>
      <Button variant={p.featured ? 'primary' : 'secondary'} size="sm">{CTA_LABEL}</Button>
    </div>
  );
}

function Pricing() {
  const plans = [
    { name: 'Speed to Lead', tagline: 'Never miss a lead again.', monthly: '$250', setup: '+ $1,500 setup', features: ['Lead capture form', 'SMS qualification', 'Auto-booking', 'Raspberry Pi included'] },
    { name: 'Core', tagline: 'The essentials, handled.', monthly: '$100', setup: '+ $750 setup', features: ['Email triage', 'Calendar management', 'Task tracking', 'Up to 3 agents'] },
    { name: 'Pro', tagline: 'A working team of agents.', monthly: '$200', setup: '+ $750 setup', featured: true, features: ['Everything in Core', 'Research agent', 'Writing & drafting agent', 'Up to 6 agents'] },
    { name: 'Power', tagline: 'Unlimited horsepower.', monthly: '$350', setup: '+ $750 setup', features: ['All agents, unlimited', 'Custom integrations', 'Priority support', 'Raspberry Pi included'] },
    { name: 'Enterprise', tagline: 'Firm-wide intelligence.', monthly: '$500–800', setup: '+ $3k–5k setup', features: ['Full firm-wide deployment', 'Multi-user shared intelligence', 'Staff onboarding', '30 days dedicated support'] },
  ];
  return (
    <Section id="pricing" band>
      <SectionHeader eyebrow="Pricing" eyebrowColor="var(--purple)" title="One operator. No per-seat math." body="A one-time build, then a flat monthly. The hardware is yours to keep." center />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginTop: 56, alignItems: 'stretch' }} className="pricing-grid">
        {plans.map((p) => <PriceCard key={p.name} p={p} />)}
      </div>
      <p className="felix-small" style={{ textAlign: 'center', marginTop: 24, fontFamily: 'var(--font-mono)' }}>All plans include the Raspberry Pi, provisioning, and ongoing management. No long-term contract.</p>
    </Section>
  );
}

Object.assign(window, { Hardware, PriceCard, Pricing });
