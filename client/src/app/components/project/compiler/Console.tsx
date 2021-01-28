import React from 'react';
import Terminal from 'react-console-emulator';

export default function Console() {
  const commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: function (...args: []) {
        return `${args.join(' ')}`;
      }
    }
  };

  const container = {
    borderRadius: 0,
    backgroundColor: 'transparent'
  };

  const content = {
    color: 'none',
    fontFamily: 'inherit',
    padding: '10px'
  };

  const label = {
    color: 'none'
  };

  const inputText = {
    color: 'none',
    fontFamily: 'inherit'
  };

  return (
    <div className="console-wrapper">
      <Terminal
        style={container}
        contentStyle={content}
        promptLabelStyle={label}
        inputTextStyle={inputText}
        className="console"
        welcomeMessage={'Welcome to the club, buddy! This is default terminal.'}
        commands={commands}
        autoFocus
      />
    </div>
  );
}
