import React from 'react';
import Footer from './Footer';
import GetStarted from './GetStarted';
import Header from './Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="intro">
        <div className="container">
          <div className="intro__content">
            <div className="intro__inner">
              <h2 className="intro__title">
                <span>Code</span>
                <span>Create</span>
                <span>Collaborate</span>
              </h2>
              <img className="intro__img" src={require('../../../assets/img/intro.png')} alt="Coding" />
            </div>
            <h3 className="intro__subtitle">Online Realtime Collaborative Editor and Compiler</h3>
          </div>
          <GetStarted />
        </div>
      </div>
      <Footer />
    </>
  );
}
