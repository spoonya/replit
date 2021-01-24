import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { OPTIONS } from '~/app/constants/options.constant';
import { getStorage, setStorage } from '~/app/helpers/options.helper';
import { monacoRef } from '../../../editor/CodeEditor';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
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
  const classes = useStyles();
  const localFontSize = +getStorage(OPTIONS.settings.fontSize.storageName) || OPTIONS.settings.fontSize.defaultValue;
  const [fontSize, setFontSize] = React.useState(localFontSize);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFontSize(event.target.value as number);
    monacoRef.current.updateOptions({ fontSize: `${event.target.value}` });
    setStorage(OPTIONS.settings.fontSize.storageName, event.target.value.toString());
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink>Font size</InputLabel>
        <Select value={fontSize} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem className={classes.common} value={OPTIONS.settings.fontSize.values.small}>
            Small
          </MenuItem>
          <MenuItem className={classes.common} value={OPTIONS.settings.fontSize.values.normal}>
            Normal
          </MenuItem>
          <MenuItem className={classes.common} value={OPTIONS.settings.fontSize.values.large}>
            Large
          </MenuItem>
          <MenuItem className={classes.common} value={OPTIONS.settings.fontSize.values.huge}>
            Huge
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
