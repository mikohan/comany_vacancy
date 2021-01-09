import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import ReactPlayer from 'react-player';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import { useStyles } from '../styles/PorfolioPageStyles';
import Image from 'material-ui-image';

function BackEndPage() {
  const classes = useStyles();
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <h1>Portfolio Page</h1>
      <Grid container spacing={5}>
        <Grid item container xs={12}>
          <Paper className={classes.paperPadding} elevation={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4">
                  Venezo Project E-commerce project (Python, Django)
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ReactPlayer
                  url="https://youtu.be/IHpfcNRXUcU"
                  controls
                  light={require('../assets/me1.jpg')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Image
                  onClick={() => console.log('onClick')}
                  src={require('../assets/me1.jpg')}
                  aspectRatio={3 / 2}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={6}>
            <Image
              onClick={() => console.log('onClick')}
              src={require('../assets/me1.jpg')}
              aspectRatio={3 / 2}
            />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default BackEndPage;
