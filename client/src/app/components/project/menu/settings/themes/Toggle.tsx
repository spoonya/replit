import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import React from 'react';
import { OPTIONS } from '~/app/constants/options.constant';
import { darkTheme } from '~/app/constants/theme.constant';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const BlueSwitch = withStyles({
  switchBase: {
    color: `${darkTheme.psi}`,
    '&$checked': {
      color: `${darkTheme.psi}`
    },
    '&$checked + $track': {
      backgroundColor: `${darkTheme.psi}`
    }
  },
  checked: {},
  track: {}
})(Switch);

export default function Toggle({ theme, toggleTheme }: any) {
  let isChecked = false;

  if (theme === OPTIONS.themes.light) {
    isChecked = true;
  }

  const [state, setState] = React.useState({
    checkedA: isChecked,
    checkedB: isChecked,
    checkedC: isChecked
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    toggleTheme();
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<BlueSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Light theme"
      />
    </FormGroup>
  );
}
