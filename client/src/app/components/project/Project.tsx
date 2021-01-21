import React from 'react';
import Console from './compiler/Console';
import CodeEditor from './editor/CodeEditor';
import Explorer from './explorer/Explorer';
import Header from './header/Header';
import Options from './options/Options';
import Sidebar from './sidebar/Sidebar';

export default function Project() {
  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <Explorer />
        <CodeEditor language="javascript" />
        <Console />
      </div>
      <Options />
    </>
  );
}
