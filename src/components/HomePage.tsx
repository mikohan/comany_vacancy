import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import ReactPlayer from 'react-player';
import { useStyles } from '../styles/HomePageStyles';
import Grid from '@material-ui/core/Grid';
import { Paper, Box, Typography } from '@material-ui/core';

function FrontEndPage() {
  const classes = useStyles();
  const vidUrl = 'https://youtu.be/83_P5OBewLw';
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container spacing={2} direction="row" justify="center">
        <Grid item xs={12}></Grid>
        <Grid item xs={8}>
          <Box className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={vidUrl}
              controls
              width="100%"
              height="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.videoSideText} variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
            libero incidunt id saepe vitae autem consectetur officiis nemo odit,
            excepturi unde odio quasi, ad recusandae? Nihil magni eum veljit
            esse?
          </Typography>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default FrontEndPage;
