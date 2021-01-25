import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';
import localization from '~/app/localization/localization';
import GrayTooltip from '../common/LightToolTip';

export default function Compile() {
  return (
    <div className="sidebar__item">
      <button className="sidebar__btn">
        <GrayTooltip title={localization.tooltips.sidebar.compile} arrow>
          <PlayArrowIcon style={{ fontSize: 37 }} />
        </GrayTooltip>
      </button>
    </div>
  );
}
