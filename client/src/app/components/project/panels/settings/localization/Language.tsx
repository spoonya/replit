import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { OPTIONS } from '~/app/constants/options.constant';
import { setStorage } from '~/app/helpers/options.helper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 145
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    common: {
      fontSize: '1.4rem'
    }
  })
);

export default function Language() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const classes = useStyles();
  const language = i18n.language;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    changeLanguage(value.toString());
    setStorage(OPTIONS.settings.language.storage, value.toString());
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink>{t('settings.general.lang')}</InputLabel>
        <Select value={language} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem className={classes.common} value={OPTIONS.settings.language.values.en}>
            English
          </MenuItem>
          <MenuItem className={classes.common} value={OPTIONS.settings.language.values.ru}>
            Русский
          </MenuItem>
          <MenuItem className={classes.common} value={OPTIONS.settings.language.values.uk}>
            Українська
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
