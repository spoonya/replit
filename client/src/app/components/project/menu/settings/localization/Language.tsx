import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { OPTIONS } from '~/app/constants/options.constant';
import { getStorage, setStorage } from '~/app/helpers/options.helper';
import localization from '~/app/localization/localization';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 144
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
  const classes = useStyles();
  const localLanguage = getStorage(OPTIONS.settings.language.storageName) || OPTIONS.settings.language.defaultValue;
  const [language, setLanguage] = React.useState(localLanguage);
  localization.setLanguage(language);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguage(event.target.value as string);
    setStorage(OPTIONS.settings.language.storageName, event.target.value.toString());
    window.location.reload();
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink>{localization.settings.general.lang}</InputLabel>
        <Select value={language} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem className={classes.common} value={OPTIONS.settings.language.values.en}>
            English
          </MenuItem>
          <MenuItem className={classes.common} value={OPTIONS.settings.language.values.ru}>
            Русский
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
