import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import { Grid } from '@material-ui/core';
import PersonalRow from './PersonalRowComponent';
import { translateText } from '../translate/personal';
import { ThemeContext } from '../context/ThemeContext';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

function PersonalityPage() {
  const context = useContext(ThemeContext);
  let { language } = context;
  const { text, pageTitle } = translateText[language];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Personality Page goes Here</h1>
        </Grid>
        <Grid item xs={12}>
          <PersonalRow items={images} vidUrl="https://youtu.be/XOh5p02-trY" />
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default PersonalityPage;
