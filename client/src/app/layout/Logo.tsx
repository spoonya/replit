import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ withHomeLink = false }) {
  if (withHomeLink) {
    return (
      <>
        <Link to="/">{LogoHtml()}</Link>
      </>
    );
  }

  return <>{LogoHtml()}</>;
}

function LogoHtml() {
  return (
    <h1 className="header__logo">
      &lt;Code/<span>it</span>&gt;
    </h1>
  );
}
