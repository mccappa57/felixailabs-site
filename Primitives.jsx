/* global React */
// ============================================================
// Felix AI Labs — UI Kit Primitives
// ============================================================
const { useEffect, useState, useRef } = React;

const CTA_LABEL = 'Book a Discovery Call';

// Lucide icon — renders the CDN SVG by name. Re-renders safely.
function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 1.75, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, stroke: color, 'stroke-width': strokeWidth },
        nameAttr: 'data-lucide',
      });
    }
  });
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0, ...style }} />;
}

function LiveDot({ color }) {
  return <span className="live-dot" style={color ? { background: color } : null} />;
}

function Pill({ variant, children, dot }) {
  const cls = variant ? `pill pill-${variant}` : 'pill';
  return <span className={cls}>{dot && <LiveDot />}{children}</span>;
}

function Button({ variant = 'primary', size, children = CTA_LABEL, icon, onClick, href }) {
  const cls = `btn btn-${variant}${size === 'sm' ? ' btn-sm' : ''}`;
  const inner = <>{children}{icon && <Icon name={icon} size={16} />}</>;
  if (href) return <a className={cls} href={href} onClick={onClick}>{inner}</a>;
  return <button className={cls} onClick={onClick}>{inner}</button>;
}

function Eyebrow({ children, color }) {
  return <span className="felix-label" style={color ? { color } : null}>{children}</span>;
}

function Section({ children, id, band, style }) {
  return (
    <section id={id} style={{ padding: '104px 32px', background: band ? 'var(--bg-1)' : 'transparent', position: 'relative', ...style }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>{children}</div>
    </section>
  );
}

// Centered or left section header
function SectionHeader({ eyebrow, eyebrowColor, title, body, center, maxTitle = 760 }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', maxWidth: center ? 720 : 'none', margin: center ? '0 auto' : 0 }}>
      <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow>
      <h2 className="felix-h2" style={{ marginTop: 16, maxWidth: center ? 'none' : maxTitle }}>{title}</h2>
      {body && <p className="felix-body-lg" style={{ marginTop: 14, maxWidth: 560, marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}>{body}</p>}
    </div>
  );
}

function FeatureCard({ icon, iconColor, title, body, featured, badge }) {
  return (
    <div className={`card${featured ? ' card-featured' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {badge && <Pill variant="amber">{badge}</Pill>}
      <div style={{ width: 44, height: 44, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `color-mix(in srgb, ${iconColor} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${iconColor} 32%, transparent)`, color: iconColor }}>
        <Icon name={icon} size={22} color={iconColor} />
      </div>
      <div className="felix-h4">{title}</div>
      <div className="felix-body" style={{ fontSize: 15, margin: 0 }}>{body}</div>
    </div>
  );
}

Object.assign(window, { CTA_LABEL, Icon, LiveDot, Pill, Button, Eyebrow, Section, SectionHeader, FeatureCard });
