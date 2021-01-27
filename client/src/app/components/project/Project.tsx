import React from 'react';
import ResizePanel from 'react-resize-panel';
import Console from './compiler/Console';
import CodeEditor from './editor/CodeEditor';
import Header from './header/Header';
import Info from './info/Info';
import Panels from './panels/Panels';
import Sidebar from './sidebar/Sidebar';

export default function Project() {
  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <Panels />
        <CodeEditor language="javascript" />
        <ResizePanel direction="w" style={{ width: '35%' }}>
          <Console />
        </ResizePanel>
      </div>
      <Info />
    </>
  );
}
