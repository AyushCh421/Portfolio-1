import useReveal from '../hooks/useReveal';
import { experiences } from '../data/portfolioData';
import styles from './Experience.module.css';

function ExpCard({ exp }) {
  const ref = useReveal();
  return (
    <div className={`${styles.card} reveal`} ref={ref}>
      <div className={styles.header}>
        <div>
          <div className={styles.org}>{exp.org}</div>
          <div className={styles.role}>{exp.role}</div>
        </div>
        <div className={styles.meta}>
          <span className={styles.date}>{exp.period}</span>
          <span className={styles.badge}>{exp.type}</span>
        </div>
      </div>
      <ul className={styles.points}>
        {exp.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <section id="experience" className={styles.section}>
      <h2 className={`section-title reveal`} ref={r1}>Experience</h2>
      <p className={`section-sub reveal`} ref={r2}>// roles &amp; responsibilities</p>
      <div className={styles.list}>
        {experiences.map((exp) => (
          <ExpCard key={exp.org} exp={exp} />
        ))}
      </div>
    </section>
  );
}
