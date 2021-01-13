import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/">
            <h1 className="header__logo">
              &lt;Code/<span>it</span>&gt;
            </h1>
          </Link>
          <nav className="header__nav"></nav>
        </div>
      </div>
    </header>
  );
}
