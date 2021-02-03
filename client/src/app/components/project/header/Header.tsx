import React from 'react';
import { PROJECT } from '~/app/constants/project.constant';
import { getStorage } from '~/app/helpers/options.helper';
import Logo from '../../../layout/Logo';

export default function Header() {
  const value = getStorage(PROJECT.title.storage);

  return (
    <header className="header header--project">
      <div className="container container--wide">
        <div className="header__inner">
          <div className="header__left">
            <Logo withHomeLink={true} />
            <div className="header__info">
              <h3 className="header__title">{value || PROJECT.title.defaultVal}</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
