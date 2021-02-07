import SettingsIcon from '@material-ui/icons/Settings';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import GrayTooltip from '../common/CommonTooltip';
import { setVisibleSettingsRef } from '../panels/settings/Settings';

export let visibleSettingsRef: React.MutableRefObject<any> | null = null;

export default function OpenSettings() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const firstRender = useRef(true);

  visibleSettingsRef = useRef(visible);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setVisibleSettingsRef.current(visible);
  }, [visible]);

  return (
    <div className="sidebar__item">
      <button className="sidebar__btn" onClick={() => setVisible(!visible)}>
        <GrayTooltip title={t('tooltips.sidebar.settings')} arrow>
          <SettingsIcon style={{ fontSize: 30 }} />
        </GrayTooltip>
      </button>
    </div>
  );
}
