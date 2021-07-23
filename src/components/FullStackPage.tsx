import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { fullstack } from '../translate/fullstack';
import { Grid, Container } from '@material-ui/core';
import '../tmp.scss';
import { ThemeContext } from '../context/ThemeContext';
import { useStyles } from '../styles/PorfolioPageStyles';
import VideoPageComponent from './VideoPageComponent';

function FullStack() {
  const classes = useStyles();
  const context = useContext(ThemeContext);
  let { language } = context;
  const { pageHeader, text } = fullstack[language];
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
                vidUrl="https://youtu.be/ujbHxJ55IfM"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

export default FullStack;
