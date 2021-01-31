import React, { RefObject } from 'react';

interface Position {
  readonly line: RefObject<HTMLSpanElement>;
  readonly col: RefObject<HTMLSpanElement>;
}

export const infoPosition: Position = {
  line: React.createRef(),
  col: React.createRef()
};

export default function LineColumn() {
  return (
    <p className="info__item">
      Ln <span ref={infoPosition.line}>1</span>, Col <span ref={infoPosition.col}>1</span>
    </p>
  );
}
