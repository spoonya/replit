import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import localization from '~/app/localization/localization';
import GrayTooltip from '../common/LightToolTip';

export default function OpenSettings() {
  return (
    <div className="sidebar__item">
      <button className="sidebar__btn">
        <GrayTooltip title={localization.tooltips.sidebar.settings} arrow>
          <SettingsIcon style={{ fontSize: 30 }} />
        </GrayTooltip>
      </button>
    </div>
  );
}
