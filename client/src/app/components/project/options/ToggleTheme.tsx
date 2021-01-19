import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemifiedStyles } from '../../../../styles/styledComponents/dynamicStyles';
import { darkTheme, lightTheme } from '../../../../styles/styledComponents/theme';

export default function ToggleTheme() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <ThemifiedStyles />
      <button className="options__item" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </ThemeProvider>
  );
}
