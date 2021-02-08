import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';

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
import ShowCV from './CV/ShowCV';
import DownloadCV from './CV/DownloadCV';

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
              <Typography variant="h4">{myName}</Typography>
              <Typography style={{ marginBottom: '30px' }} variant="h3">
                {name}
              </Typography>
              <Typography variant="h4">{mainHeading}</Typography>
              <HashLink to="#video">
                <Button className={classes.mainButtons} variant="outlined">
                  {learnMore}...
                </Button>
              </HashLink>
              <DownloadCV text={CVDownload} />
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
        <Grid item container xs={12} spacing={0}>
          <HomePageSecondRow secondRowText={secondRowText} />
        </Grid>
        <Hidden mdDown>
          <Grid item xs={12}>
            <Divider />
            <Box id="video" className={classes.betweenRow}>
              <Typography className={classes.betweenRowFont} variant="h4">
                {CVHeader}
              </Typography>
            </Box>
            <Divider />
          </Grid>
          <Grid item container xs={12} spacing={0}>
            <Container maxWidth="lg">
              <ShowCV />
            </Container>
          </Grid>
        </Hidden>
      </Grid>
    </motion.div>
  );
}

export default AboutPageTest;
