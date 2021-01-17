import GroupIcon from '@material-ui/icons/Group';
import React from 'react';

export default function Options() {
  return (
    <div className="options">
      <div className="container container--wide">
        <div className="options__inner">
          <div className="options__left">
            <button className="options__item">Spaces: 2</button>
            <button className="options__item">Font Size: 14px</button>
          </div>
          <div className="options__right">
            <p className="options__item">Ln 1, Col 1</p>
            <button className="options__item">
              <GroupIcon className="options__icon" style={{ fontSize: 25 }} />
              <span>1</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
