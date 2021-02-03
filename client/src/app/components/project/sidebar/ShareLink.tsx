import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ShareIcon from '@material-ui/icons/Share';
import React from 'react';
import { useTranslation } from 'react-i18next';
import GrayTooltip from '../common/CommonTooltip';
import LinkField from './LinkField';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

const useStyles = makeStyles({
  copyButton: {
    fontSize: '1.7rem'
  }
});

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h4">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function ShareLink() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.toString());
  };

  const classes = useStyles();

  return (
    <div className="sidebar__item">
      <button className="sidebar__btn" onClick={handleClickOpen}>
        <GrayTooltip title={t('tooltips.sidebar.share')} arrow>
          <ShareIcon style={{ fontSize: 30 }} />
        </GrayTooltip>
      </button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {t('sidebar.share.title')}
        </DialogTitle>
        <DialogContent dividers>
          <LinkField />
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.copyButton}
            autoFocus
            onClick={() => {
              copyUrl();
              handleClose();
            }}
            color="primary"
          >
            {t('sidebar.share.btn')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
