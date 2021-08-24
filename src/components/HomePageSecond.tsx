import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import {
  durationPage,
  marketolog,
  salesManager,
  categoryManager,
} from '../config';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';

import { useStyles } from '../styles/AboutPageTestStylesl';
import {
  Box,
  Typography,
  Button,
  Grid,
  Hidden,
  Paper,
  List,
} from '@material-ui/core';
import { translateText } from '../translate/texts';
import { ThemeContext } from '../context/ThemeContext';
import HomePageSecondRow from './HomePageSecondRow';
import { HashLink } from 'react-router-hash-link';
import Contacts from './Contacts';

function AboutPageTest() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  const { language } = context;

  const {
    myName,
    name,
    mainHeading,
    learnMore,
    betweenRow,
    secondRowText,
  } = translateText[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.wrapper}>
            <Box className={classes.mainHeader}>
              <Typography className={classes.myName} variant="h4">
                {myName}
              </Typography>
              <Typography
                className={classes.name}
                style={{ marginBottom: '30px' }}
                variant="h3"
              >
                {name}
              </Typography>
              <Typography className={classes.myName} variant="h4">
                {mainHeading}
              </Typography>
              <HashLink to="#video">
                <Button className={classes.mainButtons} variant="outlined">
                  {learnMore}...
                </Button>
              </HashLink>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.list} elevation={0}>
            <Typography className={classes.listHeader} variant="h4">
              Вакансии отркрытые в компании
            </Typography>
            <Grid container justify="center">
              <List>
                {marketolog && (
                  <Link className={classes.link} to="/fullstack">
                    <ListItem button>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="h6">Маркетолог</Typography>
                        }
                      />
                    </ListItem>
                  </Link>
                )}
                {salesManager && (
                  <Link className={classes.link} to="/fullstack">
                    <ListItem button>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            Менеджер по продажам
                          </Typography>
                        }
                      />
                    </ListItem>
                  </Link>
                )}
                {categoryManager && (
                  <Link className={classes.link} to="/categoryManager">
                    <ListItem button>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            Категорийный менеджер
                          </Typography>
                        }
                      />
                    </ListItem>
                  </Link>
                )}
              </List>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box id="video" className={classes.betweenRow}>
            <Typography className={classes.betweenRowFont} variant="h4">
              {betweenRow}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <HomePageSecondRow secondRowText={secondRowText} />
        </Grid>
        <Hidden mdDown>
          <Grid item xs={12}>
            <Contacts language={language} />
          </Grid>
        </Hidden>
      </Grid>
    </motion.div>
  );
}

export default AboutPageTest;
