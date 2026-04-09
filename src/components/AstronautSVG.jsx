import styles from './AstronautSVG.module.css';

export default function AstronautSVG() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.ring} ${styles.ring1}`}>
        <div className={`${styles.dot} ${styles.dot1}`} />
        <div className={`${styles.dot} ${styles.dot2}`} />
      </div>
      <div className={`${styles.ring} ${styles.ring2}`} />

      <svg className={styles.svg} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="helmetGrad" cx="35%" cy="35%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="60%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#1e0a3c" />
          </radialGradient>
          <radialGradient id="suitGrad" cx="40%" cy="30%">
            <stop offset="0%" stopColor="#ddd6fe" />
            <stop offset="100%" stopColor="#a78bfa" />
          </radialGradient>
          <radialGradient id="visorGrad" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.6" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Halo */}
        <circle cx="150" cy="145" r="110" fill="rgba(124,58,237,0.08)" filter="url(#glow)" />
        {/* Body */}
        <ellipse cx="150" cy="210" rx="60" ry="70" fill="url(#suitGrad)" />
        {/* Arms */}
        <ellipse cx="84" cy="200" rx="22" ry="14" fill="url(#suitGrad)" transform="rotate(-20,84,200)" />
        <ellipse cx="216" cy="200" rx="22" ry="14" fill="url(#suitGrad)" transform="rotate(20,216,200)" />
        {/* Gloves */}
        <ellipse cx="72" cy="212" rx="15" ry="10" fill="#c4b5fd" transform="rotate(-20,72,212)" />
        <ellipse cx="228" cy="212" rx="15" ry="10" fill="#c4b5fd" transform="rotate(20,228,212)" />
        {/* Legs */}
        <rect x="118" y="265" width="26" height="38" rx="13" fill="url(#suitGrad)" />
        <rect x="158" y="265" width="26" height="38" rx="13" fill="url(#suitGrad)" />
        {/* Boots */}
        <ellipse cx="131" cy="302" rx="18" ry="9" fill="#7c3aed" />
        <ellipse cx="171" cy="302" rx="18" ry="9" fill="#7c3aed" />
        {/* Chest panel */}
        <rect x="126" y="192" width="48" height="36" rx="6" fill="rgba(255,255,255,0.15)" />
        <rect x="131" y="197" width="38" height="10" rx="3" fill="rgba(6,182,212,0.5)" />
        <circle cx="135" cy="215" r="4" fill="#f59e0b" opacity="0.9" filter="url(#glow)" />
        <circle cx="150" cy="215" r="4" fill="#10b981" opacity="0.9" filter="url(#glow)" />
        <circle cx="165" cy="215" r="4" fill="#ef4444" opacity="0.9" filter="url(#glow)" />
        {/* Helmet */}
        <circle cx="150" cy="130" r="68" fill="url(#helmetGrad)" />
        {/* Visor */}
        <ellipse cx="150" cy="128" rx="45" ry="40" fill="url(#visorGrad)" opacity="0.85" />
        {/* Shine */}
        <ellipse cx="135" cy="112" rx="12" ry="8" fill="rgba(255,255,255,0.35)" transform="rotate(-20,135,112)" />
        {/* Code reflection */}
        <text x="150" y="132" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.6)">
          &lt;/code&gt;
        </text>
        {/* Antenna */}
        <line x1="150" y1="62" x2="150" y2="78" stroke="#c4b5fd" strokeWidth="3" />
        <circle cx="150" cy="58" r="5" fill="#f59e0b" filter="url(#glow)" />
        {/* Surrounding stars */}
        <circle cx="55"  cy="80"  r="2"   fill="#e8f4ff" opacity="0.8" />
        <circle cx="240" cy="100" r="1.5" fill="#e8f4ff" opacity="0.6" />
        <circle cx="70"  cy="160" r="1"   fill="#e8f4ff" opacity="0.5" />
        <circle cx="250" cy="165" r="2"   fill="#e8f4ff" opacity="0.7" />
        <circle cx="85"  cy="250" r="1.5" fill="#e8f4ff" opacity="0.4" />
      </svg>
    </div>
  );
}
