import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { durationPage } from '../config';

class SomeContent extends Component {
  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: durationPage }}
      >
        <h1>Havbar goes here</h1>
      </motion.div>
    );
  }
}

export default SomeContent;
