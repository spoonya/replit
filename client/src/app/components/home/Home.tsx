import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';
import GetStarted from './getStarted/GetStarted';
import Header from './Header';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="intro">
        <div className="container">
          <div className="intro__content">
            <div className="intro__inner">
              <h2 className="intro__title">
                <span>{t('slogan.code')}</span>
                <span>{t('slogan.create')}</span>
                <span>{t('slogan.collaborate')}</span>
              </h2>
              <img className="intro__img" src={require('../../../assets/img/intro.png')} alt="Coding" />
            </div>
            <h3 className="intro__subtitle">{t('descrip')}</h3>
          </div>
          <GetStarted />
        </div>
      </div>
      <Footer />
    </>
  );
}
