import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      fontSize: "1rem",
    },
  },
  paper: {
    backgroundColor:'rgba(255,255,255,0.5)',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '18px',
  },
  moneyInput: {
    width: '22%',
  },
  categoryInput: {
    width: '26%',
  },
  commentInput: {
    width: '28%',
  },
  buttonSubmit: {
    width: '2.7rem',
    height: '2.7rem',
    position: 'absolute',
    bottom: '-37%',
    right: '50%',
    transform: 'translateX(50%)',
    color: '#540023',
    backgroundColor: '#c5af11',
  },
  [theme.breakpoints.down('sm')]: {
    moneyInput: {
      width: '100%',
    },
    categoryInput: {
      width: '100%',
    },
    commentInput: {
      width: '100%',
    },
  },
}));