import { makeStyles } from '@material-ui/core/styles';
import meImageDark from '../assets/me_black3.jpg';
import meImageLight from '../assets/MeSiteWhiteScaled2.jpg';
import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

export const useStyles = makeStyles((theme) => {
  const context = useContext(ThemeContext);
  const { isDarkMode } = context;
  return {
    porfolioText: {
      [theme.breakpoints.up('sm')]: {
        fontSize: '3.4rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.2rem',
      },
    },
    wrapper: {
      overflowX: 'hidden',
      height: '100vh',
      margin: '-24px',
      background: isDarkMode
        ? `url(${meImageDark}) no-repeat center center`
        : `url(${meImageLight}) no-repeat center center`,
      backgroundSize: 'cover',
    },
    mainHeader: {
      paddingTop: theme.spacing(40),
      // height: '50%',
      // width: '40%',
      // position: 'absolute',
      // top: '350px',
      // right: 100,
    },
    betweenRow: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    betweenRowFont: {
      fontSize: '2.4rem',
    },
    mainButtons: {
      marginTop: theme.spacing(5),
      marginRight: theme.spacing(1),
    },
    myDivider: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    myChip: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    fullStackDeveloper: {
      fontSize: '3rem',
      fontWeight: 300,
    },
    fontWght: {
      fontWeight: 300,
    },
  };
});
