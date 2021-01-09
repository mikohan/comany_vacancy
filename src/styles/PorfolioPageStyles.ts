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
    textPadding: {
      paddingLeft: theme.spacing(10),
    },
    paperPadding: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
      paddingTop: theme.spacing(6),
      width: '100%',
    },
    bottomLinks: {
      padding: theme.spacing(3),
    },
  };
});
