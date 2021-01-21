import { loader } from '@monaco-editor/react';
import { useEffect, useState } from 'react';

export default function UseLightMode() {
  const [theme, setTheme] = useState(window.localStorage.getItem('codeit-theme') || 'dark');

  const toggleEditorTheme = () => {
    loader.init().then((monaco) => {
      if (theme === 'light') {
        monaco.editor.setTheme('darkTheme');
      } else {
        monaco.editor.setTheme('lightTheme');
      }
    });
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('codeit-theme', 'dark');
      setTheme('dark');
      toggleEditorTheme();
    } else {
      window.localStorage.setItem('codeit-theme', 'light');
      setTheme('light');
      toggleEditorTheme();
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('codeit-theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
}
