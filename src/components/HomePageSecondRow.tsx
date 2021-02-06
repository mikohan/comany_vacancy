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
  const vidUrl = 'https://youtu.be/Yb0WsqB32IE';
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container item spacing={2} direction="row" justify="center">
        <Grid item xs={12} lg={8}>
          <Box className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={vidUrl}
              light={require('../assets/mePersonalCover2.png')}
              controls
              width="100%"
              height="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography
            className={classes.videoSideText}
            variant="body1"
            dangerouslySetInnerHTML={{ __html: secondRowText as string }}
          ></Typography>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default HomePageSecondRow;
