import useTheme from './hooks/useTheme';

import Starfield      from './components/Starfield';
import Cursor         from './components/Cursor';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Experience     from './components/Experience';
import Projects       from './components/Projects';
import Skills         from './components/Skills';
import Achievements   from './components/Achievements';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

export default function App() {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <Starfield />
      <Cursor />
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
