import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { projects, filterOptions } from '../data/portfolioData';
import styles from './Projects.module.css';

function ProjectCard({ project }) {
  const ref = useReveal();
  return (
    <div className={`${styles.card} project-card reveal`} ref={ref} data-cat={project.category}>
      <div className={styles.thumb}>
        <span className={styles.thumbText}>{project.shortTitle}</span>
        <span className={styles.catLabel}>{project.categoryLabel}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <span className={styles.name}>{project.title}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <div className={styles.stack}>
          {project.stack.map((s, i) => (
            <span key={s} className={styles.stackTag}>
              {s}{i < project.stack.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
        <p className={styles.desc}>{project.desc}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          ⚡ View on GitHub →
        </a>
      </div>
    </div>
  );
}
export default function Projects() {
  const [filter, setFilter] = useState('all');
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className={styles.section}>
      <h2 className={`section-title reveal`} ref={r1}>Featured Projects</h2>
      <p className={`section-sub reveal`} ref={r2}>
      </p>

      <div className={`${styles.filters} reveal`} ref={r3}>
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            className={`${styles.filterTab} ${filter === opt.value ? styles.active : ''}`}
            onClick={() => setFilter(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
