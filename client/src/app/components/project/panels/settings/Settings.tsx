import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { visibleSettingsRef } from '../../sidebar/OpenSettings';
import FontSize from './fontSize/FontSize';
import IndentSize from './indentSize/IndentSize';
import Language from './localization/Language';
import ToggleTheme from './themes/ToggleTheme';

export let setVisibleSettingsRef: React.MutableRefObject<any> | null = null;

export default function Explorer() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(visibleSettingsRef.current);
  setVisibleSettingsRef = useRef(setVisible);

  useEffect(() => {
    visibleSettingsRef.current = visible;
  }, [visible]);

  return (
    <div className="settings" style={{ display: visible ? 'flex' : 'none' }}>
      <div className="settings__header">
        <div className="settings__inner">
          <h3 className="settings__title">{t('settings.title')}</h3>
        </div>
      </div>
      <div className="settings__content">
        <ul className="settings__list">
          <li className="settings__item">
            <h4 className="settings__item-title"> {t('settings.general.title')}</h4>
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
            <h4 className="settings__item-title">{t('settings.editor.title')}</h4>
            <ul className="settings__sublist">
              <li className="settings__subitem">
                <FontSize />
              </li>
              <li className="settings__subitem">
                <IndentSize />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
