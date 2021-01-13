import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <address className="footer__info">
          &copy; 2021 Code.it by
          <a className="footer__link" rel="noopener noreferrer" href="https://github.com/spoonya" target="_blank">
            spoonya
          </a>
          ,
          <a className="footer__link" rel="noopener noreferrer" href="https://github.com/ortophius" target="_blank">
            ortophius
          </a>
          for
          <a href="https://rs.school/js/" rel="noopener noreferrer" target="_blank">
            <img className="footer__img" src={require('../../../assets/img/rss.png')} alt="The Rolling Scopes School" />
          </a>
        </address>
      </div>
    </footer>
  );
}
