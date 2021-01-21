import Editor, { Monaco } from '@monaco-editor/react';
import React, { useRef } from 'react';
import { darkTheme, lightTheme } from '~/styles/styledComponents/theme';

export default function CodeEditor(props: any) {
  const { language } = props;
  const monacoRef = useRef(null);

  function handleEditorWillMount(monaco: Monaco) {
    monaco.editor.defineTheme('darkTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': `${darkTheme.colorBeta}`,
        'editor.lineHighlightBackground': `${darkTheme.colorEditorLine}`,
        'editorSuggestWidget.foreground': `${lightTheme.colorGamma}`
      }
    });

    monaco.editor.defineTheme('lightTheme', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': `${lightTheme.colorBeta}`,
        'editor.lineHighlightBackground': `${lightTheme.colorEditorLine}`,
        'editorLineNumber.foreground': `${lightTheme.colorEditorLineNum}`,
        'editorSuggestWidget.background': `${lightTheme.colorGamma}`
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
        theme={window.localStorage.getItem('codeit-theme') === 'light' ? 'lightTheme' : 'darkTheme'}
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
