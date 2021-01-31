import React from 'react';
import OpenSettings from './OpenSettings';
import ShareLink from './ShareLink';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ShareLink />
      <OpenSettings />
    </div>
  );
}
