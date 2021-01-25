import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { fullstack } from '../translate/fullstack';
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
import { Box } from '@material-ui/core';

function FullStack() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  let { language } = context;
  const { portfolio, fullStackLinks, frontEndLinks, miscLinks } = translateText[
    language
  ];
  const { header, text } = fullstack[language];
  const MiscProject = () => {
    return (
      <Box>
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
      </Box>
    );
  };
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container spacing={3}>
        <Grid item container xs={12} justify="space-between" spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.fastLinkPapaer} elevation={3}>
              <Typography variant="body1">{fullStackLinks}</Typography>
              <List
                style={{ display: 'flex', flexDirection: 'row' }}
                className={classes.listAll}
              >
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
                <ListItem>
                  <ListItemText
                    primary={
                      <HashLink className={classes.hashLink} to="#suppliers">
                        {portfolio.suppliers.title}
                      </HashLink>
                    }
                    secondary="(PHP, MySQL, Python, Tensorflow, Keras, Javascript)"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <HashLink className={classes.hashLink} to="#a77">
                        {portfolio.enterprise.title}
                      </HashLink>
                    }
                    secondary="(PHP, MySQL, Python, Tensorflow, Keras, Javascript)"
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
          <div id="suppliers">
            <PortfolioSingle
              vidUrl="https://youtu.be/rVCiNUIsKE0"
              coverImg={require('../assets/suppliers.png')}
              projectName="suppliers"
              buttons={false}
              direction
            />
          </div>
        </Grid>
        <Grid item container xs={12}>
          <div id="a77">
            <PortfolioSingle
              vidUrl="https://youtu.be/yy6BsklDG_s"
              coverImg={require('../assets/a77_2.png')}
              projectName="a77"
              buttons={false}
              direction={false}
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

export default FullStack;
