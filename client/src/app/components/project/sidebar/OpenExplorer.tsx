import DescriptionIcon from '@material-ui/icons/Description';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import GrayTooltip from '../common/CommonTooltip';
import { setVisibleExplorerRef } from '../panels/explorer/Explorer';
import { setVisibleSettingsRef } from '../panels/settings/Settings';
import { visibleSettingsRef } from './OpenSettings';

export let visibleExplorerRef: React.MutableRefObject<any> | null = null;

export default function OpenExplorer() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const firstRender = useRef(true);

  visibleExplorerRef = useRef(visible);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (visibleSettingsRef.current) {
      setVisibleSettingsRef.current(false);
      setVisibleExplorerRef.current(true);
    } else if (visibleExplorerRef.current) {
      setVisibleExplorerRef.current(false);
    } else {
      setVisibleExplorerRef.current(true);
    }
  }, [visible]);

  return (
    <div className="sidebar__item">
      <button className="sidebar__btn" onClick={() => setVisible(!visible)}>
        <GrayTooltip title={t('tooltips.sidebar.explorer')} arrow>
          <DescriptionIcon style={{ fontSize: 30 }} />
        </GrayTooltip>
      </button>
    </div>
  );
}
