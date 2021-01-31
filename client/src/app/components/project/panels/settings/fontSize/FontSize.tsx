import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { OPTIONS } from '~/app/constants/options.constant';
import { getStorage, setStorage } from '~/app/helpers/options.helper';
import { editorRef } from '../../../editor/CodeEditor';

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

export default function FontSize() {
  const { t } = useTranslation();
  const classes = useStyles();
  const localFontSize = +getStorage(OPTIONS.settings.fontSize.storageName) || OPTIONS.settings.fontSize.defaultValue;
  const [fontSize, setFontSize] = React.useState(localFontSize);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFontSize(event.target.value as number);
    editorRef.current.updateOptions({ fontSize: `${event.target.value}` });
    setStorage(OPTIONS.settings.fontSize.storageName, event.target.value.toString());
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink>{t('settings.editor.fontSize.title')}</InputLabel>
        <Select value={fontSize} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem className={classes.common} value={OPTIONS.settings.fontSize.values.small}>
            {t('settings.editor.fontSize.variants.small')}
          </MenuItem>
          <MenuItem className={classes.common} value={OPTIONS.settings.fontSize.values.normal}>
            {t('settings.editor.fontSize.variants.normal')}
          </MenuItem>
          <MenuItem className={classes.common} value={OPTIONS.settings.fontSize.values.large}>
            {t('settings.editor.fontSize.variants.large')}
          </MenuItem>
          <MenuItem className={classes.common} value={OPTIONS.settings.fontSize.values.huge}>
            {t('settings.editor.fontSize.variants.huge')}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
