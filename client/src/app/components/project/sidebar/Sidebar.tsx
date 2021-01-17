import DescriptionIcon from '@material-ui/icons/Description';
import React from 'react';
import ShareLink from './ShareLink';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <button className="sidebar__btn" title="Explorer">
        <DescriptionIcon style={{ fontSize: 30 }} />
      </button>
      <ShareLink />
    </div>
  );
}
