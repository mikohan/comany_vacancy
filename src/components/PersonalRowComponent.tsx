import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import ImageGallery from 'react-image-gallery';
import { Grid } from '@material-ui/core';

interface IItem {
  original: string;
  thumbnail: string;
}

interface IProps {
  items: IItem[];
}
function PersonalRow({ items }: IProps) {
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
        <Grid item xs={6}>
          <ImageGallery items={items} />
        </Grid>
        <Grid item xs={6}>
          Content
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default PersonalRow;
