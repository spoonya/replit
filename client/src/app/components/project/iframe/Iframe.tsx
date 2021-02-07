import React from 'react';

interface IframeProps {
  srcDoc: string;
}

export default function Iframe({ srcDoc }: IframeProps) {
  return (
    <div className="pane-output">
      <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts allow-modals allow-same-origin" frameBorder="0" />
    </div>
  );
}
