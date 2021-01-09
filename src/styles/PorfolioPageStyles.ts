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
    paperPadding: {
      padding: theme.spacing(5),
      width: '100%',
    },
    playerWrapper: {
      width: 'auto',
      height: 'auto',
    },
    reactPlayer: {
      paddingTop: '56.25',
      position: 'relative',
    },
    'reactPlayer > div': {
      position: 'absolute',
    },
  };
});
