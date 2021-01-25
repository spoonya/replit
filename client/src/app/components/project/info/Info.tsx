import GroupIcon from '@material-ui/icons/Group';
import React from 'react';

export default function Info() {
  return (
    <div className="info">
      <div className="container container--wide">
        <div className="info__inner">
          <div className="info__left"></div>
          <div className="info__right">
            <p className="info__item">
              Ln <span>1</span>, Col <span>1</span>
            </p>
            <p className="info__item">
              <GroupIcon className="info__icon" style={{ fontSize: 25 }} />
              <span>1</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
