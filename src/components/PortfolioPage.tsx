import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import ReactPlayer from 'react-player';
import { Grid, Paper } from '@material-ui/core';
import { useStyles } from '../styles/HomePageStyles';

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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.videoItem}>
            <ReactPlayer
              url="https://youtu.be/IHpfcNRXUcU"
              controls
              width="100%"
              height="100%"
            />
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default BackEndPage;
