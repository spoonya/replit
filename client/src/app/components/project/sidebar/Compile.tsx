import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';
import { useTranslation } from 'react-i18next';
import GrayTooltip from '../common/LightToolTip';

export default function Compile() {
  const { t } = useTranslation();

  return (
    <div className="sidebar__item">
      <button className="sidebar__btn">
        <GrayTooltip title={t('tooltips.sidebar.compile')} arrow>
          <PlayArrowIcon style={{ fontSize: 37 }} />
        </GrayTooltip>
      </button>
    </div>
  );
}
