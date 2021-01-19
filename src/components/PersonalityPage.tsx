import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import ImageGallery from 'react-image-gallery';
import { Grid } from '@material-ui/core';

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
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <Grid container spacing={3}>
        <h1>Personality Page goes Here</h1>
      </Grid>
    </motion.div>
  );
}

export default PersonalityPage;
