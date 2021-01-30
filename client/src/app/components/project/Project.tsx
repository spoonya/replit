import React from 'react';
// import Console from './console/Console';
import CodeEditor from './editor/CodeEditor';
import Header from './header/Header';
import Info from './info/Info';
import Panels from './panels/Panels';
import Sidebar from './sidebar/Sidebar';

export default function Project() {
  const placeholders = {
    html: `<!DOCTYPE html>`,
    css: `a {color: #202020}`,
    js: `function hello() {alert('Hello world!');}`
  };

  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <Panels />
        <div className="content__inner">
          <div className="pane-input">
            <CodeEditor language="html" value={placeholders.html} />
            <CodeEditor language="css" value={placeholders.css} />
            <CodeEditor language="javascript" value={placeholders.js} />
          </div>
          <div className="pane-output">
            <iframe title="output" sandbox="allow-scripts" width="100%" height="100%" frameBorder="0"></iframe>
          </div>
        </div>

        {/* <ResizePanel direction="w" style={{ width: '35%' }}>
          <Console />
        </ResizePanel> */}
      </div>
      <Info />
    </>
  );
}
