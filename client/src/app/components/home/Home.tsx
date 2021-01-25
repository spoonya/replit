import React from 'react';
import localization from '~/app/localization/localization';
import Footer from './Footer';
import GetStarted from './getStarted/GetStarted';
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
                <span>{localization.slogan.code}</span>
                <span>{localization.slogan.create}</span>
                <span>{localization.slogan.collaborate}</span>
              </h2>
              <img className="intro__img" src={require('../../../assets/img/intro.png')} alt="Coding" />
            </div>
            <h3 className="intro__subtitle">{localization.descrip}</h3>
          </div>
          <GetStarted />
        </div>
      </div>
      <Footer />
    </>
  );
}
