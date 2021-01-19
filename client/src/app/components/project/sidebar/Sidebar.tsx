import React from 'react';
import Compile from './Compile';
import ShareLink from './ShareLink';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Compile />
      <ShareLink />
    </div>
  );
}
