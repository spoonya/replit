import React from 'react';

interface Position {
  readonly line: React.RefObject<HTMLSpanElement>;
  readonly col: React.RefObject<HTMLSpanElement>;
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
