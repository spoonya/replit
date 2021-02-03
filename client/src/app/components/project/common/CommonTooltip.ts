import { withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Tooltip from '@material-ui/core/Tooltip';

const GrayTooltip = withStyles((theme: Theme) => ({
  arrow: {
    color: '#606060'
  },
  tooltip: {
    backgroundColor: '#606060',
    color: '#fff',
    boxShadow: theme.shadows[5],
    fontSize: 12
  }
}))(Tooltip);

export default GrayTooltip;
