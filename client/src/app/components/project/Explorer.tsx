import FolderIcon from '@material-ui/icons/Folder';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import React from 'react';

export default function Explorer() {
  return (
    <div className="explorer">
      <div className="explorer__header">
        <div className="explorer__inner">
          <h3 className="explorer__title">File Explorer</h3>
          <div className="explorer__buttons">
            <button className="explorer__btn" title="New File">
              <InsertDriveFileIcon style={{ fontSize: 25 }} />
            </button>
            <button className="explorer__btn" title="New Folder">
              <FolderIcon style={{ fontSize: 25 }} />
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
