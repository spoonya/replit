import { loader } from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { OPTIONS } from '~/app/constants/options.constant';
import { getStorage, setStorage } from '~/app/helpers/options.helper';

export default function useThemes() {
  const [theme, setTheme] = useState(getStorage(OPTIONS.themes.storageName) || OPTIONS.themes.dark);

  const toggleEditorTheme = () => {
    loader.init().then((monaco) => {
      if (theme === OPTIONS.themes.light) {
        monaco.editor.setTheme(OPTIONS.themes.darkTheme);
      } else {
        monaco.editor.setTheme(OPTIONS.themes.lightTheme);
      }
    });
  };

  const toggleTheme = () => {
    if (theme === OPTIONS.themes.light) {
      setStorage(OPTIONS.themes.storageName, OPTIONS.themes.dark);
      setTheme(OPTIONS.themes.dark);
      toggleEditorTheme();
    } else {
      setStorage(OPTIONS.themes.storageName, OPTIONS.themes.light);
      setTheme(OPTIONS.themes.light);
      toggleEditorTheme();
    }
  };

  useEffect(() => {
    const localTheme = getStorage(OPTIONS.themes.storageName);
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
}
