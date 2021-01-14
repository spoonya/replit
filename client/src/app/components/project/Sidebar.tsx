import DescriptionIcon from '@material-ui/icons/Description';
import ShareIcon from '@material-ui/icons/Share';
import React from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <button className="sidebar__btn" title="Explorer">
        <DescriptionIcon style={{ fontSize: 30 }} />
      </button>
      <button className="sidebar__btn" title="Share Link">
        <ShareIcon style={{ fontSize: 30 }} />
      </button>
    </div>
  );
}
