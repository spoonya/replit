import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import { useTranslation } from 'react-i18next';
import GrayTooltip from '../common/LightToolTip';

export default function OpenSettings() {
  const { t } = useTranslation();

  return (
    <div className="sidebar__item">
      <button className="sidebar__btn">
        <GrayTooltip title={t('tooltips.sidebar.settings')} arrow>
          <SettingsIcon style={{ fontSize: 30 }} />
        </GrayTooltip>
      </button>
    </div>
  );
}
