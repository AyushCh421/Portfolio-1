import useReveal from '../hooks/useReveal';
import { achievements, certifications } from '../data/portfolioData';
import styles from './Achievements.module.css';

function AchCard({ ach }) {
  const ref = useReveal();
  return (
    <div className={`${styles.card} reveal`} ref={ref}>
      <div className={styles.icon}>{ach.icon}</div>
      <h3>{ach.title}</h3>
      <span className={styles.year}>{ach.year}</span>
      <p>{ach.desc}</p>
    </div>
  );
}

export default function Achievements() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();

  return (
    <section id="achievements" className={styles.section}>
      <h2 className={`section-title reveal`} ref={r1}>Achievements</h2>
      <p className={`section-sub reveal`} ref={r2}>// certifications and accomplishments</p>

      <div className={styles.grid}>
        {achievements.map((a) => (
          <AchCard key={a.title} ach={a} />
        ))}
      </div>

      <div className={`${styles.certList} reveal`} ref={r3}>
        {certifications.map((c) => (
          <div key={c} className={styles.certItem}>
            🏆 {c}
          </div>
        ))}
      </div>
    </section>
  );
}
