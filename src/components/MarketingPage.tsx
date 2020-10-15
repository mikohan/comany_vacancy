import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';

function MarketingPage() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <h1>Marketing Page goes Here</h1>
    </motion.div>
  );
}

export default MarketingPage;
