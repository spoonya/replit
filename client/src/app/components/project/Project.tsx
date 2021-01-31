import React, { useEffect, useState } from 'react';
import { SplitPane } from 'react-multi-split-pane';
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
          <SplitPane split="horizontal">
            <div className="pane-input">
              <SplitPane split="vertical">
                <CodeEditor language="html" value={html} onChanged={setHtml} displayingName="html" />
                <CodeEditor language="css" value={css} onChanged={setCss} displayingName="css" />
                <CodeEditor language="javascript" value={js} onChanged={setJs} displayingName="js" />
              </SplitPane>
            </div>
            <div className="pane-output">
              <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts allow-modals" frameBorder="0" />
            </div>
          </SplitPane>
        </div>

        {/* <Console /> */}
      </div>
      <Info />
    </>
  );
}
