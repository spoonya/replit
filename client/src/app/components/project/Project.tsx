import React, { useEffect, useState } from 'react';
// import Console from './console/Console';
import CodeEditor from './editor/CodeEditor';
import Header from './header/Header';
import Info from './info/Info';
import Panels from './panels/Panels';
import Sidebar from './sidebar/Sidebar';

export default function Project() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState(``);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 500);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <Panels />
        <div className="content__inner">
          <div className="pane-input">
            <CodeEditor language="html" value={html} onChanged={setHtml} />
            <CodeEditor language="css" value={css} onChanged={setCss} />
            <CodeEditor language="javascript" value={js} onChanged={setJs} />
          </div>
          <div className="pane-output">
            <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
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
