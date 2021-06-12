import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  year: {
      position: 'fixed',
      top: '6%',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '3.8rem',
      color: '#c5af11',
  },
  chartYearV: {
    display: 'block !important',
  },
  chartYearH: {
    display: 'none !important',
  },
  [theme.breakpoints.down('sm')]: {
    year: {
      top: '8%', 
    },
    chartYearV: {
      display: 'none !important',
    },
    chartYearH: {
      marginTop: '30%',
      display: 'block !important',
    },
  }
}));