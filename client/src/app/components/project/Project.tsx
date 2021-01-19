import React from 'react';
import CodeEditor from './CodeEditor';
import Console from './Console';
import Header from './Header';
import Options from './options/Options';
import Sidebar from './sidebar/Sidebar';

export default function Project() {
  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <CodeEditor language="javascript" />
        <Console />
      </div>
      <Options />
    </>
  );
}
