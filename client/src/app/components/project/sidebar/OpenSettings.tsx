import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';

export default function OpenSettings() {
  return (
    <div className="sidebar__item">
      <button className="sidebar__btn" title="Settings">
        <SettingsIcon style={{ fontSize: 30 }} />
      </button>
    </div>
  );
}
