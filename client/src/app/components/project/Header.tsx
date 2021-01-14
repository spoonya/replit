import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../layout/Logo';

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
          <div className="header__right">
            <button className="header__run">
              <PlayArrowIcon className="header__icon" style={{ fontSize: 30 }} />
              Run
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
