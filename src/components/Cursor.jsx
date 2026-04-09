import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ring = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dotRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    };
    document.addEventListener('mousemove', onMove);

    let rafId;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x - 18) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y - 18) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const grow = () => { if (dotRef.current) dotRef.current.style.transform += ' scale(1.8)'; };
    const shrink = () => { if (ringRef.current) ringRef.current.style.opacity = '0.7'; };
    document.querySelectorAll('a, button, .project-card, .skill-card').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className={styles.dot} ref={dotRef} />
      <div className={styles.ring} ref={ringRef} />
    </>
  );
}
