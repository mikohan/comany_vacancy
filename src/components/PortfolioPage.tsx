import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import ReactPlayer from 'react-player';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import { useStyles } from '../styles/PorfolioPageStyles';

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
              <Grid item xs={12} sm={6}>
                <ReactPlayer
                  url="https://youtu.be/IHpfcNRXUcU"
                  controls
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4">
                  Venezo Project E-commerce project (Python, Django)
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default BackEndPage;
