import DescriptionIcon from '@material-ui/icons/Description';
import React from 'react';

export default function OpenExplorer() {
  return (
    <div className="sidebar__item">
      <button className="sidebar__btn" title="Explorer">
        <DescriptionIcon style={{ fontSize: 30 }} />
      </button>
    </div>
  );
}
