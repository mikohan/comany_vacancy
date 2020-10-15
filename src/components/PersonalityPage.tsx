import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';

function PersonalityPage() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <h1>Personality Page goes Here</h1>
    </motion.div>
  );
}

export default PersonalityPage;
