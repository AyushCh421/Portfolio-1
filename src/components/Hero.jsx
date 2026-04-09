import useTyping from '../hooks/useTyping';
import useReveal from '../hooks/useReveal';
import AstronautSVG from './AstronautSVG';
import { personalInfo } from '../data/portfolioData';
import styles from './Hero.module.css';

export default function Hero() {
  const typed = useTyping(personalInfo.roles);

  const r1 = useReveal(); const r2 = useReveal(); const r3 = useReveal();
  const r4 = useReveal(); const r5 = useReveal(); const r6 = useReveal();
  const r7 = useReveal();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.planet} />
      <div className={styles.grid}>

        {/* ── Left column ── */}
        <div className={styles.content}>
          <div className={`${styles.badge} reveal`} ref={r1}>
            <span>▶</span> CS Engineer &amp; ML Developer
          </div>

          <h1 className={`${styles.name} reveal`} ref={r2}>
            <span className={styles.line1}>{personalInfo.firstName}</span>
            <span className={styles.line2}>{personalInfo.lastName}</span>
          </h1>

          <p className={`${styles.role} reveal`} ref={r3}>
            <span className={styles.typed}>{typed}</span>
          </p>

          <div className={`${styles.meta} reveal`} ref={r4}>
            <span>📍 <em>{personalInfo.location}</em></span>
            <span>⭐ CGPA: <em>{personalInfo.cgpa}</em> / 10</span>
            <span>💡 <em>{personalInfo.dsaProblems}</em> DSA Problems</span>
          </div>

          <p className={`${styles.desc} reveal`} ref={r5}>
            {personalInfo.bio1.slice(0, 160)}… Currently building impactful
            real-world projects and seeking internship opportunities.
          </p>

          <div className={`${styles.btns} reveal`} ref={r6}>
            <a href="#projects" className={styles.btnPrimary}>🚀 View My Work</a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.btnOutline}>
              ⚡ GitHub Profile
            </a>
          </div>

          <div className={`${styles.socials} reveal`} ref={r7}>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.socialIcon} title="LinkedIn">in</a>
            <a href={personalInfo.github}   target="_blank" rel="noreferrer" className={styles.socialIcon} title="GitHub">⚡</a>
            <a href={`mailto:${personalInfo.email}`} className={styles.socialIcon} title="Email">✉</a>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className={`${styles.visual} reveal`}>
          <AstronautSVG />
        </div>

      </div>
    </section>
  );
}
