import Editor, { Monaco } from '@monaco-editor/react';
import React, { useRef } from 'react';
import { OPTIONS } from '~/app/constants/options.constant';
import { getThemeStorage } from '~/app/helpers/options.helper';
import { darkTheme, lightTheme } from '~/styles/styledComponents/theme';

export let monacoRef: React.MutableRefObject<any> | null = null;

export default function CodeEditor(props: any) {
  const { language } = props;
  monacoRef = useRef(null);

  function handleEditorWillMount(monaco: Monaco) {
    monaco.editor.defineTheme(OPTIONS.themes.darkTheme, {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': `${darkTheme.beta}`,
        'editor.lineHighlightBackground': `${darkTheme.editorLine}`,
        'editorSuggestWidget.foreground': `${lightTheme.gamma}`
      }
    });

    monaco.editor.defineTheme(OPTIONS.themes.lightTheme, {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': `${lightTheme.beta}`,
        'editor.lineHighlightBackground': `${lightTheme.editorLine}`,
        'editorLineNumber.foreground': `${lightTheme.editorLineNum}`,
        'editorSuggestWidget.background': `${lightTheme.gamma}`,
        'editorCursor.foreground': `${lightTheme.alpha}`
      }
    });
  }

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    monacoRef.current = editor;
  }

  return (
    <div className="editor">
      <Editor
        className="editor__content"
        language={language}
        theme={getThemeStorage() === OPTIONS.themes.light ? OPTIONS.themes.lightTheme : OPTIONS.themes.darkTheme}
        options={{
          minimap: {
            enabled: false
          },
          tabSize: 2,
          wordWrap: 'on',
          wordWrapColumn: 80
        }}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
      />
    </div>
  );
}
