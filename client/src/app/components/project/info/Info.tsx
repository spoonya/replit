import React from 'react';
import LineColumn from './LineColumn';

export default function Info() {
  return (
    <div className="info">
      <div className="container container--wide">
        <div className="info__inner">
          <div className="info__left">{/* <ConsoleBtn /> */}</div>
          <div className="info__right">
            <LineColumn />
          </div>
        </div>
      </div>
    </div>
  );
}
