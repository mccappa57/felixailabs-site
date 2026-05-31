/* global React, Icon, LiveDot, Pill, Button, Eyebrow, Section, SectionHeader, FeatureCard, CTA_LABEL */
// ============================================================
// Felix AI Labs — Features, How it works, Vision / Founder
// ============================================================

function Features() {
  const items = [
    ['mail', 'var(--amber)', 'Triages your inbox', 'Sorts, drafts replies, and surfaces only the messages that actually need you.'],
    ['calendar-check', 'var(--blue)', 'Runs your calendar', 'Schedules, reschedules, and protects your focus time without the back-and-forth.'],
    ['search', 'var(--purple)', 'Researches anything', 'Pulls together the background, the options, and the answer before you ask twice.'],
    ['pen-line', 'var(--green)', 'Writes & drafts', 'Proposals, posts, and follow-ups, written in your voice and ready to send.'],
    ['list-checks', 'var(--amber)', 'Tracks the tasks', 'Captures to-dos from every thread and keeps the whole list moving.'],
    ['shield-check', 'var(--green)', 'Runs locally', 'On a device on your desk. Your data never lives in someone else\u2019s cloud.'],
  ];
  return (
    <Section id="features">
      <SectionHeader eyebrow="What Felix handles" eyebrowColor="var(--amber)" title="Your whole desk, run by a version of you." body="Built custom for how you actually work — not a generic bot with your logo on it." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 44 }} className="feature-grid">
        {items.map((it, i) => <FeatureCard key={i} icon={it[0]} iconColor={it[1]} title={it[2]} body={it[3]} />)}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    ['phone', 'var(--amber)', 'Book a discovery call', 'We learn your business — the calls you get, the jobs you book, where leads slip through.'],
    ['cpu', 'var(--blue)', 'We build your operator', 'A custom AI system, tuned to how you actually talk to customers and run your day.'],
    ['package', 'var(--purple)', 'We ship the Pi', 'A pre-provisioned Raspberry Pi arrives ready to plug in. We manage it end to end.'],
    ['zap', 'var(--green)', 'It goes to work', 'Live in about a week. Answering, booking, and following up — without you lifting a finger.'],
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
              You didn’t start a business to live in your inbox.
            </h2>
            <div className="felix-body-lg" style={{ marginTop: 20, maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ margin: 0 }}>Big companies have ops teams and assistants. The solo founder, the freelancer, the small team — they have themselves, and an inbox, a calendar, and a to-do list that never stops growing.</p>
              <p style={{ margin: 0 }}>Felix exists to close that gap. Not with another app to check, and not by renting you a slice of someone else’s cloud — but with a team of agents that lives on a device you own and learns how you work: triaging email, managing your calendar, researching, drafting, and chasing leads, around the clock.</p>
              <p style={{ margin: 0, color: 'var(--fg)' }}>The goal isn’t to replace you. It’s to give you a second one of you.</p>
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
