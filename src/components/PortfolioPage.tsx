// Four portfolios added
// Need to add more four project

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import {
  Grid,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import '../tmp.scss';
import PortfolioSingle from './PortfolioSingle';
import { translateText } from '../translate/texts';
import { ThemeContext } from '../context/ThemeContext';
import { HashLink } from 'react-router-hash-link';
import ScrollToTop from 'react-scroll-up';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import { useStyles } from '../styles/PorfolioPageStyles';

function BackEndPage() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  let { language } = context;
  const { portfolio, fullStackLinks, frontEndLinks, miscLinks } = translateText[
    language
  ];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container spacing={3}>
        <Grid item container xs={12} justify="space-between" spacing={1}>
          <Grid item xs={4}>
            <Paper className={classes.fastLinkPapaer} elevation={3}>
              <Typography variant="body1">{fullStackLinks}</Typography>
              <List className={classes.listAll}>
                <ListItem>
                  <ListItemText
                    primary={
                      <HashLink className={classes.hashLink} to="#venezo">
                        {portfolio.venezo.title}
                      </HashLink>
                    }
                    secondary="(Django, Python, Elasticsearch)"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <HashLink className={classes.hashLink} to="#ducato">
                        {portfolio.ducato.title}
                      </HashLink>
                    }
                    secondary="(Django, Python, MySQL)"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.fastLinkPapaer} elevation={3}>
              <Typography variant="body1">{frontEndLinks}</Typography>
              <List className={classes.listAll}>
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
          <Grid item xs={4}>
            <Paper className={classes.fastLinkPapaer} elevation={3}>
              <Typography variant="body1">{miscLinks}</Typography>
              <List className={classes.listAll}>
                <ListItem>
                  <ListItemText
                    primary={
                      <HashLink className={classes.hashLink} to="#ducato">
                        {portfolio.ducato.title}
                      </HashLink>
                    }
                    secondary="(Django, Python)"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <HashLink className={classes.hashLink} to="#ducato">
                        {portfolio.venezo.title}
                      </HashLink>
                    }
                    secondary="(Django, Python, Elasticsearch)"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item container xs={12}>
          <div id="venezo">
            <PortfolioSingle
              vidUrl="https://youtu.be/IHpfcNRXUcU"
              coverImg={require('../assets/venezo-cover.png')}
              projectName="venezo"
            />
          </div>
        </Grid>
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
          <div id="ducato">
            <PortfolioSingle
              vidUrl="https://youtu.be/6L9CCT7akuU"
              coverImg={require('../assets/ducato_cover.png')}
              projectName="ducato"
              buttons={true}
              direction
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
          <div id="sheets">
            <PortfolioSingle
              vidUrl="https://youtu.be/rVCiNUIsKE0"
              coverImg={require('../assets/suppliers.png')}
              projectName="suppliers"
              buttons={false}
              direction
            />
          </div>
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
    </motion.div>
  );
}

export default BackEndPage;
