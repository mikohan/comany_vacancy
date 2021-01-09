import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { Grid } from '@material-ui/core';
import '../tmp.scss';
import PortfolioSingle from './PortfolioSingle';

function BackEndPage() {
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
