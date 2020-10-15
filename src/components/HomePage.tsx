import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import ReactPlayer from 'react-player';
import { useStyles } from '../styles/HomePageStyles';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';

function FrontEndPage() {
  const classes = useStyles();
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container spacing={2} direction="row" justify="center">
        <Grid item xs={12}>
          <Paper style={{ height: '50vh' }}>
            <Typography variant="h1">Im cool</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.videoItem}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
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

export default FrontEndPage;
