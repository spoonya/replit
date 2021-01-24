import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';

export default function Compile() {
  return (
    <div className="sidebar__item">
      <button className="sidebar__btn" title="Compile">
        <PlayArrowIcon style={{ fontSize: 37 }} />
      </button>
    </div>
  );
}
