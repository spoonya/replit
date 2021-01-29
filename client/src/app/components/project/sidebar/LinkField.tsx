import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        minWidth: '30rem'
      }
    }
  })
);

export default function BasicTextFields() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label={t('sidebar.share.label')}
        value={window.location.href}
        InputProps={{
          style: {
            fontSize: '1.8rem'
          },
          readOnly: true
        }}
        InputLabelProps={{
          style: {
            fontSize: '2rem'
          }
        }}
      />
    </form>
  );
}
