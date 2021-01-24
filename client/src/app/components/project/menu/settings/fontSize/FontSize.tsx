import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
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
  const [fontSize, setFontSize] = React.useState(14);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFontSize(event.target.value as number);
    monacoRef.current.updateOptions({ fontSize: `${event.target.value}` });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink>Font size</InputLabel>
        <Select value={fontSize} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem className={classes.common} value={10}>
            Small
          </MenuItem>
          <MenuItem className={classes.common} value={14}>
            Normal
          </MenuItem>
          <MenuItem className={classes.common} value={18}>
            Large
          </MenuItem>
          <MenuItem className={classes.common} value={24}>
            Huge
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
