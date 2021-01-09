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
          <PortfolioSingle
            vidUrl="https://youtu.be/IHpfcNRXUcU"
            coverImg={require('../assets/venezo-cover.png')}
            projectName="venezo"
          />
        </Grid>
        <Grid item container xs={12}>
          <PortfolioSingle
            vidUrl="https://youtu.be/IHpfcNRXUcU"
            coverImg={require('../assets/nuxt-chat.png')}
            projectName="nuxtChat"
          />
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default BackEndPage;
