import React from 'react';
import Console from './Console';
import Editor from './Editor';
import Explorer from './Explorer';
import Header from './Header';
import Options from './Options';
import Sidebar from './Sidebar';

export default function Project() {
  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <Explorer />
        <Editor />
        <Console />
      </div>
      <Options />
    </>
  );
}
