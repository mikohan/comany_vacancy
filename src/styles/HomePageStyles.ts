import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    reactPlayerDiv: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    shortVideo: {
      width: '100%',
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
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
    videoSideText: {
      fontSize: '1.2rem',
    },
  };
});
