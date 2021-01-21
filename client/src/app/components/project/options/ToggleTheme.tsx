import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '~/styles/styledComponents/theme';
import { ThemifiedStyles } from '../../../../styles/styledComponents/dynamicStyles';
import Toggle from './Toggle';
import UseLightMode from './UseLightMode';

export default function ToggleTheme() {
  const [theme, toggleTheme] = UseLightMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <ThemifiedStyles />
      <Toggle toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
