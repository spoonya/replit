import { makeStyles, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PROJECT } from '~/app/constants/project.constant';
import { setStorage } from '~/app/helpers/options.helper';

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
  createButton: {
    fontSize: '1.7rem'
  }
});

const textFieldStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: '1.8rem',
      padding: theme.spacing(1),
      width: '100%'
    }
  })
);

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

export default function GetStarted() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(PROJECT.title.defaultVal);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    PROJECT.title.value = e.target.value;
  };

  const handleStart = () => {
    window.location.href = '/project';
    setStorage(PROJECT.title.storage, PROJECT.title.value);
  };

  const classes = useStyles();
  const textFieldClasses = textFieldStyles();

  return (
    <div>
      <button className="intro__start" onClick={handleClickOpen}>
        {t('startDialog.start')}
      </button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {t('startDialog.getStarted')}
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            InputProps={{ style: { fontSize: '1.8rem' } }}
            InputLabelProps={{ style: { fontSize: '1.8rem', padding: '8px' } }}
            className={textFieldClasses.root}
            label={t('startDialog.title')}
            value={title}
            onInput={handleTitleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button className={classes.createButton} autoFocus onClick={handleStart} color="primary">
            {t('startDialog.create')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
