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
  const { portfolio } = translateText[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container spacing={6}>
        <Grid item container spacing={6} xs={12}>
          <Grid item xs={4}>
            <Paper className={classes.fastLinkPapaer} elevation={3}>
              <Typography variant="body1">
                Full Stack Projects Fast Links
              </Typography>
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
          <Grid item xs={4}>
            <Paper className={classes.fastLinkPapaer} elevation={3}>
              <Typography variant="body1">
                Front End Projects Fast Links
              </Typography>
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
          <div id="ducato">
            <PortfolioSingle
              vidUrl="https://youtu.be/6L9CCT7akuU"
              coverImg={require('../assets/ducato_cover.png')}
              projectName="ducato"
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
            showUnder={360}
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
