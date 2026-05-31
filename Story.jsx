/* global React, Icon, LiveDot, Pill, Button, Eyebrow, Section, SectionHeader, FeatureCard, CTA_LABEL */
// ============================================================
// Felix AI Labs — Features, How it works, Vision / Founder
// ============================================================

function Features() {
  const items = [
    ['mail', 'var(--amber)', 'Owns your entire inbox', 'Reads, triages, drafts, and sends — in your voice. Flags only what genuinely needs your judgment. Everything else is handled without you touching it.'],
    ['pen-line', 'var(--green)', 'Writes like you', 'Client proposals, follow-ups, cold outreach, content, legal summaries. Trained on how you actually communicate — indistinguishable from the real thing.'],
    ['search', 'var(--purple)', 'Researches at depth', 'Competitor breakdowns, market analysis, lead backgrounds, contract reviews, industry summaries. Multi-source briefs delivered before you ask twice.'],
    ['users', 'var(--blue)', 'Does the work of a full team', 'Lead qualification, task coordination, calendar management, Notion ops, meeting prep, follow-up sequences. The output of several roles — in one system, on one device.'],
    ['cpu', 'var(--amber)', 'Built specifically for you', 'Not a template. Not a product. An operator engineered around your workflows, your clients, your voice, and your goals — then refined as it learns how you work.'],
    ['shield-check', 'var(--green)', 'Fully yours, fully private', 'Runs on hardware you own. Your data, your conversations, your context — never stored in anyone else\'s cloud.'],
  ];
  return (
    <Section id="features">
      <SectionHeader eyebrow="What Felix handles" eyebrowColor="var(--amber)" title="Your whole operation, run by a version of you." body="Not a generic tool with your branding on it. A custom AI operator built around exactly how you work." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 44 }} className="feature-grid">
        {items.map((it, i) => <FeatureCard key={i} icon={it[0]} iconColor={it[1]} title={it[2]} body={it[3]} />)}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    ['phone', 'var(--amber)', 'Discovery call', 'We learn your business — your workflows, your clients, where things fall through the cracks, and what good looks like for you.'],
    ['cpu', 'var(--blue)', 'We build your operator', 'A custom AI system, tuned to your voice, your priorities, and the specific work you need handled every day.'],
    ['package', 'var(--purple)', 'We ship the device', 'A pre-provisioned Raspberry Pi arrives ready to plug in. No IT setup. We provision, configure, and manage it end to end.'],
    ['zap', 'var(--green)', 'It goes to work', 'Live in about a week. Handling communication, research, writing, ops, and more — while you focus on the work only you can do.'],
  ];
  return (
    <Section id="how" band>
      <SectionHeader eyebrow="How it works" eyebrowColor="var(--blue)" title="From first call to fully operational in about a week." center />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 52, position: 'relative' }} className="steps-grid">
        <div className="steps-line" />
        {steps.map((s, i) => (
          <div key={i} style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-1)', border: `1px solid color-mix(in srgb, ${s[1]} 45%, transparent)`, color: s[1], boxShadow: `0 0 20px -6px color-mix(in srgb, ${s[1]} 70%, transparent)`, position: 'relative', zIndex: 1 }}>
                <Icon name={s[0]} size={22} color={s[1]} />
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-faint)' }}>0{i + 1}</span>
            </div>
            <div className="felix-h4" style={{ fontSize: 18 }}>{s[2]}</div>
            <p className="felix-body" style={{ fontSize: 14.5, marginTop: 8 }}>{s[3]}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Vision() {
  return (
    <Section id="vision">
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', background: 'var(--surface-1)' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(600px 360px at 12% 0%, rgba(245,158,11,.12), transparent 70%)' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 0, position: 'relative' }} className="vision-grid">
          <div style={{ padding: '56px 48px' }}>
            <Eyebrow color="var(--amber)">The vision</Eyebrow>
            <h2 className="felix-h2" style={{ marginTop: 18, fontSize: 34, maxWidth: 600 }}>
              The leverage of a full team. Built into one system, just for you.
            </h2>
            <div className="felix-body-lg" style={{ marginTop: 20, maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ margin: 0 }}>Every scaled company has an operations layer behind it. A chief of staff who manages the calendar. A researcher who preps every meeting. A writer who drafts every proposal. An SDR who chases every lead. A coordinator who keeps everything moving.</p>
              <p style={{ margin: 0 }}>Felix is that entire layer — custom-engineered around your specific business. Not a generic AI with a few tools bolted on. A dedicated operator that understands how you work, who your clients are, and what good looks like in your world — and gets sharper every day.</p>
              <p style={{ margin: 0, color: 'var(--fg)' }}>The goal isn't to save you a few hours. It's to give you the operating capacity of a company ten times your size.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 28 }}>
              <div className="avatar-ph" style={{ width: 48, height: 48 }}><Icon name="user" size={22} color="var(--fg-muted)" /></div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--fg)' }}>Founder name</div>
                <div className="felix-small" style={{ fontFamily: 'var(--font-mono)' }}>Founder · Felix AI Labs LLC</div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', borderLeft: '1px solid var(--border)', minHeight: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="vision-photo-wrap">
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(360px 300px at 50% 45%, rgba(245,158,11,.10), transparent 70%)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, position: 'relative' }}>
              <div className="avatar-ph avatar-lg" style={{ width: 144, height: 144 }}><Icon name="user" size={58} color="var(--fg-muted)" /></div>
              <span className="felix-label">Founder portrait · coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { Features, HowItWorks, Vision });
