import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { linux } from '../translate/linux';
import { ThemeContext } from '../context/ThemeContext';
import VideoPageComponent from './VideoPageComponent';
import Grid from '@material-ui/core/Grid';
import CertificateComponent from './CertificateComponent';

function MarketingPage() {
  const context = useContext(ThemeContext);
  let { language } = context;
  const { header, text } = linux[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <VideoPageComponent
            header={header}
            text={text}
            vidUrl="https://youtu.be/yUafPqTg3kw"
          />
        </Grid>
        <Grid item container xs={12}>
          <CertificateComponent
            image={require('../assets/certs/LinuxCert.jpg')}
          />
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default MarketingPage;
