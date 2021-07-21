import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import ReactPlayer from 'react-player';
import { useStyles } from '../styles/HomePageStyles';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';

interface IProps {
  secondRowText: string;
}

function HomePageSecondRow({ secondRowText }: IProps) {
  const classes = useStyles();
  const vidUrl = 'https://youtu.be/OppnbrfRTZs';
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} className={classes.shortVideo}>
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
        <Grid item xs={2}></Grid>
      </Grid>
    </motion.div>
  );
}

export default HomePageSecondRow;
