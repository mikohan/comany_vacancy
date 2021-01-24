import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import PageSinglePage from './PageSinglePage';
function BackEndPage() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <h1>Full stack Page former BackEnd component</h1>
      <PageSinglePage />
    </motion.div>
  );
}

export default BackEndPage;
