import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './home/Footer';
import Header from './home/Header';

export default function Page404() {
  return (
    <>
      <Header withHomeLink={true} />
      <div className="not-found">
        <h2 className="not-found__title">
          <span>404</span>Page Not Found
        </h2>
        <Link to="/">
          <span className="not-found__home">Go Home</span>
        </Link>
      </div>
      <Footer />
    </>
  );
}
