import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';

function FrontEndPage() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <h1>Full Stack Page</h1>
    </motion.div>
  );
}

export default FrontEndPage;
