import React from 'react';
import { ThemeProvider } from 'styled-components';
import { OPTIONS } from '~/app/constants/options.constant';
import { darkTheme, lightTheme } from '~/app/constants/theme.constant';
import { ThemifiedStyles } from '~/styles/styledComponents/dynamicStyles';
import Toggle from './Toggle';
import useThemes from './useThemes';

export default function ToggleTheme() {
  const [theme, toggleTheme] = useThemes();
  const themeMode = theme === OPTIONS.themes.light ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <ThemifiedStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
