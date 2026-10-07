import './Logo.css';

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth={2.6} strokeLinecap="round">
        <path d="M16 4a12 12 0 1 0 12 12" />
        <path d="M16 9a7 7 0 1 0 7 7" />
        <path d="M16 14a2 2 0 1 0 2 2" />
      </g>
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label="AdApp">
      <span>Ad</span>
      <LogoMark size={38} />
      <span>App</span>
    </a>
  );
}
