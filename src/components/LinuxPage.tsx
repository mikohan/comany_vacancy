import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { linux } from '../translate/linux';
import { ThemeContext } from '../context/ThemeContext';
import VideoPageComponent from './VideoPageComponent';
import Grid from '@material-ui/core/Grid';
import CertificateComponent from './CertificateComponent';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';

function LinuxPage() {
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
      <Container maxWidth="lg" className="containerClass">
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <VideoPageComponent
                header={header}
                text={text}
                vidUrl="https://youtu.be/yUafPqTg3kw"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <CertificateComponent
              image={require('../assets/certs/LinuxCert.jpg')}
            />
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

export default LinuxPage;
