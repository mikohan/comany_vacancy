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
  Container,
  Hidden,
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

function FullStack() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  let { language } = context;
  const { portfolio, fullStackLinks } = translateText[language];
  const { pageHeader, header, text } = fullstack[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Container maxWidth="lg" className="containerClass">
        <Grid container spacing={5}>
          <Grid item container xs={12} justify="space-between">
            <Grid item xs={12}>
              <VideoPageComponent
                text={text}
                header={pageHeader}
                vidUrl="https://youtu.be/83_P5OBewLw"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

export default FullStack;
