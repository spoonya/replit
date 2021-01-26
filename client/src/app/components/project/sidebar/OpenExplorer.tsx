import DescriptionIcon from '@material-ui/icons/Description';
import React from 'react';
import { useTranslation } from 'react-i18next';
import GrayTooltip from '../common/LightToolTip';

export default function OpenExplorer() {
  const { t } = useTranslation();

  return (
    <div className="sidebar__item">
      <button className="sidebar__btn">
        <GrayTooltip title={t('tooltips.sidebar.explorer')} arrow>
          <DescriptionIcon style={{ fontSize: 30 }} />
        </GrayTooltip>
      </button>
    </div>
  );
}
