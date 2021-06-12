import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
      heading: {
        color: 'rgba(255,255,255, 1)',
      },
      heading2: {
        color: 'rgba(255,255,255, 1)',
        marginBottom: '40px',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: "column-reverse" ,
        }
      }
}));