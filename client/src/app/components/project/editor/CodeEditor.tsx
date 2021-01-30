import Editor, { Monaco } from '@monaco-editor/react';
import React, { useRef } from 'react';
import { OPTIONS } from '~/app/constants/options.constant';
import { darkTheme, lightTheme } from '~/app/constants/theme.constant';
import { getStorage } from '~/app/helpers/options.helper';
import { infoPosition } from '../info/LineColumn';

export let monacoRef: React.MutableRefObject<any> | null = null;

interface Props {
  language: string;
  value: string;
}

export default function CodeEditor(props: Props) {
  const { language, value } = props;

  monacoRef = useRef(null);

  function handleEditorWillMount(monaco: Monaco) {
    monaco.editor.defineTheme(OPTIONS.themes.darkTheme, {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': `${darkTheme.beta}`,
        'editor.lineHighlightBackground': `${darkTheme.editorLine}`,
        'dropdown.background': `${darkTheme.gamma}`,
        'editorWidget.background': `${darkTheme.gamma}`
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
        'editorCursor.foreground': `${lightTheme.alpha}`,
        'dropdown.background': `${lightTheme.gamma}`,
        'editorWidget.background': `${lightTheme.gamma}`
      }
    });
  }

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    monacoRef.current = editor;

    editor.onDidChangeCursorPosition(() => {
      const cursorCoords = editor.getPosition();
      infoPosition.line.current.innerText = cursorCoords.lineNumber;
      infoPosition.col.current.innerText = cursorCoords.column;
    });
  }

  return (
    <div className="editor">
      <div className="editor__header">
        <h3 className="editor__title">{language}</h3>
      </div>
      <Editor
        className="editor__content"
        language={language}
        value={value}
        theme={
          getStorage(OPTIONS.themes.storageName) === OPTIONS.themes.light
            ? OPTIONS.themes.lightTheme
            : OPTIONS.themes.darkTheme
        }
        options={{
          minimap: {
            enabled: false
          },
          tabSize: +getStorage(OPTIONS.settings.indentSize.storageName) || OPTIONS.settings.indentSize.defaultValue,
          fontSize: +getStorage(OPTIONS.settings.fontSize.storageName) || OPTIONS.settings.fontSize.defaultValue,
          wordWrap: 'on',
          wordWrapColumn: 80
        }}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
      />
    </div>
  );
}
