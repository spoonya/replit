import { Console as ConsoleFeed, Hook, Unhook } from 'console-feed';
import React, { useEffect, useState } from 'react';

export default function Console({ output }) {
  const [logs, setLogs] = useState([]);

  const onInput = () => {
    // setLogs(logs);
    // console.log(logs[logs.length - 1]);
  };

  useEffect(() => {
    onInput();
  }, [output]);

  useEffect(() => {
    Hook(window.console, (log) => setLogs((currLogs) => [...currLogs, log]), false);

    return () => Unhook(window.console);
  }, []);

  const clear = () => {
    // setLogs();
    setLogs(logs);
  };

  return (
    <div className="console-wrapper">
      <div className="console__header">
        <h4 className="console__title">Console</h4>
        <div className="console__btns">
          <button className="console__btn" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
      <div className="console__inner">
        <ConsoleFeed logs={logs} variant="dark" />
      </div>
    </div>
  );
}
