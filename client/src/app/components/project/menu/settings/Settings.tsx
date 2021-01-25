import React from 'react';
import localization from '~/app/localization/localization';
import FontSize from './fontSize/FontSize';
import IndentSize from './indentSize/IndentSize';
import Language from './localization/Language';
import ToggleTheme from './themes/ToggleTheme';

export default function Explorer() {
  return (
    <div className="settings">
      <div className="settings__header">
        <div className="settings__inner">
          <h3 className="settings__title">{localization.settings.title}</h3>
        </div>
      </div>
      <div className="settings__content">
        <ul className="settings__list">
          <li className="settings__item">
            <h4 className="settings__item-title">{localization.settings.general.title}</h4>
            <ul className="settings__sublist">
              <li className="settings__subitem">
                <ToggleTheme />
              </li>
              <li className="settings__subitem">
                <Language />
              </li>
            </ul>
          </li>
          <li className="settings__item">
            <h4 className="settings__item-title">{localization.settings.editor.title}</h4>
            <ul className="settings__sublist">
              <li className="settings__subitem">
                <FontSize />
                <IndentSize />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
