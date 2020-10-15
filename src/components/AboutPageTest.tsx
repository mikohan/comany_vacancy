import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';

import { useStyles } from '../styles/AboutPageTestStylesl';
import { Paper, Box, Typography, Button } from '@material-ui/core';

function AboutPageTest() {
  const classes = useStyles();
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Paper className={classes.meImage}>
        <Box className={classes.mainHeader}>
          <Typography style={{ marginBottom: '30px' }} variant="h3">
            My name is Vladimir
          </Typography>
          <Typography variant="h4">
            I'm Full Stack deweloper with huge knolige of Online Marketing, and
            Experience of automatization whole ecommerce business.
          </Typography>
          <Button variant="outlined">Learn more...</Button>
        </Box>
      </Paper>
    </motion.div>
  );
}

export default AboutPageTest;
