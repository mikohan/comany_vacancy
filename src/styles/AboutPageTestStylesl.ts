import { makeStyles } from '@material-ui/core/styles';
import meImageDark from '../assets/me_black2.jpg';
import meImageLight from '../assets/me_white2.jpg';
import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

export const useStyles = makeStyles((theme) => {
  const context = useContext(ThemeContext);
  const { isDarkMode } = context;
  return {
    meImage: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: 1280,
      marginTop: -30,
      marginLeft: -40,
      marginRight: -40,

      background: isDarkMode
        ? `url(${meImageDark}) no-repeat`
        : `url(${meImageLight}) no-repeat`,
      backgroundSize: 'contain',
    },
    mainHeader: {
      height: '50%',
      width: '40%',

      position: 'absolute',
      top: '350px',
      right: 100,
    },
  };
});
