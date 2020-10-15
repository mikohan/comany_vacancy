import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import ReactPlayer from 'react-player';
import { useStyles } from '../styles/HomePageStyles';
import Grid from '@material-ui/core/Grid';

function FrontEndPage() {
  const classes = useStyles();
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container direction="row" justify="center">
        <Grid className={classes.videoItem} item xs={12}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            controls
            width="100%"
            height="100%"
          />
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default FrontEndPage;
