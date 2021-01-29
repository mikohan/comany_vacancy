import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { frontend } from '../translate/frontend';
import {
  Grid,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
} from '@material-ui/core';
import '../tmp.scss';
import PortfolioSingle from './PortfolioSingle';
import { translateText } from '../translate/texts';
import { ThemeContext } from '../context/ThemeContext';
import { HashLink } from 'react-router-hash-link';
import ScrollToTop from 'react-scroll-up';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import { useStyles } from '../styles/PorfolioPageStyles';
import VideoPageComponent from './VideoPageComponent';
import CertificateComponent from './CertificateComponent';

function FullStack() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  let { language } = context;
  const { portfolio, frontEndLinks } = translateText[language];
  const { pageHeader, header, text } = frontend[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Container maxWidth="lg" className="containerClass">
        <Grid container spacing={3}>
          <Grid item container xs={12} justify="space-between" spacing={1}>
            <Grid item xs={12}>
              <VideoPageComponent
                text={text}
                header={pageHeader}
                vidUrl="https://youtu.be/83OvL9wrsyk"
              />
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.fastLinkPapaer} elevation={3}>
                <Typography variant="h2">{header}</Typography>
                <Typography variant="body1">{frontEndLinks}</Typography>
                <List
                  style={{ display: 'flex', flexDirection: 'row' }}
                  className={classes.listAll}
                >
                  <ListItem>
                    <ListItemText
                      primary={
                        <HashLink className={classes.hashLink} to="#nuxtChat">
                          {portfolio.nuxtChat.title}
                        </HashLink>
                      }
                      secondary="(NuxtJS, Socket.io, Express, NodeJS)"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <HashLink className={classes.hashLink} to="#colors">
                          {portfolio.colors.title}
                        </HashLink>
                      }
                      secondary="(React, Javascript)"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <HashLink className={classes.hashLink} to="#sheets">
                          {portfolio.sheets.title}
                        </HashLink>
                      }
                      secondary="(Vanilla Javascript)"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item container xs={12}>
            <div id="nuxtChat">
              <PortfolioSingle
                vidUrl="https://youtu.be/44Nw_QoZDuc"
                coverImg={require('../assets/nuxt-chat.png')}
                projectName="nuxtChat"
                direction
              />
            </div>
          </Grid>
          <Grid item container xs={12}>
            <div id="colors">
              <PortfolioSingle
                vidUrl="https://youtu.be/zRLzJnDXyi4"
                coverImg={require('../assets/colors.png')}
                projectName="colors"
              />
            </div>
          </Grid>
          <Grid item container xs={12}>
            <div id="sheets">
              <PortfolioSingle
                vidUrl="https://youtu.be/6L9CCT7akuU"
                coverImg={require('../assets/sheets.png')}
                projectName="sheets"
                buttons={true}
              />
            </div>
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
              image={require('../assets/certs/DRFVueJS.jpg')}
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
      </Container>
    </motion.div>
  );
}

export default FullStack;
