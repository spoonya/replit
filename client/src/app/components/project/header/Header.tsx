import React from 'react';
import Logo from '../../../layout/Logo';

export default function Header() {
  return (
    <header className="header header--project">
      <div className="container container--wide">
        <div className="header__inner">
          <div className="header__left">
            <Logo withHomeLink={true} />
            <div className="header__info">
              <h3 className="header__title">Project Name</h3>
            </div>
          </div>
          <div className="header__right"></div>
        </div>
      </div>
    </header>
  );
}
