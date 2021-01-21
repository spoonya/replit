import React from 'react';
import Compile from './Compile';
import OpenExplorer from './OpenExplorer';
import ShareLink from './ShareLink';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Compile />
      <OpenExplorer />
      <ShareLink />
    </div>
  );
}
