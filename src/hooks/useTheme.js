import { useState, useEffect } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolioTheme') || 'space'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolioTheme', theme);
  }, [theme]);

  return [theme, setTheme];
}
