import loader from '@monaco-editor/loader';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '~/styles/styledComponents/theme';
import { ThemifiedStyles } from '../../../../styles/styledComponents/dynamicStyles';

export default function ToggleTheme() {
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = () => {
    setLightMode(!lightMode);

    loader.init().then((monaco) => {
      lightMode ? monaco.editor.setTheme('darkTheme') : monaco.editor.setTheme('lightTheme');
    });
  };

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <ThemifiedStyles />
      <button className="options__item" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </ThemeProvider>
  );
}
