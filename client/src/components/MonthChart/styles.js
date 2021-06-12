import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    moneyWomen: {
        width: '400px',
    },
    [theme.breakpoints.down('sm')]: {
        moneyWomen: {
            width: '90vw',
        },
    }
}));