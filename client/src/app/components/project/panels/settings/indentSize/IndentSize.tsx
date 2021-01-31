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

export default function IndentSize() {
  const { t } = useTranslation();
  const classes = useStyles();
  const localIndentSize =
    +getStorage(OPTIONS.settings.indentSize.storageName) || OPTIONS.settings.indentSize.defaultValue;
  const [indentSize, setIndentSize] = React.useState(localIndentSize);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setIndentSize(event.target.value as number);
    editorRef.current.updateOptions({ tabSize: `${event.target.value}` });
    setStorage(OPTIONS.settings.indentSize.storageName, event.target.value.toString());
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink>{t('settings.editor.indentSize.title')}</InputLabel>
        <Select value={indentSize} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem className={classes.common} value={2}>
            2
          </MenuItem>
          <MenuItem className={classes.common} value={4}>
            4
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
