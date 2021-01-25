import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import localization from '~/app/localization/localization';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    common: {
      fontSize: '1.8rem'
    }
  })
);

export default function ProjectLangsList() {
  const classes = useStyles();
  const [lang, setLang] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.common}>{localization.startDialog.language}</InputLabel>
        <Select className={classes.common} value={lang} onChange={handleChange}>
          <MenuItem className={classes.common} value={'JavaScript'}>
            JavaScript
          </MenuItem>
          <MenuItem className={classes.common} value={'Python'}>
            Python
          </MenuItem>
          <MenuItem className={classes.common} value={'Java'}>
            Java
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
