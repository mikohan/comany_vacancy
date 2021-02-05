import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { linux } from '../translate/linux';
import { ThemeContext } from '../context/ThemeContext';
import VideoPageComponent from './VideoPageComponent';
import Grid from '@material-ui/core/Grid';
import CertificateComponent from './CertificateComponent';
import Container from '@material-ui/core/Container';
import { Box, IconButton } from '@material-ui/core';
import ScrollToTop from 'react-scroll-up';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import { useStyles } from '../styles/PorfolioPageStyles';

function LinuxPage() {
  const context = useContext(ThemeContext);
  let { language } = context;
  const { header, text } = linux[language];
  const classes = useStyles();
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Container maxWidth="lg" className="containerClass">
        <Grid container spacing={3}>
          <Grid container style={{ marginTop: '1rem' }}>
            <Grid item xs={12}>
              <VideoPageComponent
                header={header}
                text={text}
                vidUrl="https://youtu.be/yUafPqTg3kw"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CertificateComponent
              image={require('../assets/certs/LinuxCert.jpg')}
            />
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: '1rem' }}>
          <Grid item xs={12}>
            <ScrollToTop
              style={{
                bottom: 100,
                right: 100,
              }}
              showUnder={260}
            >
              <IconButton color="primary" aria-label="add to shopping cart">
                <PresentToAllIcon className={classes.scrollUp} />
              </IconButton>
            </ScrollToTop>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

export default LinuxPage;
