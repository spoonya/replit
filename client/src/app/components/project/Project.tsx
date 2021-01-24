import React from 'react';
import Console from './compiler/Console';
import CodeEditor from './editor/CodeEditor';
import Header from './header/Header';
import Info from './info/Info';
import Menu from './menu/Menu';
import Sidebar from './sidebar/Sidebar';

export default function Project() {
  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <Menu />
        <CodeEditor language="javascript" />
        <Console />
      </div>
      <Info />
    </>
  );
}
