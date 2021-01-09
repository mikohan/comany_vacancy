import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';

import { useStyles } from '../styles/AboutPageTestStylesl';
import { Paper, Box, Typography, Button } from '@material-ui/core';
import { translateText } from '../translate/texts';
import { ThemeContext } from '../context/ThemeContext';

function AboutPageTest() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  const { language } = context;

  const { myName, name, mainHeading, learnMore } = translateText[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
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
    </motion.div>
  );
}

export default AboutPageTest;
