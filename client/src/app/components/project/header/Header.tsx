import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../layout/Logo';

export default function Header() {
  return (
    <header className="header header--project">
      <div className="container container--wide">
        <div className="header__inner">
          <div className="header__left">
            <Link to="/">
              <Logo />
            </Link>
            <div className="header__info">
              <h3 className="header__title">Project Name</h3>
              <h4 className="header__subtitle">YoptaScript 4.1.3</h4>
            </div>
          </div>
          <div className="header__right"></div>
        </div>
      </div>
    </header>
  );
}
