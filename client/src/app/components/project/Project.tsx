import React, { useEffect, useState } from 'react';
import { SplitPane } from 'react-multi-split-pane';
import { PROJECT } from '~/app/constants/project.constant';
import Console from './console/Console';
import CodeEditor from './editor/CodeEditor';
import Header from './header/Header';
import Iframe from './iframe/Iframe';
import Info from './info/Info';
import Panels from './panels/Panels';
import Sidebar from './sidebar/Sidebar';
import useStorage from './useStorage';

export default function Project() {
  const [html, setHtml] = useStorage(PROJECT.html.storage, '');
  const [css, setCss] = useStorage(PROJECT.css.storageName, '');
  const [js, setJs] = useStorage(PROJECT.js.storage, '');
  const [srcDoc, setSrcDoc] = useState('');

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
          <SplitPane split="horizontal" defaultSizes={[65, 34, 1]} minSize={[30, 4, 30]}>
            <div className="pane-input">
              <SplitPane split="vertical" minSize={52}>
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
