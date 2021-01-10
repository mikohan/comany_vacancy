import { makeStyles, Theme } from '@material-ui/core/styles';

// This settings needs to move from here later on
import { drawerWidth } from '../config';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    menuItems: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    grow: {
      flexGrow: 1,
    },

    menuButtonFlag: {
      marginRight: -12,
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    languageSpan: {
      marginLeft: theme.spacing(1),
    },
    menuItemLink: {
      textDecoration: 'none',
      color: 'inherit',
      fontSize: '1.1rem', // Font size for top menu
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    drawerLink: {
      textDecoration: 'none',
      color: 'inherit',
    },
  };
});
