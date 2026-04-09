import useReveal from '../hooks/useReveal';
import { personalInfo, quickFacts, skillTags } from '../data/portfolioData';
import styles from './About.module.css';

export default function About() {
  const r1 = useReveal(); const r2 = useReveal();
  const r3 = useReveal(); const r4 = useReveal();

  return (
    <section id="about" className={styles.about}>
      <h2 className={`section-title reveal`} ref={r1}>About Me</h2>
      <p className={`section-sub reveal`} ref={r2}>
          A bit about who I am
      </p>

      <div className={styles.grid}>
        <div className={`${styles.text} reveal`} ref={r3}>
          <p>
            I am a detail-oriented and adaptable problem-solver, currently in my first year of
            Computer Science and Engineering at{' '}
            <a href={personalInfo.nitSikkimUrl} target="_blank" rel="noreferrer">
              National Institute of Technology, Sikkim
            </a>
            . My coursework in Data Structures, Algorithms, Software Engineering, and Machine
            Learning has provided me with a strong theoretical foundation.
          </p>
          <p>
            With a current CGPA of{' '}
            <strong style={{ color: 'var(--accent2)' }}>{personalInfo.cgpa}</strong>, I'm passionate
            about building impactful applications — from full-stack web apps to ML-powered systems —
            and constantly learning new technologies. I am an active member of coding and development
            clubs at NIT Sikkim.
          </p>
          <div className={styles.tags}>
            {skillTags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className={`${styles.facts} reveal`} ref={r4}>
          <h3>⚡ Quick Facts</h3>
          {quickFacts.map((f) => (
            <div key={f.label} className={styles.factItem}>
              <span className={styles.factIcon}>{f.icon}</span>
              <span>{f.label}</span>
              <strong>{f.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
