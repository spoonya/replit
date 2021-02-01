import React, { useEffect, useState } from 'react';
import { SplitPane } from 'react-multi-split-pane';
import Console from './console/Console';
import CodeEditor from './editor/CodeEditor';
import { Buttons } from './editor/test/buttons';
import Header from './header/Header';
import Iframe from './iframe/Iframe';
import Info from './info/Info';
import Panels from './panels/Panels';
import Sidebar from './sidebar/Sidebar';

export default function Project() {
  const [html, setHtml] = useState(Buttons.html);
  const [css, setCss] = useState(Buttons.css);
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
          <SplitPane split="horizontal" defaultSizes={[65, 1, 34]} minSize={[30, 1, 31]}>
            <div className="pane-input">
              <SplitPane split="vertical" minSize={60}>
                <CodeEditor language="html" value={html} onChanged={setHtml} displayingName="html" />
                <CodeEditor language="css" value={css} onChanged={setCss} displayingName="css" />
                <CodeEditor language="javascript" value={js} onChanged={setJs} displayingName="js" />
              </SplitPane>
            </div>
            <Iframe srcDoc={srcDoc} />
            <Console output={js} />
          </SplitPane>
        </div>
      </div>
      <Info />
    </>
  );
}
