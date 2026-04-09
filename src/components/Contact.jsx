import useReveal from '../hooks/useReveal';
import { personalInfo } from '../data/portfolioData';
import styles from './Contact.module.css';

export default function Contact() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();

  return (
    <section id="contact" className={styles.section}>
      <h2 className={`${styles.title} reveal`} ref={r1}>Get In Touch</h2>
      <p className={`${styles.sub} reveal`} ref={r2}>
        I'm actively looking for internship opportunities and open to discussing new projects.
        Feel free to reach out!
      </p>

      <div className={`${styles.btns} reveal`} ref={r3}>
        <a href={`mailto:${personalInfo.email}`} className={styles.emailBtn}>
          ✉ {personalInfo.email}
        </a>
        <a href={`mailto:${personalInfo.email}`} className={styles.emailBtn}>
          📧 Personal Email
        </a>
      </div>

      <div className={`${styles.socials} reveal`} ref={r4}>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.social} title="LinkedIn">
          in
        </a>
        <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.social} title="GitHub">
          ⚡
        </a>
      </div>
    </section>
  );
}
