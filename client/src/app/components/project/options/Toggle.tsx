import React from 'react';

const Toggle = ({ toggleTheme }: any) => {
  return (
    <button className="options__item" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default Toggle;
