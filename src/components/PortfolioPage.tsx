import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { Grid } from '@material-ui/core';
import '../tmp.scss';
import PortfolioSingle from './PortfolioSingle';
import { translateText } from '../translate/texts';
import { ThemeContext } from '../context/ThemeContext';

function BackEndPage() {
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
      <h1>{portfolio.pageTitle}</h1>
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
            vidUrl="https://youtu.be/44Nw_QoZDuc"
            coverImg={require('../assets/nuxt-chat.png')}
            projectName="nuxtChat"
            direction
          />
        </Grid>
        <Grid item container xs={12}>
          <PortfolioSingle
            vidUrl="https://youtu.be/zRLzJnDXyi4"
            coverImg={require('../assets/colors.png')}
            projectName="colors"
          />
        </Grid>
        <Grid item container xs={12}>
          <PortfolioSingle
            vidUrl="https://youtu.be/6L9CCT7akuU"
            coverImg={require('../assets/ducato_cover.png')}
            projectName="ducato"
            buttons={false}
            direction
          />
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default BackEndPage;
