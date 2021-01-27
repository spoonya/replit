import SettingsIcon from '@material-ui/icons/Settings';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import GrayTooltip from '../common/CommonTooltip';
import { setVisibleExplorerRef } from '../menu/explorer/Explorer';
import { setVisibleSettingsRef } from '../menu/settings/Settings';
import { visibleExplorerRef } from './OpenExplorer';

export let visibleSettingsRef: React.MutableRefObject<any> | null = null;

export default function OpenSettings() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  let firstRender = useRef(true);

  visibleSettingsRef = useRef(visible);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (visibleExplorerRef.current) {
      setVisibleExplorerRef.current(false);
      setVisibleSettingsRef.current(true);
    } else if (visibleSettingsRef.current) {
      setVisibleSettingsRef.current(false);
    } else {
      setVisibleSettingsRef.current(true);
    }
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
