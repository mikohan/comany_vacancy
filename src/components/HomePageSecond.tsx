import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';

import { useStyles } from '../styles/AboutPageTestStylesl';
import { Box, Typography, Button, Grid, Paper } from '@material-ui/core';
import { translateText } from '../translate/texts';
import { ThemeContext } from '../context/ThemeContext';
import HomePageSecondRow from './HomePageSecondRow';

function AboutPageTest() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  const { language } = context;

  const { myName, name, mainHeading, learnMore, betweenRow } = translateText[
    language
  ];
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
              <Typography variant="h6">{myName}</Typography>
              <Typography style={{ marginBottom: '30px' }} variant="h3">
                {name}
              </Typography>
              <Typography variant="h4">{mainHeading}</Typography>
              <Button style={{ marginTop: '30px' }} variant="outlined">
                {learnMore}...
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.betweenRow}>
            <Typography variant="h2">Some text</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <HomePageSecondRow />
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default AboutPageTest;
