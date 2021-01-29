import React from 'react';
import Terminal from 'react-console-emulator';

export default function Console() {
  const styles = {
    commands: {
      echo: {
        description: 'Echo a passed string.',
        usage: 'echo <string>',
        fn: function (...args: []) {
          return `${args.join(' ')}`;
        }
      }
    },

    container: {
      borderRadius: 0,
      backgroundColor: 'transparent'
    },

    content: {
      color: 'none',
      fontFamily: 'inherit',
      padding: '10px'
    },

    label: {
      color: 'none'
    },

    inputText: {
      color: 'none',
      fontFamily: 'inherit'
    }
  };

  return (
    <div className="console-wrapper">
      <Terminal
        style={styles.container}
        contentStyle={styles.content}
        promptLabelStyle={styles.label}
        inputTextStyle={styles.inputText}
        className="console"
        welcomeMessage={'Welcome to the club, buddy! This is default terminal.'}
        commands={styles.commands}
        autoFocus
      />
    </div>
  );
}
