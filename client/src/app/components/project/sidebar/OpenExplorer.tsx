import DescriptionIcon from '@material-ui/icons/Description';
import React from 'react';
import localization from '~/app/localization/localization';
import GrayTooltip from '../common/LightToolTip';

export default function OpenExplorer() {
  return (
    <div className="sidebar__item">
      <button className="sidebar__btn">
        <GrayTooltip title={localization.tooltips.sidebar.explorer} arrow>
          <DescriptionIcon style={{ fontSize: 30 }} />
        </GrayTooltip>
      </button>
    </div>
  );
}
