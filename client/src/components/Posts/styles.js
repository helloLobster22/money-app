import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  postsLayout: {
    overflowY: "auto", 
    overflowX: "hidden", 
    maxHeight: "40vh"
  },
  [theme.breakpoints.down('sm')]: {
    postsLayout: {
      maxHeight: "20vh",
      overflowX: "auto", 
    }
  }
}));