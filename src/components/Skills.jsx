import useReveal from '../hooks/useReveal';
import { skills } from '../data/portfolioData';
import styles from './Skills.module.css';

function SkillCard({ skill }) {
  const ref = useReveal();
  return (
    <div className={`${styles.card} skill-card reveal`} ref={ref}>
      <span className={styles.icon}>{skill.icon}</span>
      <div className={styles.name}>{skill.name}</div>
    </div>
  );
}

export default function Skills() {
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <section id="skills" className={styles.section}>
      <h2 className={`section-title reveal`} ref={r1}>Tech Stack</h2>
      <p className={`section-sub reveal`} ref={r2}>
          Technologies and tools I work with
      </p>
      <div className={styles.grid}>
        {skills.map((s) => (
          <SkillCard key={s.name} skill={s} />
        ))}
      </div>
    </section>
  );
}
