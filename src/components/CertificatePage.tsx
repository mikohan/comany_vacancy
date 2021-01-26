import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { frontend } from '../translate/frontend';
import {
  Grid,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import '../tmp.scss';
import PortfolioSingle from './PortfolioSingle';
import { translateText } from '../translate/texts';
import { ThemeContext } from '../context/ThemeContext';
import { HashLink } from 'react-router-hash-link';
import ScrollToTop from 'react-scroll-up';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import { useStyles } from '../styles/PorfolioPageStyles';
import VideoPageComponent from './VideoPageComponent';
import CertificateComponent from './CertificateComponent';

function CertPage() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  let { language } = context;
  const { portfolio, frontEndLinks } = translateText[language];
  const { pageHeader, header, text } = frontend[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container spacing={3}>
        <Grid item container xs={12} justify="space-between" spacing={1}>
          <Grid item container xs={12}>
            <CertificateComponent
              image={require('../assets/certs/SSR_React.jpg')}
            />
          </Grid>
          <Grid item container xs={12}>
            <CertificateComponent
              image={require('../assets/certs/ReactFull.jpg')}
            />
          </Grid>
          <Grid item container xs={12}>
            <CertificateComponent
              image={require('../assets/certs/DRFVueJS.jpg')}
            />
          </Grid>
          <Grid item xs={12}>
            <ScrollToTop
              style={{
                bottom: 100,
                right: 100,
              }}
              showUnder={260}
            >
              <IconButton color="primary" aria-label="add to shopping cart">
                <PresentToAllIcon className={classes.scrollUp} />
              </IconButton>
            </ScrollToTop>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default CertPage;
