import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import ReactPlayer from 'react-player';
import { Grid, Paper, Typography, Box } from '@material-ui/core';
import { useStyles } from '../styles/PorfolioPageStyles';
import { translateText } from '../translate/texts';
import { ThemeContext } from '../context/ThemeContext';
import '../tmp.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import PortfolioSingle from './PortfolioSingle';

function BackEndPage() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  let { language } = context;
  const { portfolio } = translateText[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <h1>Portfolio Page</h1>
      <Grid container spacing={6}>
        <Grid item container xs={12}>
          <PortfolioSingle />
        </Grid>
        <Grid item container xs={12}>
          <Paper className={classes.paperPadding} elevation={3}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography variant="h4">
                  Instant Chat based on NuxtJS, Socket.i and Express
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Box className={classes.textPadding}>
                  <Typography variant="body1" align="left">
                    {portfolio.nuxtChat.mainText}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/44Nw_QoZDuc"
                    controls
                    light={require('../assets/nuxt-chat.png')}
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item container xs={12}>
          <Paper className={classes.paperPadding} elevation={3}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography variant="h4">{portfolio.colors.title}</Typography>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/zRLzJnDXyi4"
                    controls
                    light={require('../assets/colors.png')}
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Box className={classes.textPadding}>
                  <Typography variant="body1" align="left">
                    {portfolio.colors.mainText}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default BackEndPage;
