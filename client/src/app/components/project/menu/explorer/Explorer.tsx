import FolderIcon from '@material-ui/icons/Folder';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import React from 'react';
import { useTranslation } from 'react-i18next';
import GrayTooltip from '../../common/LightToolTip';

export default function Explorer() {
  const { t } = useTranslation();

  return (
    <div className="explorer">
      <div className="explorer__header">
        <div className="explorer__inner">
          <h3 className="explorer__title"> {t('explorer.title')}</h3>
          <div className="explorer__buttons">
            <button className="explorer__btn">
              <GrayTooltip title={t('tooltips.menu.explorer.newFile')} arrow>
                <InsertDriveFileIcon style={{ fontSize: 25 }} />
              </GrayTooltip>
            </button>
            <button className="explorer__btn">
              <GrayTooltip title={t('tooltips.menu.explorer.newFolder')} arrow>
                <FolderIcon style={{ fontSize: 25 }} />
              </GrayTooltip>
            </button>
          </div>
        </div>
      </div>
      <div className="explorer__content">
        <ul className="explorer__list"></ul>
      </div>
    </div>
  );
}
