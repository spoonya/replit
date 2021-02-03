import React from 'react';
import Logo from '../../layout/Logo';

export default function Header({ withHomeLink = false }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo withHomeLink={withHomeLink} />
        </div>
      </div>
    </header>
  );
}
