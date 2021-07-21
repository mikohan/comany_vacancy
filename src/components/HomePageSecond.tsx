import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { Link } from 'react-router-dom';

import { useStyles } from '../styles/AboutPageTestStylesl';
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Hidden,
  Divider,
} from '@material-ui/core';
import { translateText } from '../translate/texts';
import { ThemeContext } from '../context/ThemeContext';
import HomePageSecondRow from './HomePageSecondRow';
import { HashLink } from 'react-router-hash-link';
import CVComponent from './CV/CVComponent';
import Contacts from './Contacts';

function AboutPageTest() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  const { language } = context;

  const {
    myName,
    name,
    mainHeading,
    learnMore,
    betweenRow,
    secondRowText,
    CVHeader,
    CVDownload,
  } = translateText[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className={classes.wrapper}>
            <Box className={classes.mainHeader}>
              <Typography className={classes.myName} variant="h4">
                {myName}
              </Typography>
              <Typography
                className={classes.name}
                style={{ marginBottom: '30px' }}
                variant="h3"
              >
                {name}
              </Typography>
              <Typography className={classes.myName} variant="h4">
                {mainHeading}
              </Typography>
              <HashLink to="#video">
                <Button className={classes.mainButtons} variant="outlined">
                  {learnMore}...
                </Button>
              </HashLink>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box id="video" className={classes.betweenRow}>
            <Typography className={classes.betweenRowFont} variant="h4">
              {betweenRow}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <HomePageSecondRow secondRowText={secondRowText} />
        </Grid>
        <Hidden mdDown>
          <Grid item xs={12}>
            <Contacts language={language} />
          </Grid>
        </Hidden>
      </Grid>
    </motion.div>
  );
}

export default AboutPageTest;
