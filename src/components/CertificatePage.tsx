import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import {
  Grid,
  Paper,
  IconButton,
  Typography,
  Container,
} from '@material-ui/core';
import '../tmp.scss';
import { ThemeContext } from '../context/ThemeContext';
import ScrollToTop from 'react-scroll-up';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import { useStyles } from '../styles/PorfolioPageStyles';
import CertificateComponent from './CertificateComponent';
import { certificatesLang } from '../translate/certs';

function CertPage() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  let { language } = context;
  const { pageHeader } = certificatesLang[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Container className="containerClass" maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item container xs={12} justify="space-between" spacing={1}>
            <Grid item xs={12}>
              <Paper>
                <Typography className={classes.headerClass} variant="h3">
                  {pageHeader}
                </Typography>
              </Paper>
            </Grid>
            <Grid item container xs={12}>
              <CertificateComponent
                image={require('../assets/certs/typescript.jpg')}
              />
            </Grid>
            <Grid item container xs={12}>
              <CertificateComponent
                image={require('../assets/certs/SSR_React.jpg')}
              />
            </Grid>
            <Grid item container xs={12}>
              <CertificateComponent
                image={require('../assets/certs/ReactFull.jpg')}
              />
            </Grid>
            <Grid item container xs={12}>
              <CertificateComponent
                image={require('../assets/certs/nuxtJS.jpg')}
              />
            </Grid>
            <Grid item container xs={12}>
              <CertificateComponent
                image={require('../assets/certs/DRFVueJS.jpg')}
              />
            </Grid>
            <Grid item container xs={12}>
              <CertificateComponent
                image={require('../assets/certs/vueMaximilian.jpg')}
              />
            </Grid>
            <Grid item container xs={12}>
              <CertificateComponent
                image={require('../assets/certs/photo.jpg')}
              />
            </Grid>
            <Grid item container xs={12}>
              <CertificateComponent
                image={require('../assets/certs/LinuxCert.jpg')}
              />
            </Grid>
            <Grid item container xs={12}>
              <CertificateComponent
                image={require('../assets/certs/advords.jpg')}
              />
            </Grid>
            <Grid item container xs={12}>
              <CertificateComponent
                image={require('../assets/certs/Html.jpg')}
              />
            </Grid>
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
        </Grid>
      </Container>
    </motion.div>
  );
}

export default CertPage;
