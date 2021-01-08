import React from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';
import ReactPlayer from 'react-player';

function BackEndPage() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: durationPage }}
    >
      <h1>Portfolio Page</h1>

      <ReactPlayer
        url="https://youtu.be/IHpfcNRXUcU"
        controls
        width="100%"
        height="100%"
      />
    </motion.div>
  );
}

export default BackEndPage;
