import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    reactPlayerDiv: {
      widht: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    boxWide: {
      padding: theme.spacing(5),
    },
    videoItem: {
      [theme.breakpoints.up('xs')]: {
        height: '250px',
      },
      [theme.breakpoints.up('sm')]: {
        height: '500px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '700px',
      },
    },
  };
});
