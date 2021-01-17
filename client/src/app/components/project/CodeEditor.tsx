import Editor from '@monaco-editor/react';
import React from 'react';

export default function CodeEditor(props: any) {
  const { language } = props;

  return (
    <div className="editor">
      <Editor
        className="editor__content"
        language={language}
        theme="vs-dark"
        options={{
          minimap: {
            enabled: false
          },
          wordWrap: 'on',
          wordWrapColumn: 80
        }}
      />
    </div>
  );
}
